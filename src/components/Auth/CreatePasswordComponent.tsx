import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { CreatePasswordFormInputs } from "../../@types/fileTypes";

interface CreatePasswordComponentProps {
  onNext: (password: string) => void;
}

const CreatePasswordComponent: React.FC<CreatePasswordComponentProps> = ({
  onNext,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreatePasswordFormInputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<CreatePasswordFormInputs> = (data) => {
    onNext(data.password);
  };

  const password = watch("password");

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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-white rounded-[5px]"
    >
      <h1 className="text-2xl space_grotesk2  mb-4 text-center">
        Create your password
      </h1>
      <p className="text-gray-600 helvetica mb-6 text-center">
        Please set a password for your account
      </p>

      {/* Password Fields */}
      <div className="flex flex-col gap-4">
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="Enter your password"
              variant="outlined"
              fullWidth
              className="bg-white"
              sx={textFieldSx}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          rules={{
            required: "Confirm Password is required",
            validate: (value) => value === password || "Passwords do not match",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="Confirm your password"
              variant="outlined"
              fullWidth
              className="bg-white"
              sx={textFieldSx}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          )}
        />
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center mt-8">
        <button
          className="text-white helvetica bg-brand-blue px-5 py-3 w-full text-center rounded-[5px] font-bold hover:bg-blue-600 transition-all duration-300"
          type="submit"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default CreatePasswordComponent;
