import Checkbox from "@mui/material/Checkbox";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCountry } from "../../redux/reducers/countries/countrySlice";
import { updateField } from "../../redux/reducers/form/formSlice";
import { pricing } from "../../redux/reducers/pricing/priceSlice";

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
    dispatch(getCountry());
  }, [dispatch]);

  const countriesWithColors = countryList.map((country, index) => ({
    ...country,
    color: distinctColors[index % distinctColors.length],
  }));

  const handleCountryChange = async (country: string, countryId: number) => {
    const { crop_id } = formData;

    if (!crop_id) {
      toast.error("Please select a crop");
      return;
    }

    setSelectedCountry(country);
    setSelectedCountryId(countryId);

    localStorage.setItem("selectedCountry", country);
    localStorage.setItem("selectedCountryId", countryId.toString());

    onCountrySelect(country, countryId);
    dispatch(updateField({ field: "country_id", value: countryId.toString() }));

    const selectedDuration = "Week";
    dispatch(updateField({ field: "duration", value: selectedDuration }));

    setIsSubmitting(true);
    try {
      const updatedFormData = {
        ...formData,
        country_id: countryId.toString(),
        crop_id: formData.crop_id,
        duration: selectedDuration,
        selectedCountries: [country],
      };

      const response = await dispatch(pricing(updatedFormData)).unwrap();
      toast.success(response.message);

      const res = JSON.stringify(response);
      localStorage.setItem("crops_market", res);
      localStorage.setItem("selectedDuration", selectedDuration);
    } catch (err) {
      toast.error("An error occurred while submitting.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [localCountryPrompt, setLocalCountryPrompt] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const cropsMarket = localStorage.getItem("crops_market");
      const myLocalCountry = localStorage.getItem("selectedCountryId");

      if (!cropsMarket) {
        if (formData.crop_id && !myLocalCountry) {
          setLocalCountryPrompt(true);
        } else {
          setLocalCountryPrompt(false);
        }
      } else {
        setLocalCountryPrompt(false);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [formData.crop_id]);

  return (
    <div className=" bg-white dark:bg-secondary-black dark:text-white rounded-lg">
      <h2 className="font-bold text-start ml-4 lg:ml-2 lg:text-start xl:mr-16 pt-2 sm:text-2xl lg:text-base xl:text-lg">
        Countries
      </h2>
      <ul
        className={`mt-2 pb-2 grid sm:grid-cols-4 grid-cols-2 ml-4 sm:ml-0 lg:flex flex-col ${
          localCountryPrompt ? "absolute z-[70]" : ""
        }`}
      >
        {countriesWithColors.length === 0 ? (
          <li className="text-sm text-white/40 text-center">
            No countries available
          </li>
        ) : (
          countriesWithColors.map(({ name, id, color }) => (
            <li key={id} className="flex items-center mb-2 md:px-4 lg:px-1">
              <Checkbox
                checked={selectedCountry === name}
                onChange={() => handleCountryChange(name, id)}
                sx={{
                  color: selectedCountry === name ? color : "default",
                  "&.Mui-checked": {
                    color: color,
                  },
                  "& .MuiSvgIcon-root": { fontSize: [16, 30, 20, 20, 20] },
                  padding: "4px",
                }}
                disabled={isSubmitting}
              />
              <label className="text-[12px] sm:text-xl lg:text-[12px] xl:text-lg">
                {name}
              </label>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Countries;
