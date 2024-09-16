/* eslint-disable quotes */
import React, { useState } from "react";
import CropsMarket from "../components/market/CropsMarket";
import Categories from "../components/market/Categories";
import MarketNews from "../components/market/MarketNews";
import Countries from "../components/market/Countries";
import Chart from "../components/market/Chart";

const countriesData = [
  { name: "Rwanda", color: "#FF5733", checked: true },
  { name: "Uganda", color: "#33FF57", checked: true },
  { name: "D.R. Congo", color: "#3357FF", checked: true },
  { name: "Burundi", color: "#FF33A1", checked: true },
  { name: "Kenya", color: "#33FFA1", checked: true },
  { name: "Zambia", color: "#A133FF", checked: false },
  { name: "Zimbabwe", color: "#FFA133", checked: false },
  { name: "Somalia", color: "#33A1FF", checked: false },
  { name: "Tunisia", color: "#FF3333", checked: false },
  { name: "Seychelles", color: "#33FF33", checked: false },
  { name: "Mauritius", color: "#3333FF", checked: false },
  { name: "Libya", color: "#FF3333", checked: false },
  { name: "Madagascar", color: "#FF5733", checked: false },
  { name: "Malawi", color: "#FF33A1", checked: false },
  { name: "Eswatini", color: "#33FF57", checked: false },
  { name: "Ethiopia", color: "#33A1FF", checked: false },
  { name: "Djibouti", color: "#FF33A1", checked: false },
  { name: "Egypt", color: "#3357FF", checked: false },
  { name: "Eritrea", color: "#A133FF", checked: false },
  { name: "Comoros", color: "#33FFA1", checked: false },
  { name: "Sudan", color: "#FFA133", checked: false },
];

interface DashboardProps {
  isCollapsed?: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isCollapsed }) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(
    countriesData
      .filter((country) => country.checked)
      .map((country) => country.name),
  );
  const [selectedCrops, setSelectedCrops] = useState<string[]>(["Maize"]);

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
    <div className=" flex p-2 items-start justify-between gap-3">
      <div className={` p-2 w-[20%] flex flex-col gap-4`}>
        <CropsMarket onCropSelect={handleCropSelect} />
        <Categories />
      </div>
      <div className=" p-2 w-full flex flex-col gap-4 h-full">
        <Chart
          selectedCountries={selectedCountries}
          //@ts-ignore
          selectedCrops={selectedCrops}
        />
        <MarketNews />
      </div>
      <div className={`${isCollapsed ? "w-[10%]" : "w-[15%]"}`}>
        <Countries
          countriesData={countriesData}
          onCountrySelect={handleCountrySelect}
        />
      </div>
    </div>
  );
};

export default Dashboard;
