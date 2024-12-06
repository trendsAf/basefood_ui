import Checkbox from "@mui/material/Checkbox";
import React, { useEffect, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { toast } from "react-toastify";

interface CropItem {
  name: string;
  average: number;
  change: number;
  min_price: number;
  max_price: number;
}

interface CropsMarketProps {
  onCropSelect: (selectedCrops: string | null) => void;
}

const CropsMarket: React.FC<CropsMarketProps> = ({ onCropSelect }) => {
  const [selectedCrops, setSelectedCrops] = useState<string | null>(null);
  const [cropsData, setCropsData] = useState<CropItem[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const cropsMarketData = localStorage.getItem("crops_market");
      if (cropsMarketData) {
        try {
          const parsedData = JSON.parse(cropsMarketData);
          const mappedData = parsedData.map((item: any) => ({
            name: item.variety_name,
            average: item.average_price,
            change: item.price_change,
            min_price: item.min_price,
            max_price: item.max_price,
          }));
          setCropsData(mappedData);
        } catch (error: any) {
          toast.error(error.message);
          // console.error("Error parsing crops_market_data:", error);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    onCropSelect(selectedCrops);
  }, [selectedCrops]);

  const handleCropChange = (crop: string) => {
    setSelectedCrops((prev) => (prev === crop ? null : crop));
  };

  return (
    <div className="p-1 bg-white dark:text-white rounded-lg dark:bg-[#1E1E1E]">
      <h2 className="text-md py-2 font-bold px-2">Crops Market</h2>
      <table className="w-full text-left px-4">
        <thead className="bg-bg-gray dark:bg-black dark:text-white">
          <tr className="text-gray-500  dark:text-gray-400 text-sm">
            <th className="py-2 pl-2">Item</th>
            <th className="py-2 ">Min price</th>
            <th className="py-2 ">Max price</th>
            <th className="py-2 ">Average price</th>
            <th className="py-2 pl-2">Price change</th>
          </tr>
        </thead>
        <tbody>
          {cropsData.length <= 0 ? (
            <tr>
              <td colSpan={5} className="text-center py- text-gray-500">
                No data
              </td>
            </tr>
          ) : (
            cropsData.map((crop, index) => (
              <tr
                key={crop.name}
                className={`${
                  index !== cropsData.length - 1
                    ? "border-b dark:border-gray-700"
                    : ""
                }`}
              >
                <td className="flex items-center py-2 text-sm">
                  <Checkbox
                    checked={selectedCrops === crop.name}
                    onChange={() => handleCropChange(crop.name)}
                    sx={{
                      color: "#d6d7da",
                      "&.Mui-checked": {
                        color: "#d6d7da",
                      },
                      "& .MuiSvgIcon-root": { fontSize: 20 },
                      padding: "4px",
                    }}
                  />
                  <span className="text-gray-700 dark:text-white">
                    {crop.name}
                  </span>
                </td>
                <td className="py-2 text-gray-700 dark:text-white">
                  ${crop.min_price}
                </td>
                <td className="py-2 text-gray-700 dark:text-white">
                  ${crop.max_price}
                </td>
                <td className="py-2 text-gray-700 dark:text-white">
                  ${crop.average}
                </td>
                <td
                  className={`py-2 font-bold ${
                    crop.change > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {crop.change > 0 ? (
                    <span className="flex items-center text-green ml-2">
                      {crop.change}% <TiArrowSortedUp />
                    </span>
                  ) : (
                    <span className="flex items-center text-red ml-2">
                      {crop.change}% <TiArrowSortedDown />
                    </span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CropsMarket;
