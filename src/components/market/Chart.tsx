import React, { useState, useEffect } from "react";
import ApexChart from "../graphs/ApexChart";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { pricing } from "../../redux/reducers/pricing/priceSlice";
import { updateField } from "../../redux/reducers/form/formSlice";
import { toast, ToastContainer } from "react-toastify";

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
  const formData = useAppSelector((state) => state.form);

  const [seriesData, setSeriesData] = useState<any[]>([]);
  const [selectedRange, setSelectedRange] = useState<string>(() => {
    const storedDuration = localStorage.getItem("selectedDuration");
    return storedDuration ? storedDuration : "Week";
  });

  const durations = ["Week", "Month"];

  useEffect(() => {
    const newSeriesData = selectedCountries.flatMap((country) =>
      selectedCrops.map((crop) => {
        const countryInfo = countriesData.find((c) => c.name === country);
        const cropData = marketData.countries.find(
          (c: any) => c.name === country,
        )?.crops[crop];

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

  useEffect(() => {
    const interval = setInterval(() => {
      const storedDuration = localStorage.getItem("selectedDuration");
      if (storedDuration && storedDuration !== selectedRange) {
        setSelectedRange(storedDuration);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [selectedRange]);

  useEffect(() => {
    localStorage.setItem("selectedDuration", selectedRange);
  }, [selectedRange]);

  const handleDurationChange = async (newDuration: string) => {
    const { crop_id, country_id } = formData;

    // Validate crop selection
    if (!crop_id) {
      toast.error("Please select a crop");
      return;
    }
    if (!country_id) {
      toast.error("Please select a country");
      return;
    }
    if (!durations.includes(newDuration)) {
      toast.error("Invalid duration.");
      return;
    }

    setSelectedRange(newDuration);

    dispatch(updateField({ field: "duration", value: newDuration }));

    try {
      const response = await dispatch(pricing(formData)).unwrap();
      toast.success(response.message);
      const res = JSON.stringify(response);
      localStorage.setItem("crops_market", res);
    } catch (err) {
      toast.error("An error occurred while submitting.");
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-secondary-black dark:text-white rounded-[4px] shadow">
      <ToastContainer />
      <h2 className="text-md font-bold mb-2 sm:text-2xl lg:text-sm xl:text-lg">
        Crop Price Movement
      </h2>

      {/* Duration Selector */}
      <div className="flex items-center mb-2">
        {durations.map((duration) => (
          <button
            key={duration}
            onClick={() => handleDurationChange(duration)}
            disabled={!durations.includes(duration)}
            className={`px-2 py-1 md:text-lg lg:text-[12px] xl:text-base 2xl:text-lg rounded-md transition-all ${
              selectedRange === duration
                ? "bg-bg-gray dark:bg-black text-brand-blue shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-brand-blue"
            } ${!durations.includes(duration) && "opacity-50 cursor-not-allowed"}`}
          >
            {duration}
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
