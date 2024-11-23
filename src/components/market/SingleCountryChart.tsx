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
  selectedSingleCountries: string[];
  SingleCountriesData: { name: string }[];
  selectedCrops: string[];
  marketData: any;
}

const SingleCountryChart: React.FC<ChartProps> = ({
  selectedSingleCountries,
  SingleCountriesData,
  selectedCrops,
  marketData,
}) => {
  const [selectedRange, setSelectedRange] =
    useState<keyof typeof datasets>("1 Y");
  const [seriesData, setSeriesData] = useState<any[]>([]);

  useEffect(() => {
    const newSeriesData = selectedSingleCountries.flatMap((country) =>
      selectedCrops.map((crop) => {
        const cropData = marketData.countries.find(
          (c: any) => c.name === country,
        )?.crops[crop];
        return {
          name: `${country} - ${crop}`,
          data: cropData ? cropData[selectedRange] : [],
        };
      }),
    );
    setSeriesData(newSeriesData);
  }, [
    selectedSingleCountries,
    selectedCrops,
    selectedRange,
    SingleCountriesData,
    marketData,
  ]);

  return (
    <div className="p-4 bg-white dark:bg-secondary-black dark:text-white rounded-[4px]">
      <h2 className="text-md font-bold mb-2">Crop Price Movement</h2>
      <div className="flex items-center gap-6 mb-2">
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
      <div className="dark:bg-black rounded-lg flex items-center w-full pb-2">
        <ApexChart data={seriesData} />
      </div>
    </div>
  );
};

export default SingleCountryChart;
