import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "../components/market/Chart";
import Countries from "../components/market/Countries";
import Crops from "../components/market/crops/Index";
import CropsMarket from "../components/market/CropsMarket";
import MarketInsights from "../components/market/MarketInsights";
import MarketIndicators from "../components/MarketIndicators";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getCountry } from "../redux/reducers/countries/countrySlice";
import { updateField } from "../redux/reducers/form/formSlice";
import { decodeToken } from "../utils/config/decode";
import { insightsData } from "../utils/market/insightData";
import marketData from "../utils/marketData.json";

const distinctColors = [
  "#FF4136",
  "#2ECC40",
  "#0074D9",
  "#FF851B",
  "#B10DC9",
  "#FFDC00",
  "#39CCCC",
  "#F012BE",
  "#01FF70",
  "#85144b",
  "#7FDBFF",
  "#3D9970",
  "#111111",
  "#AAAAAA",
  "#E65100",
  "#1565C0",
  "#4A148C",
  "#004D40",
  "#880E4F",
  "#33691E",
  "#BF360C",
];

// interface DashboardProps {
//   isCollapsed?: boolean;
// }

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { countryList } = useAppSelector((state) => state.countries);
  const { country_id } = useAppSelector((state) => state.form);

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  const navigate = useNavigate();
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

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCrops, setSelectedCrops] = useState<string[]>([
    "Maize",
    "Wheat",
    "Coffee",
  ]);

  const handleCountrySelect = (country: string, countryId: number) => {
    setSelectedCountry(country);
    dispatch(updateField({ field: "country_id", value: countryId }));

    // Log the selected country
    console.log("Selected Country in Countries Component:", country_id);
  };

  const handleCropSelect = (crop: string | null) => {
    if (crop) {
      setSelectedCrops([crop]);
    } else {
      setSelectedCrops([]);
    }
  };

  const countriesWithColors = countryList.map((country, index) => ({
    ...country,
    color: distinctColors[index % distinctColors.length],
  }));

  return (
    <>
      <MarketIndicators />
      <div className="flex flex-col lg:flex-row w-full pt-3 items-start justify-between gap-3 px-4 md:px-0">
        <div className={"flex w-full lg:w-[20%] flex-col gap-4"}>
          <div className="bg-white dark:bg-secondary-black px-2 py-1 rounded">
            <Crops />
          </div>
          <div className={"w-full"}>
            <Countries
              selectedCountry={selectedCountry}
              onCountrySelect={handleCountrySelect}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 h-full">
          <CropsMarket onCropSelect={handleCropSelect} />
          <Chart
            selectedCountries={selectedCountry ? [selectedCountry] : []}
            countriesData={countriesWithColors}
            selectedCrops={selectedCrops}
            marketData={marketData}
          />
        </div>
        <div className="flex flex-col gap-2 lg:gap-3 w-full lg:w-2/5">
          <h1 className="logo text-start lg:text-sm xl:text-base 2xl:text-lg sm:text-2xl">
            Market insights
          </h1>
          <div className="flex flex-col gap-4 lg:gap-2 1xl:gap-4">
            {insightsData.map((insight, idx) => (
              <MarketInsights
                key={idx}
                name={insight.name}
                data={insight.data}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
