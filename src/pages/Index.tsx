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

const Dashboard: React.FC = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(
    countriesData
      .filter((country) => country.checked)
      .map((country) => country.name),
  );
  const [selectedCrops, setSelectedCrops] = useState<string[]>(["Maize"]); // Default selected crop

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
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 min-h-screen w-[100%]">
      <div className="md:col-span-1 flex flex-col gap-2">
        <CropsMarket onCropSelect={handleCropSelect} />
        <Categories />
      </div>
      <div className="md:col-span-2 flex flex-col gap-2">
        <Chart
          selectedCountries={selectedCountries}
          //@ts-ignore
          selectedCrops={selectedCrops}
        />
        <MarketNews />
      </div>
      <div className="md:col-span-1">
        <Countries
          countriesData={countriesData}
          onCountrySelect={handleCountrySelect}
        />
      </div>
    </div>
  );
};

export default Dashboard;
