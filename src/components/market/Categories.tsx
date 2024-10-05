import React from "react";
import Checkbox from "@mui/material/Checkbox";

// const categoryColors: Record<string, string> = {
//   "Cereal Grains": "#FF5733",
//   "Oil Seeds": "#33FF57",
//   Pulses: "#5733FF",
//   Coffee: "#FFC300",
//   Tea: "#900C3F",
// };

const categories = ["Cereal Grains", "Oil Seeds", "Pulses", "Coffee", "Tea"];

const Categories: React.FC = () => {
  return (
    <div className="py-4 bg-white dark:text-white dark:bg-secondary-black rounded-lg ">
      <h2 className="text-md px-4 font-bold mb-2">Categories</h2>
      <ul className="px-2">
        {categories.map((category, index) => (
          <li key={index} className="flex items-center ml-1">
            <Checkbox
              sx={{
                // color: categoryColors[category],
                color: "#ababab",
                "&.Mui-checked": {
                  // color: categoryColors[category],
                  color: "#ababab",
                },
                "& .MuiSvgIcon-root": { fontSize: 20 },
                padding: "4px",
              }}
            />
            <label>{category}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
