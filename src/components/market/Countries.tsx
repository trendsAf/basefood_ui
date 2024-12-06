import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCountry } from "../../redux/reducers/countries/countrySlice";
import { updateField } from "../../redux/reducers/form/formSlice";

interface CountriesProps {
  selectedCountry: string | null;
  onCountrySelect: (country: string, countryId: number) => void;
}

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

const Countries: React.FC<CountriesProps> = ({ onCountrySelect }) => {
  const dispatch = useAppDispatch();
  const { countryList } = useAppSelector((state) => state.countries);

  const [selectedCountry, setSelectedCountry] = useState<string | null>(
    localStorage.getItem("selectedCountry") || null,
  );
  const [selectedCountryId, setSelectedCountryId] = useState<number | null>(
    parseInt(localStorage.getItem("selectedCountryId") || "") || null,
  );

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  const countriesWithColors = countryList.map((country, index) => ({
    ...country,
    color: distinctColors[index % distinctColors.length],
  }));

  const handleCountryChange = (country: string, countryId: number) => {
    setSelectedCountry(country);
    setSelectedCountryId(countryId);

    localStorage.setItem("selectedCountry", country);
    localStorage.setItem("selectedCountryId", countryId.toString());

    onCountrySelect(country, countryId);
    dispatch(updateField({ field: "country_id", value: countryId }));
  };

  useEffect(() => {
    if (selectedCountryId) {
      console.log("Selected Country ID:", selectedCountryId);
    }
  }, [selectedCountryId]);

  return (
    <div className="p-4 bg-white dark:bg-secondary-black dark:text-white rounded-lg">
      <h2 className="text-md font-bold mb-4">Countries</h2>
      <ul>
        {countriesWithColors.length === 0 ? (
          <li>No countries available</li>
        ) : (
          countriesWithColors.map(({ name, id, color }) => (
            <li key={id} className="flex items-center mb-2">
              <Checkbox
                checked={selectedCountry === name}
                onChange={() => handleCountryChange(name, id)}
                sx={{
                  color: selectedCountry === name ? color : "default",
                  "&.Mui-checked": {
                    color: color,
                  },
                  "& .MuiSvgIcon-root": { fontSize: 20 },
                  padding: "4px",
                }}
              />
              <label>{name}</label>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Countries;
