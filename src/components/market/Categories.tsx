import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

const categories = ["Grains", "Oil Seeds", "Pulses", "Coffee", "Tea"];

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0],
  );

  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Category</InputLabel>
      <Select<string>
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {categories.map((category, idx) => (
          <MenuItem value={category} key={idx}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Categories;
