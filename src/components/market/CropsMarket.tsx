import React, { useState, useEffect } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Checkbox from "@mui/material/Checkbox";

interface CropItem {
  name: string;
  price: number;
  change: number;
}

const cropColors: Record<string, string> = {
  Maize: "#FF5733",
  Wheat: "#33FF57",
  Coffee: "#5733FF",
};

const cropsData: CropItem[] = [
  { name: "Maize", price: 20, change: -20 },
  { name: "Wheat", price: 30, change: +20 },
  { name: "Coffee", price: 50, change: +20 },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface CropsMarketProps {
  onCropSelect: (selectedCrops: string[]) => void;
}

const CropsMarket: React.FC<CropsMarketProps> = ({ onCropSelect }) => {
  const [selectedCrops, setSelectedCrops] = useState<string[]>(["Maize"]); // Default selected crop

  useEffect(() => {
    onCropSelect(selectedCrops); // Notify parent of initial selection
  }, []); // Run only on mount

  const handleCropChange = (crop: string) => {
    setSelectedCrops((prev) =>
      prev.includes(crop) ? prev.filter((c) => c !== crop) : [...prev, crop],
    );
    onCropSelect(
      selectedCrops.includes(crop)
        ? selectedCrops.filter((c) => c !== crop)
        : [...selectedCrops, crop],
    );
  };

  return (
    <div className="p-4 bg-white dark:text-white rounded-lg dark:bg-secondary-black">
      <h2 className="text-xl font-bold mb-4">Crops Market</h2>
      <table className="w-full text-left px-2">
        <thead className="bg-bg-gray dark:bg-black dark:text-white">
          <tr className="text-gray-500 px-2 dark:text-gray-400">
            <th className="py-2 pl-2">Item</th>
            <th className="py-2">Price</th>
            <th className="py-2">Change</th>
          </tr>
        </thead>
        <tbody>
          {cropsData.map((crop) => (
            <tr key={crop.name} className="border-b dark:border-gray-700">
              <td className="flex items-center py-2">
                <Checkbox
                  {...label}
                  checked={selectedCrops.includes(crop.name)}
                  onChange={() => handleCropChange(crop.name)}
                  sx={{
                    color: cropColors[crop.name],
                    "&.Mui-checked": {
                      color: cropColors[crop.name],
                    },
                  }}
                />
                <span className="text-gray-700 dark:text-white">
                  {crop.name}
                </span>
              </td>
              <td className="py-2 text-gray-700 dark:text-white">
                ${crop.price}
              </td>
              <td
                className={`py-2 font-bold ${
                  crop.change > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {crop.change > 0 ? (
                  <span className="flex items-center text-green justify-start">
                    {crop.change}% <TiArrowSortedUp />
                  </span>
                ) : (
                  <span className="flex items-center text-red justify-start">
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
