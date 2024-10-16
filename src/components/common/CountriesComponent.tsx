import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const CountriesComponent: React.FC<{
  onCountrySelect: (country: string) => void;
  countriesData: any[];
}> = ({ onCountrySelect, countriesData }) => {
  const [countries, setCountries] = useState(countriesData);

  const handleCountryChange = (country: string) => {
    const updatedCountries = countries.map((c) => {
      if (c.name === country) {
        c.checked = !c.checked;
        onCountrySelect(c.name);
      }
      return c;
    });

    setCountries(updatedCountries);
  };

  return (
    <div className="p-4 bg-white dark:bg-secondary-black dark:text-white rounded-lg">
      {/* <h2 className="text-md font-bold mb-4">Countries</h2> */}
      <ul className="grid grid-cols-3">
        {countries.slice(0, -1).map(({ name, color, checked }) => (
          <li key={name} className="flex items-center mb-2">
            <Checkbox
              checked={checked}
              onChange={() => handleCountryChange(name)}
              sx={{
                color: color,
                "&.Mui-checked": {
                  color: color,
                },
                "& .MuiSvgIcon-root": { fontSize: 20 },
                padding: "4px",
              }}
            />
            <label>{name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesComponent;
