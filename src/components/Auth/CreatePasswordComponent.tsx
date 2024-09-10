/* eslint-disable no-console */
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputFieldComponent from "../common/InputFieldComponent";
import PrimaryButton from "../common/PrimaryButton";

interface CreatePasswordComponentProps {
  onNext: () => void;
}

interface CreatePasswordFormInputs {
  password: string;
  confirmPassword: string;
}

const CreatePasswordComponent: React.FC<CreatePasswordComponentProps> = ({
  onNext,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreatePasswordFormInputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<CreatePasswordFormInputs> = (data) => {
    console.log(data);
    onNext();
  };

  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-white rounded-lg"
    >
      <h1 className="text-center text-2xl font-bold mb-4">
        Create your password
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Please set a password for your account
      </p>

      {/* Password Fields */}
      <div className="space-y-5 mb-6">
        <InputFieldComponent
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className="px-4 py-3 rounded-lg border w-full border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue outline-none transition duration-200"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <InputFieldComponent
          type="password"
          placeholder="Confirm your password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
          className="px-4 py-3 rounded-lg border w-full border-gray-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue outline-none transition duration-200"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center mt-8">
        <PrimaryButton
          text="Next"
          onClick={onNext}
          type="button"
          className="text-white bg-brand-blue px-5 py-3 w-full rounded-lg font-bold hover:bg-blue-600 transition-all duration-300"
        />
      </div>
    </form>
  );
};

export default CreatePasswordComponent;
