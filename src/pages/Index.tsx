/* eslint-disable quotes */
import React, { useState } from "react";
import CropsMarket from "../components/market/CropsMarket";
import Categories from "../components/market/Categories";
import MarketNews from "../components/market/MarketNews";
import Countries from "../components/market/Countries";
import Chart from "../components/market/Chart";
import marketData from "../utils/marketData.json";

const distinctColors = [
  "#FF4136", // Bright Red
  "#2ECC40", // Green
  "#0074D9", // Blue
  "#FF851B", // Orange
  "#B10DC9", // Purple
  "#FFDC00", // Yellow
  "#39CCCC", // Teal
  "#F012BE", // Magenta
  "#01FF70", // Lime
  "#85144b", // Maroon
  "#7FDBFF", // Aqua
  "#3D9970", // Olive
  "#111111", // Charcoal
  "#AAAAAA", // Gray
  "#E65100", // Deep Orange
  "#1565C0", // Dark Blue
  "#4A148C", // Deep Purple
  "#004D40", // Dark Teal
  "#880E4F", // Dark Pink
  "#33691E", // Dark Green
  "#BF360C", // Deep Red
];

const countriesData = [
  { name: "Rwanda", checked: true },
  { name: "Uganda", checked: true },
  { name: "D.R. Congo", checked: true },
  { name: "Burundi", checked: true },
  { name: "Kenya", checked: true },
  { name: "Zambia", checked: false },
  { name: "Zimbabwe", checked: false },
  { name: "Somalia", checked: false },
  { name: "Tunisia", checked: false },
  { name: "Seychelles", checked: false },
  { name: "Mauritius", checked: false },
  { name: "Libya", checked: false },
  { name: "Madagascar", checked: false },
  { name: "Malawi", checked: false },
  { name: "Eswatini", checked: false },
  { name: "Ethiopia", checked: false },
  { name: "Djibouti", checked: false },
  { name: "Egypt", checked: false },
  { name: "Eritrea", checked: false },
  { name: "Comoros", checked: false },
  { name: "Sudan", checked: false },
];

interface DashboardProps {
  isCollapsed?: boolean;
}
const countriesWithColors = countriesData.map((country, index) => ({
  ...country,
  color: distinctColors[index % distinctColors.length],
}));

const Dashboard: React.FC<DashboardProps> = ({ isCollapsed }) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(
    countriesWithColors
      .filter((country) => country.checked)
      .map((country) => country.name),
  );

  const [selectedCrops, setSelectedCrops] = useState<string[]>([
    "Maize",
    "Wheat",
    "Coffee",
  ]);

  const handleCountrySelect = (country: string) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country],
    );
  };

  const handleCropSelect = (crops: string[]) => {
    setSelectedCrops(crops);
  };

  return (
    <div className=" flex pt-3 items-start justify-between gap-3">
      <div className={`  w-[20%] flex flex-col gap-4`}>
        <CropsMarket onCropSelect={handleCropSelect} />
        <Categories />
      </div>
      <div className=" px-2 w-full flex flex-col gap-4 h-full">
        <Chart
          selectedCountries={selectedCountries}
          countriesData={countriesWithColors}
          selectedCrops={selectedCrops}
          marketData={marketData}
        />
        <MarketNews />
      </div>
      <div className={`${isCollapsed ? "w-[15%]" : "w-[15%]"}`}>
        <Countries
          countriesData={countriesWithColors}
          onCountrySelect={handleCountrySelect}
        />
      </div>
    </div>
  );
};

export default Dashboard;
