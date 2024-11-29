import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getCropsCategory } from "../../../redux/reducers/crops/cropCategorySlice";
import { getCrops } from "../../../redux/reducers/crops/cropSlice";

const CropSelector: React.FC = () => {
  const dispatch = useAppDispatch();

  // State for category and crop selection
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCrop, setSelectedCrop] = useState<string>("");

  // Redux selectors
  const { cropCategoryList, isLoading: categoryLoading } = useAppSelector(
    (state) => state.getCropCategory,
  );
  const { cropList, isLoading: cropsLoading } = useAppSelector(
    (state) => state.getCrops,
  );

  // Fetch categories and crops on component mount
  useEffect(() => {
    dispatch(getCropsCategory());
    dispatch(getCrops());
  }, [dispatch]);

  // Filter crops based on selected category
  const filteredCrops = selectedCategory
    ? cropList.filter(
        (crop) => crop.crop_category?.toString() === selectedCategory,
      )
    : [];

  // Automatically set the first crop only when the category changes
  useEffect(() => {
    if (filteredCrops.length > 0) {
      setSelectedCrop(""); // Reset crop selection to allow user choice
    }
  }, [selectedCategory]); // Depend only on category

  // Handlers for dropdown changes
  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    setSelectedCategory(e.target.value);
  };

  const handleCropChange = (e: SelectChangeEvent<string>) => {
    setSelectedCrop(e.target.value);
  };

  return (
    <div className="flex items-center flex-col w-full">
      {/* Categories Dropdown */}
      <FormControl
        sx={{ m: 1, minWidth: 120, width: "100%" }}
        size="small"
        disabled={categoryLoading || cropCategoryList.length === 0}
      >
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select<string>
          labelId="category-select-label"
          id="category-select"
          label="Category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {cropCategoryList.map((category) => (
            <MenuItem value={category.id.toString()} key={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Crops Dropdown */}
      <FormControl
        sx={{ m: 1, minWidth: 120, width: "100%" }}
        size="small"
        disabled={cropsLoading || !filteredCrops.length || !selectedCategory}
      >
        <InputLabel id="crop-select-label">Crops</InputLabel>
        <Select<string>
          labelId="crop-select-label"
          id="crop-select"
          label="Crops"
          value={selectedCrop}
          onChange={handleCropChange}
        >
          {filteredCrops.map((crop) => (
            <MenuItem value={crop.id.toString()} key={crop.id}>
              {crop.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CropSelector;
