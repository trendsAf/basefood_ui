import React, { useState, useEffect } from "react";
import ApexChart from "../graphs/ApexChart";

const datasets = {
  "1 D": "1 D",
  "1 W": "1 W",
  "1 M": "1 M",
  "6 M": "6 M",
  "1 Y": "1 Y",
};

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
  const [selectedRange, setSelectedRange] =
    useState<keyof typeof datasets>("1 Y");
  const [seriesData, setSeriesData] = useState<any[]>([]);

  useEffect(() => {
    const newSeriesData = selectedCountries.flatMap((country) =>
      selectedCrops.map((crop) => {
        const countryInfo = countriesData.find((c) => c.name === country);
        const cropData = marketData.countries.find(
          (c: any) => c.name === country,
        )?.crops[crop];
        return {
          name: `${country} - ${crop}`,
          data: cropData ? cropData[selectedRange] : [],
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
      <h2 className="text-xl font-bold mb-4">Crop Price Movement</h2>
      <div className="flex items-center gap-6 mb-4">
        {Object.values(datasets).map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range as keyof typeof datasets)}
            className={`py-1 text-sm  hover:text-brand-blue ${
              selectedRange === range ? "text-brand-blue" : ""
            }`}
          >
            {range}
          </button>
        ))}
      </div>
      <div className="dark:bg-black py-2 rounded-lg flex items-center w-full pb-6">
        <ApexChart data={seriesData} />
      </div>
    </div>
  );
};

export default Chart;
