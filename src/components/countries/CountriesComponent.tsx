import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

interface Country {
  name: string;
  checked: boolean;
}

interface CountriesComponentProps {
  countries: Country[];
  onCountrySelect: (country: string) => void;
}

const CountriesComponent: React.FC<CountriesComponentProps> = ({
  countries,
  onCountrySelect,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    countries.find((country) => country.checked)?.name || countries[0]?.name,
  );

  const handleChangeCountry = (e: SelectChangeEvent<string>) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);
    onCountrySelect(countryName);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="country-select-label">Country</InputLabel>
      <Select
        labelId="country-select-label"
        id="country-select"
        label="Country"
        onChange={handleChangeCountry}
        value={selectedCountry}
      >
        {countries.map(({ name }, idx) => (
          <MenuItem value={name} key={idx}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountriesComponent;
