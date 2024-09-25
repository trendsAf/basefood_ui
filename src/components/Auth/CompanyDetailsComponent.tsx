import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import PrimaryButton from "../common/PrimaryButton";

interface CompanyDetailsComponentProps {
  onNext: (data: {
    companyName: string;
    companyAddress: string;
    companyCategory: string;
  }) => void;
  setValue: (name: string, value: any) => void;
}

interface CompanyDetailsFormInputs {
  companyName: string;
  companyAddress: string;
  companyCategory: string;
}

const CompanyDetailsComponent: React.FC<CompanyDetailsComponentProps> = ({
  onNext,
  setValue,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyDetailsFormInputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<CompanyDetailsFormInputs> = (data) => {
    setValue("companyName", data.companyName);
    setValue("companyAddress", data.companyAddress);
    setValue("companyCategory", data.companyCategory);
    onNext({
      companyName: data.companyName,
      companyAddress: data.companyAddress,
      companyCategory: data.companyCategory,
    });
  };

  const textFieldSx = {
    "& .MuiOutlinedInput-input": {
      padding: "14px 14px",
    },
    "& .MuiInputLabel-root": {
      transform: "translate(14px, 16px) scale(0.89)",
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(14px, -8px) scale(0.75)",
    },
  };

  const categoryOptions = ["Supplier", "Buyer", "Broker", "Researcher"];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white">
      <h1 className="text-2xl space_grotesk2 text-center font-medium mb-4">
        Add your Company Details
      </h1>
      <p className="text-md text-center helvetica text-gray-600 mb-6">
        Link your account to your company, and you'll be able to add your team
        and manage applications.
      </p>
      <div className="flex flex-col gap-4">
        <Controller
          name="companyName"
          control={control}
          defaultValue=""
          rules={{ required: "Company Name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Company Name"
              variant="outlined"
              fullWidth
              error={!!errors.companyName}
              helperText={errors.companyName ? errors.companyName.message : ""}
              sx={textFieldSx}
            />
          )}
        />
        <Controller
          name="companyAddress"
          control={control}
          defaultValue=""
          rules={{ required: "Company Address is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Company Address"
              variant="outlined"
              fullWidth
              error={!!errors.companyAddress}
              helperText={
                errors.companyAddress ? errors.companyAddress.message : ""
              }
              sx={textFieldSx}
            />
          )}
        />
        <Controller
          name="companyCategory"
          control={control}
          defaultValue=""
          rules={{ required: "Company Category is required" }}
          render={({ field }) => (
            <FormControl fullWidth variant="outlined">
              <InputLabel>Select Company Category</InputLabel>
              <Select
                {...field}
                label="Company Category"
                error={!!errors.companyCategory}
              >
                {categoryOptions.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      </div>

      <div className="flex items-center justify-center mt-8 w-full">
        <PrimaryButton
          text="Next"
          onClick={handleSubmit(onSubmit)}
          type="button"
          className="text-white helvetica w-full bg-brand-blue px-5 py-3 rounded-[5px] font-bold hover:bg-blue-600 transition-all duration-300"
        />
      </div>
    </form>
  );
};

export default CompanyDetailsComponent;
