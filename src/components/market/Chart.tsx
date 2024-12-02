import React, { useState, useEffect } from "react";
import ApexChart from "../graphs/ApexChart";

// const datasets = {
//   "1 D": "1 D",
//   "1 W": "1 W",
//   "1 M": "1 M",
//   "6 M": "6 M",
//   "1 Y": "1 Y",
// };

const TIME_RANGES = {
  WEEK: "Week",
  MONTH: "Month",
} as const;
type TimeRange = keyof typeof TIME_RANGES;

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
  const [seriesData, setSeriesData] = useState<any[]>([]);
  const [selectedRange, setSelectedRange] = useState<TimeRange>("WEEK");

  useEffect(() => {
    const newSeriesData = selectedCountries.flatMap((country) =>
      selectedCrops.map((crop) => {
        const countryInfo = countriesData.find((c) => c.name === country);
        const cropData = marketData.countries.find(
          (c: any) => c.name === country,
        )?.crops[crop];

        const dataRange = selectedRange === "WEEK" ? "1 W" : "1 M";

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

  return (
    <div className="p-4 bg-white dark:bg-secondary-black dark:text-white rounded-[4px]">
      <h2 className="text-md font-bold mb-2">Crop Price Movement</h2>
      <div className="flex items-center mb-2">
        {Object.entries(TIME_RANGES).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedRange(key as TimeRange)}
            className={`
              px-4 py-2 text-sm  rounded-md transition-all
              ${
                selectedRange === key
                  ? "bg-bg-gray dark:bg-black text-brand-blue shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-brand-blue"
              }
            `}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="dark:bg-black rounded-lg flex items-center w-full pb-2">
        <ApexChart data={seriesData} />
      </div>
    </div>
  );
};

export default Chart;
