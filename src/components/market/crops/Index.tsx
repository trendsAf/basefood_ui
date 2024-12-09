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

  const [selectedCategory, setSelectedCategory] = useState<string>(
    localStorage.getItem("selectedCategory") || "",
  );

  const storedCropId = localStorage.getItem("selectedCropId") || "";

  const { cropCategoryList, isLoading: categoryLoading } = useAppSelector(
    (state) => state.getCropCategory,
  );
  const { cropList, isLoading: cropsLoading } = useAppSelector(
    (state) => state.getCrops,
  );
  const { crop_id } = useAppSelector((state) => state.form);

  useEffect(() => {
    dispatch(getCropsCategory());
    dispatch(getCrops());
    if (storedCropId) {
      dispatch(updateField({ field: "crop_id", value: storedCropId }));
    }
  }, [dispatch, storedCropId]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(updateField({ field: "crop_id", value: "" }));
      localStorage.setItem("selectedCategory", selectedCategory);
    }
  }, [selectedCategory, dispatch]);

  const filteredCrops = selectedCategory
    ? cropList.filter(
        (crop) => crop.crop_category?.toString() === selectedCategory,
      )
    : [];

  useEffect(() => {
    if (storedCropId) {
      const storedCrop = cropList.find(
        (crop) => crop.id.toString() === storedCropId,
      );
      if (storedCrop) {
        const isFromSelectedCategory =
          storedCrop.crop_category?.toString() === selectedCategory;
        if (isFromSelectedCategory) {
          dispatch(updateField({ field: "crop_id", value: storedCropId }));
        } else {
          dispatch(updateField({ field: "crop_id", value: "" }));
          localStorage.removeItem("selectedCropId");
        }
      }
    }
  }, [storedCropId, selectedCategory, cropList, dispatch]);

  useEffect(() => {
    if (crop_id) {
      localStorage.setItem("selectedCropId", crop_id);
    }
  }, [crop_id]);

  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    setSelectedCategory(e.target.value);
  };

  const handleCropChange = (e: SelectChangeEvent<string>) => {
    dispatch(updateField({ field: "crop_id", value: e.target.value }));
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
          value={crop_id || ""}
          onChange={handleCropChange}
          displayEmpty
        >
          <MenuItem value="">Select Crop</MenuItem>
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
