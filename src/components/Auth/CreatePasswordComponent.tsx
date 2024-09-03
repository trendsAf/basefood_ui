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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-xl md:text-2xl font-bold my-2">
        Create your password
      </h1>
      <p className="text-sm md:text-xl text-center mb-8">
        Please set a password for your account
      </p>
      <div className="my-4 space-y-6">
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
          className="px-4 py-2 md:py-3 rounded-lg border w-full border-secondary-black/30"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <InputFieldComponent
          type="password"
          placeholder="Confirm your password"
          className="px-4 py-2 md:py-3 rounded-lg border w-full border-secondary-black/30"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>
      <div className="flex items-center justify-center mt-12">
        <PrimaryButton
          text="Next"
          onClick={onNext}
          type="button"
          className="text-white bg-brand-blue px-5 py-2 w-4/6 rounded-lg font-bold"
        />
      </div>
    </form>
  );
};

export default CreatePasswordComponent;
