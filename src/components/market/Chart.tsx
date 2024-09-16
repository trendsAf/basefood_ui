import React, { useState } from "react";
import ApexChart from "../graphs/ApexChart";

const datasets = {
  "1 D": "1 D",
  "1 W": "1 W",
  "1 M": "1 M",
  "6 M": "6 M",
  "1 Y": "1 Y",
};

const countryData: any = {
  Rwanda: {
    "1 D": [
      { x: new Date("2023-08-25T09:00:00"), y: 300 },
      { x: new Date("2023-08-25T12:00:00"), y: 305 },
      { x: new Date("2023-08-25T15:00:00"), y: 310 },
      { x: new Date("2023-08-25T18:00:00"), y: 320 },
    ],
    "1 W": [
      { x: new Date("2023-08-19"), y: 300 },
      { x: new Date("2023-08-20"), y: 305 },
      { x: new Date("2023-08-21"), y: 310 },
      { x: new Date("2023-08-22"), y: 320 },
      { x: new Date("2023-08-23"), y: 315 },
      { x: new Date("2023-08-24"), y: 295 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "1 M": [
      { x: new Date("2023-08-01"), y: 200 },
      { x: new Date("2023-08-05"), y: 215 },
      { x: new Date("2023-08-10"), y: 260 },
      { x: new Date("2023-08-15"), y: 280 },
      { x: new Date("2023-08-20"), y: 305 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "6 M": [
      { x: new Date("2023-03-01"), y: 150 },
      { x: new Date("2023-04-01"), y: 170 },
      { x: new Date("2023-05-01"), y: 200 },
      { x: new Date("2023-06-01"), y: 230 },
      { x: new Date("2023-07-01"), y: 250 },
      { x: new Date("2023-08-01"), y: 280 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "1 Y": [
      { x: new Date("2022-08-01"), y: 120 },
      { x: new Date("2022-11-01"), y: 140 },
      { x: new Date("2023-02-01"), y: 160 },
      { x: new Date("2023-05-01"), y: 200 },
      { x: new Date("2023-08-01"), y: 280 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
  },
  Uganda: {
    "1 D": [
      { x: new Date("2023-08-25T09:00:00"), y: 300 },
      { x: new Date("2023-08-25T12:00:00"), y: 305 },
      { x: new Date("2023-08-25T15:00:00"), y: 310 },
      { x: new Date("2023-08-25T18:00:00"), y: 320 },
    ],
    "1 W": [
      { x: new Date("2023-08-19"), y: 300 },
      { x: new Date("2023-08-20"), y: 305 },
      { x: new Date("2023-08-21"), y: 310 },
      { x: new Date("2023-08-22"), y: 320 },
      { x: new Date("2023-08-23"), y: 315 },
      { x: new Date("2023-08-24"), y: 295 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "1 M": [
      { x: new Date("2023-08-01"), y: 200 },
      { x: new Date("2023-08-05"), y: 215 },
      { x: new Date("2023-08-10"), y: 260 },
      { x: new Date("2023-08-15"), y: 280 },
      { x: new Date("2023-08-20"), y: 305 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "6 M": [
      { x: new Date("2023-03-01"), y: 150 },
      { x: new Date("2023-04-01"), y: 170 },
      { x: new Date("2023-05-01"), y: 200 },
      { x: new Date("2023-06-01"), y: 230 },
      { x: new Date("2023-07-01"), y: 250 },
      { x: new Date("2023-08-01"), y: 280 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "1 Y": [
      { x: new Date("2022-08-01"), y: 110 },
      { x: new Date("2022-11-01"), y: 140 },
      { x: new Date("2023-02-01"), y: 260 },
      { x: new Date("2023-05-01"), y: 300 },
      { x: new Date("2023-08-01"), y: 280 },
      { x: new Date("2023-08-25"), y: 190 },
    ],
  },
  "D.R. Congo": {
    "1 D": [
      { x: new Date("2023-08-25T09:00:00"), y: 300 },
      { x: new Date("2023-08-25T12:00:00"), y: 305 },
      { x: new Date("2023-08-25T15:00:00"), y: 310 },
      { x: new Date("2023-08-25T18:00:00"), y: 320 },
    ],
    "1 W": [
      { x: new Date("2023-08-19"), y: 300 },
      { x: new Date("2023-08-20"), y: 305 },
      { x: new Date("2023-08-21"), y: 310 },
      { x: new Date("2023-08-22"), y: 320 },
      { x: new Date("2023-08-23"), y: 315 },
      { x: new Date("2023-08-24"), y: 295 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "1 M": [
      { x: new Date("2023-08-01"), y: 200 },
      { x: new Date("2023-08-05"), y: 215 },
      { x: new Date("2023-08-10"), y: 260 },
      { x: new Date("2023-08-15"), y: 280 },
      { x: new Date("2023-08-20"), y: 305 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "6 M": [
      { x: new Date("2023-03-01"), y: 150 },
      { x: new Date("2023-04-01"), y: 170 },
      { x: new Date("2023-05-01"), y: 200 },
      { x: new Date("2023-06-01"), y: 230 },
      { x: new Date("2023-07-01"), y: 250 },
      { x: new Date("2023-08-01"), y: 280 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "1 Y": [
      { x: new Date("2022-08-01"), y: 110 },
      { x: new Date("2022-11-01"), y: 140 },
      { x: new Date("2023-02-01"), y: 260 },
      { x: new Date("2023-05-01"), y: 300 },
      { x: new Date("2023-08-01"), y: 280 },
      { x: new Date("2023-08-25"), y: 190 },
    ],
  },
  Burundi: {
    "1 D": [
      { x: new Date("2023-08-25T09:00:00"), y: 300 },
      { x: new Date("2023-08-25T12:00:00"), y: 305 },
      { x: new Date("2023-08-25T15:00:00"), y: 310 },
      { x: new Date("2023-08-25T18:00:00"), y: 320 },
    ],
    "1 W": [
      { x: new Date("2023-08-19"), y: 300 },
      { x: new Date("2023-08-20"), y: 305 },
      { x: new Date("2023-08-21"), y: 310 },
      { x: new Date("2023-08-22"), y: 320 },
      { x: new Date("2023-08-23"), y: 315 },
      { x: new Date("2023-08-24"), y: 295 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "1 M": [
      { x: new Date("2023-08-01"), y: 200 },
      { x: new Date("2023-08-05"), y: 215 },
      { x: new Date("2023-08-10"), y: 260 },
      { x: new Date("2023-08-15"), y: 280 },
      { x: new Date("2023-08-20"), y: 305 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "6 M": [
      { x: new Date("2023-03-01"), y: 150 },
      { x: new Date("2023-04-01"), y: 170 },
      { x: new Date("2023-05-01"), y: 200 },
      { x: new Date("2023-06-01"), y: 230 },
      { x: new Date("2023-07-01"), y: 250 },
      { x: new Date("2023-08-01"), y: 280 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "1 Y": [
      { x: new Date("2022-08-01"), y: 110 },
      { x: new Date("2022-11-01"), y: 140 },
      { x: new Date("2023-02-01"), y: 260 },
      { x: new Date("2023-05-01"), y: 300 },
      { x: new Date("2023-08-01"), y: 280 },
      { x: new Date("2023-08-25"), y: 190 },
    ],
  },
  Kenya: {
    "1 D": [
      { x: new Date("2023-08-25T09:00:00"), y: 300 },
      { x: new Date("2023-08-25T12:00:00"), y: 305 },
      { x: new Date("2023-08-25T15:00:00"), y: 310 },
      { x: new Date("2023-08-25T18:00:00"), y: 320 },
    ],
    "1 W": [
      { x: new Date("2023-08-19"), y: 300 },
      { x: new Date("2023-08-20"), y: 305 },
      { x: new Date("2023-08-21"), y: 310 },
      { x: new Date("2023-08-22"), y: 320 },
      { x: new Date("2023-08-23"), y: 315 },
      { x: new Date("2023-08-24"), y: 295 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "1 M": [
      { x: new Date("2023-08-01"), y: 200 },
      { x: new Date("2023-08-05"), y: 215 },
      { x: new Date("2023-08-10"), y: 260 },
      { x: new Date("2023-08-15"), y: 280 },
      { x: new Date("2023-08-20"), y: 305 },
      { x: new Date("2023-08-25"), y: 300 },
    ],
    "6 M": [
      { x: new Date("2023-03-01"), y: 150 },
      { x: new Date("2023-04-01"), y: 170 },
      { x: new Date("2023-05-01"), y: 350 },
      { x: new Date("2023-06-01"), y: 230 },
      { x: new Date("2023-07-01"), y: 200 },
      { x: new Date("2023-08-01"), y: 210 },
      { x: new Date("2023-08-25"), y: 100 },
    ],
    "1 Y": [
      { x: new Date("2022-08-01"), y: 110 },
      { x: new Date("2022-11-01"), y: 140 },
      { x: new Date("2023-02-01"), y: 200 },
      { x: new Date("2023-05-01"), y: 220 },
      { x: new Date("2023-08-01"), y: 180 },
      { x: new Date("2023-08-25"), y: 130 },
    ],
  },
  // Add more countries...
};

const Chart: React.FC<{ selectedCountries: string[] }> = ({
  selectedCountries,
}) => {
  const [selectedRange, setSelectedRange] =
    useState<keyof typeof datasets>("1 Y");

  const seriesData = selectedCountries.map((country) => {
    return {
      name: country,
      data: countryData[country][selectedRange] || [],
    };
  });

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
