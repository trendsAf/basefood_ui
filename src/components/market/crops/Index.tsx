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
    <div className="flex items-center lg:flex-col md:flex-row w-full">
      {/* Category Dropdown */}
      <FormControl
        sx={{ m: 1, minWidth: 120, width: "100%" }}
        size="small"
        disabled={categoryLoading || cropCategoryList.length === 0}
      >
        <Select<string>
          labelId="category-select-label"
          id="category-select"
          label="Category"
          className="!text-sm sm:!text-xl lg:!text-sm xl:!text-lg"
          value={selectedCategory}
          onChange={handleCategoryChange}
          displayEmpty
        >
          {/* Default "Select Category" Option */}
          <MenuItem
            value=""
            className="!text-sm sm:!text-xl lg:!text-sm xl:!text-lg"
          >
            Select Category
          </MenuItem>
          {cropCategoryList.map((category) => (
            <MenuItem
              value={category.id.toString()}
              key={category.id}
              className="!text-sm sm:!text-xl lg:!text-sm xl:!text-lg"
            >
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
        <Select<string>
          labelId="crop-select-label"
          id="crop-select"
          label="Crops"
          className="!text-sm sm:!text-xl lg:!text-sm xl:!text-lg"
          value={crop_id || ""}
          onChange={handleCropChange}
          displayEmpty
        >
          <MenuItem
            value=""
            className="!text-sm sm:!text-xl lg:!text-sm xl:!text-lg"
          >
            Select Crop
          </MenuItem>
          {filteredCrops.map((crop) => (
            <MenuItem
              value={crop.id}
              key={crop.id}
              className="!text-sm sm:!text-xl lg:!text-sm xl:!text-lg"
            >
              {crop.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CropSelector;
