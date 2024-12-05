import React, { useState, useEffect } from "react";
import ApexChart from "../graphs/ApexChart";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { pricing } from "../../redux/reducers/pricing/priceSlice";
import { updateField } from "../../redux/reducers/form/formSlice";
import { toast } from "react-toastify";

interface ChartProps {
  selectedCountries: string[];
  countriesData: { name: string; color: string; checked: boolean }[];
  selectedCrops: string[];
  marketData: any;
}

const Chart: React.FC<ChartProps> = ({
  selectedCountries,
  countriesData,
  selectedCrops,
  marketData,
}) => {
  const dispatch = useAppDispatch();
  // const { isLoading, error } = useAppSelector((state) => state.pricing);
  const formData = useAppSelector((state) => state.form);

  const [seriesData, setSeriesData] = useState<any[]>([]);
  const [selectedRange, setSelectedRange] = useState<string>("Week");

  // Define the available duration options
  const duration = ["Week", "Month"];

  useEffect(() => {
    const newSeriesData = selectedCountries.flatMap((country) =>
      selectedCrops.map((crop) => {
        const countryInfo = countriesData.find((c) => c.name === country);
        const cropData = marketData.countries.find(
          (c: any) => c.name === country,
        )?.crops[crop];

        // Adjust data range based on selected range (Week or Month)
        const dataRange = selectedRange === "Week" ? "1 W" : "1 M";

        return {
          name: `${country} - ${crop}`,
          data: cropData ? cropData[dataRange] : [],
          color: countryInfo?.color,
        };
      }),
    );
    setSeriesData(newSeriesData);
  }, [
    selectedCountries,
    selectedCrops,
    selectedRange,
    countriesData,
    marketData,
  ]);

  const handleDurationChange = async (newDuration: string) => {
    console.log("Previous duration:", selectedRange); // Log previous duration
    setSelectedRange(newDuration);

    // Update the duration field in Redux store
    dispatch(updateField({ field: "duration", value: newDuration }));
    console.log("Updated duration in Redux:", newDuration); // Log updated duration

    // Check the updated form data before making the API call
    console.log("Form data before pricing API call:", formData);

    try {
      // Trigger API call with the updated form data
      const res = await dispatch(pricing(formData)).unwrap();
      toast.success(res.message); // Show success toast
      console.log("Submission success:", res); // Log successful submission
    } catch (err) {
      // Handle any errors
      console.error("Submission failed:", err);
      toast.error("An error occurred while submitting."); // Show error toast
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-secondary-black dark:text-white rounded-[4px]">
      <h2 className="text-md font-bold mb-2">Crop Price Movement</h2>

      {/* Duration Selector */}
      <div className="flex items-center mb-2">
        {duration.map((key, idx) => (
          <button
            key={idx}
            onClick={() => handleDurationChange(key)}
            className={`px-4 py-2 text-sm rounded-md transition-all ${
              selectedRange === key
                ? "bg-bg-gray dark:bg-black text-brand-blue shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-brand-blue"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Display the chart */}
      <div className="dark:bg-black rounded-lg flex items-center w-full pb-2">
        <ApexChart data={seriesData} />
      </div>
    </div>
  );
};

export default Chart;
