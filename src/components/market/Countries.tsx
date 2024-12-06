import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCountry } from "../../redux/reducers/countries/countrySlice";
import { updateField } from "../../redux/reducers/form/formSlice";
import { pricing } from "../../redux/reducers/pricing/priceSlice";
import { toast } from "react-toastify";

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
  const formData = useAppSelector((state) => state.form);

  const [selectedCountry, setSelectedCountry] = useState<string | null>(
    localStorage.getItem("selectedCountry") || null,
  );
  const [_, setSelectedCountryId] = useState<number | null>(
    parseInt(localStorage.getItem("selectedCountryId") || "") || null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch the list of countries on component mount
    dispatch(getCountry());
  }, [dispatch]);

  const countriesWithColors = countryList.map((country, index) => ({
    ...country,
    color: distinctColors[index % distinctColors.length],
  }));

  const handleCountryChange = async (country: string, countryId: number) => {
    const { crop_id } = formData;

    // Validate crop selection
    if (!crop_id) {
      toast.error("Please select a crop");
      return;
    }

    // Immediately use the passed values
    setSelectedCountry(country);
    setSelectedCountryId(countryId);

    // Store the selected country in localStorage
    localStorage.setItem("selectedCountry", country);
    localStorage.setItem("selectedCountryId", countryId.toString());

    onCountrySelect(country, countryId);
    dispatch(updateField({ field: "country_id", value: countryId.toString() }));

    // Handle the API call with the "Week" duration
    const selectedDuration = "Week";
    dispatch(updateField({ field: "duration", value: selectedDuration }));
    // console.log("Selected duration:", selectedDuration);

    setIsSubmitting(true);
    try {
      // Ensure country_id is passed as a string
      const updatedFormData = {
        ...formData,
        country_id: countryId.toString(),
        crop_id: formData.crop_id,
        duration: selectedDuration,
        selectedCountries: [country],
      };

      const response = await dispatch(pricing(updatedFormData)).unwrap();
      toast.success(response.message);
      // console.log("Submission success:", response);

      const res = JSON.stringify(response);
      localStorage.setItem("crops_market", res);
      localStorage.setItem("selectedDuration", selectedDuration);
    } catch (err) {
      // console.error("Submission failed:", err);
      toast.error("An error occurred while submitting.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                disabled={isSubmitting} // Disable interaction during submission
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
