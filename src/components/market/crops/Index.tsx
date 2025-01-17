import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getCropsCategory } from "../../../redux/reducers/crops/cropCategorySlice";
import { getCrops } from "../../../redux/reducers/crops/cropSlice";
import { updateField } from "../../../redux/reducers/form/formSlice";

const CropSelector: React.FC = () => {
  const dispatch = useAppDispatch();

  // States
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { cropCategoryList, isLoading: categoryLoading } = useAppSelector(
    (state) => state.getCropCategory,
  );
  const { cropList, isLoading: cropsLoading } = useAppSelector(
    (state) => state.getCrops,
  );
  const { crop_id } = useAppSelector((state) => state.form);

  // Fetch category and crop lists
  useEffect(() => {
    dispatch(getCropsCategory());
    dispatch(getCrops());
  }, [dispatch]);

  // Sync with localStorage on mount
  useEffect(() => {
    const storedCategory = localStorage.getItem("selectedCategory");
    const storedCropId = localStorage.getItem("selectedCropId");

    // Check if stored category exists and is valid
    if (
      storedCategory &&
      cropCategoryList.some((cat) => cat.id.toString() === storedCategory)
    ) {
      setSelectedCategory(storedCategory);
    }

    // Check if stored crop ID exists and is valid
    if (
      storedCropId &&
      cropList.some((crop) => crop.id.toString() === storedCropId)
    ) {
      dispatch(updateField({ field: "crop_id", value: storedCropId }));
    }
  }, [cropCategoryList, cropList, dispatch]);

  // Update localStorage when category changes
  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem("selectedCategory", selectedCategory);
    }
  }, [selectedCategory]);

  // Update localStorage when crop ID changes
  useEffect(() => {
    if (crop_id) {
      localStorage.setItem("selectedCropId", crop_id);
    }
  }, [crop_id]);

  // Filter crops based on selected category
  const filteredCrops = selectedCategory
    ? cropList.filter(
        (crop) => crop.crop_category?.toString() === selectedCategory,
      )
    : [];

  // Handlers
  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    dispatch(updateField({ field: "crop_id", value: "" })); // Reset crop when category changes
  };

  const handleCropChange = (e: SelectChangeEvent<string>) => {
    const selectedCropId = e.target.value;
    dispatch(updateField({ field: "crop_id", value: selectedCropId }));
  };

  return (
    <div className="flex flex-col pr-4 py-2 xl:py-1 items-center lg:flex-col md:flex-row md:gap-4 lg:gap-0 w-full">
      {/* Category Dropdown */}
      <div className="w-full prompt">
        <FormControl
          sx={{ m: 1, minWidth: 120, width: "100%" }}
          size="small"
          disabled={categoryLoading || cropCategoryList.length === 0}
        >
          <Select<string>
            value={selectedCategory}
            onChange={handleCategoryChange}
            displayEmpty
          >
            <MenuItem value="">Select Category</MenuItem>
            {cropCategoryList.map((category) => (
              <MenuItem key={category.id} value={category.id.toString()}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Crops Dropdown */}
      <div className="w-full prompt">
        <FormControl
          sx={{ m: 1, minWidth: 120, width: "100%" }}
          size="small"
          disabled={cropsLoading || !filteredCrops.length || !selectedCategory}
        >
          <Select<string>
            value={
              crop_id &&
              filteredCrops.some((crop) => crop.id.toString() === crop_id)
                ? crop_id
                : ""
            }
            onChange={handleCropChange}
            displayEmpty
          >
            <MenuItem value="">Select Crop</MenuItem>
            {filteredCrops.map((crop) => (
              <MenuItem key={crop.id} value={crop.id.toString()}>
                {crop.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default CropSelector;
