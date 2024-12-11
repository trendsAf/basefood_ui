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
import { AiOutlineArrowDown } from "react-icons/ai";

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

  const [localPrompt, setLocalPrompt] = useState<"category" | "crop" | null>(
    null,
  );

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

  useEffect(() => {
    const interval = setInterval(() => {
      const cropsMarket = localStorage.getItem("crops_market");
      const localCategory = localStorage.getItem("selectedCategory");
      const localCrop = localStorage.getItem("selectedCropId");

      if (!cropsMarket) {
        if (!localCategory) {
          setLocalPrompt("category");
        } else if (!localCrop) {
          setLocalPrompt("crop");
        } else {
          setLocalPrompt(null);
        }
      } else {
        setLocalPrompt(null);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const filteredCrops = selectedCategory
    ? cropList.filter(
        (crop) => crop.crop_category?.toString() === selectedCategory,
      )
    : [];

  useEffect(() => {
    if (crop_id) {
      localStorage.setItem("selectedCropId", crop_id);
    }
  }, [crop_id]);

  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    setSelectedCategory(e.target.value);
    setLocalPrompt("crop");
  };

  const handleCropChange = (e: SelectChangeEvent<string>) => {
    dispatch(updateField({ field: "crop_id", value: e.target.value }));
    setLocalPrompt(null);
  };

  return (
    <div className="flex items-center lg:flex-col md:flex-row w-full gap-2 pr-2">
      {/* Category Dropdown */}
      <div className="w-full prompt">
        {localPrompt === "category" && (
          <div className="absolute w-full h-full bg-black/70 inset-0 z-50 flex ">
            <div className="flex gap-2 w-full relative">
              <div className="flex absolute top-32 left-[20vw]">
                <AiOutlineArrowDown className="text-white text-2xl animate-bounce" />
                <span className="text-white text-sm bg-black/80 px-2 py-1 rounded-md ml-4">
                  Select category
                </span>
              </div>
            </div>
          </div>
        )}
        <FormControl
          sx={{ m: 1, minWidth: 120, width: "100%" }}
          size="small"
          disabled={categoryLoading || cropCategoryList.length === 0}
          className={`${localPrompt === "category" ? "absolute z-[70] inner" : ""}`}
        >
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <rect
              rx="8"
              ry="8"
              className={`line ${!localPrompt ? "hidden" : ""}`}
              height="100%"
              width="100%"
              strokeLinejoin="round"
            />
          </svg>
          <Select<string>
            labelId="category-select-label"
            id="category-select"
            label="Category"
            className="!text-sm sm:!text-xl lg:!text-sm xl:!text-lg"
            value={selectedCategory}
            onChange={handleCategoryChange}
            displayEmpty
          >
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
      </div>

      {/* Crops Dropdown */}
      <div className="w-full prompt">
        {localPrompt === "crop" && (
          <div className="absolute w-full h-full bg-black/70 inset-0 z-50 flex ">
            <div className="flex gap-2 w-full relative">
              <div className="flex absolute lg:top-52 lg:left-[20vw] top-36 left-[52vw]">
                <AiOutlineArrowDown className="text-white text-2xl animate-bounce" />
                <span className="text-white text-sm bg-black/80 px-2 py-1 rounded-md ml-4">
                  Select crop
                </span>
              </div>
            </div>
          </div>
        )}
        <FormControl
          sx={{ m: 1, minWidth: 120, width: "100%" }}
          size="small"
          disabled={cropsLoading || !filteredCrops.length || !selectedCategory}
          className={`${localPrompt === "crop" ? "absolute z-[70] inner" : ""}`}
        >
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <rect
              rx="8"
              ry="8"
              className={`line ${!localPrompt ? "hidden" : ""}`}
              height="100%"
              width="100%"
              strokeLinejoin="round"
            />
          </svg>
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
    </div>
  );
};

export default CropSelector;
