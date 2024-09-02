import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const Countries: React.FC<{
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
      <h2 className="text-xl font-bold mb-4">Countries</h2>
      <ul>
        {countries.map(({ name, color, checked }) => (
          <li key={name} className="flex items-center mb-2">
            <Checkbox
              checked={checked}
              onChange={() => handleCountryChange(name)}
              sx={{
                color: color,
                "&.Mui-checked": {
                  color: color,
                },
              }}
            />
            <label>{name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
