/* eslint-disable no-console */
/* eslint-disable quotes */
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "../components/market/Chart";
import Countries from "../components/market/Countries";
import Crops from "../components/market/crops/Index";
import CropsMarket from "../components/market/CropsMarket";
import MarketInsights from "../components/market/MarketInsights";
import { decodeToken } from "../utils/config/decode";
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
  { name: "Uganda", checked: false },
  { name: "D.R. Congo", checked: false },
  { name: "Burundi", checked: false },
  { name: "Kenya", checked: false },
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

const Dashboard: React.FC<DashboardProps> = () => {
  const navigate = useNavigate();
  const [selectedCountries, setSelectedCountries] = useState<string[]>(
    countriesWithColors
      .filter((country) => country.checked)
      .map((country) => country.name),
  );

  const token = Cookies.get("access_token");
  useEffect(() => {
    if (token) {
      try {
        const decodedToken = decodeToken(token);

        if (decodedToken?.is_confirmed === true) {
          navigate("/");
        } else {
          navigate("/business_information");
        }
      } catch (error) {
        console.error("Token decoding failed:", error);
      }
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

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

  const handleCropSelect = (crop: string | null) => {
    setSelectedCrops(crop ? [crop] : []);
  };

  return (
    <div className=" flex flex-col md:flex-row w-full pt-3 items-start justify-between gap-3">
      <div className={`flex w-full md:w-[20%] flex-col gap-4`}>
        <div className="flex 2xl:flex-row flex-col items-center justify-between dark:bg-secondary-black pr-2 py-1 rounded">
          <Crops />
        </div>
        <CropsMarket onCropSelect={handleCropSelect} />
        <MarketInsights />
      </div>
      <div className="w-full  flex flex-col gap-4 md:w-[65%] h-full">
        <Chart
          selectedCountries={selectedCountries}
          countriesData={countriesWithColors}
          selectedCrops={selectedCrops}
          marketData={marketData}
        />
      </div>
      <div className={`w-full md:w-[15%]`}>
        <Countries
          countriesData={countriesWithColors}
          onCountrySelect={handleCountrySelect}
        />
      </div>
    </div>
  );
};

export default Dashboard;
