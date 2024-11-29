import Checkbox from "@mui/material/Checkbox";
import React, { useEffect, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface CropItem {
  name: string;
  average: number;
  change: number;
  min_price: number;
  max_price: number;
}

// const cropColors: Record<string, string> = {
//   Maize: "#FF5733",
//   Wheat: "#33FF57",
//   Coffee: "#5733FF",
// };

const cropsData: CropItem[] = [
  { name: "Maize", average: 26, min_price: 16, max_price: 20, change: -4 },
  {
    name: "Wheat",
    average: 39,
    change: +9,
    min_price: 18,
    max_price: 30,
  },
  {
    name: "Coffee",
    average: 68.5,
    change: +18.5,
    min_price: 37,
    max_price: 50,
  },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface CropsMarketProps {
  onCropSelect: (selectedCrops: string | null) => void;
}

const CropsMarket: React.FC<CropsMarketProps> = ({ onCropSelect }) => {
  const [selectedCrops, setSelectedCrops] = useState<string | null>("Maize");

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
          {cropsData.map((crop, index) => (
            <tr
              key={crop.name}
              className={`${index !== cropsData.length - 1 ? "border-b dark:border-gray-700" : ""}  `}
            >
              <td className="flex items-center py-2 text-sm">
                <Checkbox
                  {...label}
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CropsMarket;
