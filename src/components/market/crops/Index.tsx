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
import { updateField } from "../../../redux/reducers/form/formSlice";

const CropSelector: React.FC = () => {
  const dispatch = useAppDispatch();

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Redux selectors
  const { cropCategoryList, isLoading: categoryLoading } = useAppSelector(
    (state) => state.getCropCategory,
  );
  const { cropList, isLoading: cropsLoading } = useAppSelector(
    (state) => state.getCrops,
  );
  const { crop_id } = useAppSelector((state) => state.form); // Access crop_id from Redux state

  useEffect(() => {
    dispatch(getCropsCategory());
    dispatch(getCrops());
  }, [dispatch]);

  // Reset crop_id when category changes
  useEffect(() => {
    if (selectedCategory) {
      dispatch(updateField({ field: "crop_id", value: "" }));
    }
  }, [selectedCategory, dispatch]);

  // Filter crops based on selected category
  const filteredCrops = selectedCategory
    ? cropList.filter(
        (crop) => crop.crop_category?.toString() === selectedCategory,
      )
    : [];

  // When the crop_id changes, log the selected crop
  useEffect(() => {
    if (crop_id) {
      const selectedCrop = cropList.find(
        (crop) => crop.id.toString() === crop_id,
      );
      console.log("Selected Crop:", selectedCrop);
    }
  }, [crop_id, cropList]);

  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    setSelectedCategory(e.target.value); // Update selectedCategory on change
  };

  const handleCropChange = (e: SelectChangeEvent<string>) => {
    dispatch(updateField({ field: "crop_id", value: e.target.value })); // Dispatch crop_id to Redux state
  };

  return (
    <div className="flex items-center flex-col w-full">
      {/* Category Dropdown */}
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
          value={crop_id} // Bind to Redux state
          onChange={handleCropChange}
        >
          {filteredCrops.map((crop) => (
            <MenuItem value={crop.id} key={crop.id}>
              {crop.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CropSelector;
