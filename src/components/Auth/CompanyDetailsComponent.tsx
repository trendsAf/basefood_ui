/* eslint-disable no-console */
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputFieldComponent from "../common/InputFieldComponent";
import PrimaryButton from "../common/PrimaryButton";

interface CompanyDetailsComponentProps {
  onNext: () => void;
}

interface CompanyDetailsFormInputs {
  companyName: string;
  companyAddress: string;
  Adhoc: boolean;
  Contract: boolean;
  Retail: boolean;
  Warehouse: boolean;
  Processor: boolean;
  Other: boolean;
  SMME: boolean;
  ListedCompany: boolean;
  MeduimLarge: boolean;
}

const CompanyDetailsComponent: React.FC<CompanyDetailsComponentProps> = ({
  onNext,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyDetailsFormInputs>();

  const onSubmit: SubmitHandler<CompanyDetailsFormInputs> = (data) => {
    console.log(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-xl md:text-2xl font-bold my-2">
        Add your Company Details
      </h1>
      <p className="text-sm md:text-xl text-center mb-8">
        Link your account to your company, and you'll be able to add your team
        and manage applications.
      </p>
      <div className="my-4 space-y-5">
        <InputFieldComponent
          placeholder="Enter your company name"
          {...register("companyName", { required: "Company Name is required" })}
          className="px-4 py-2 md:py-3 rounded-lg border border-secondary-black/30 w-full"
        />
        {errors.companyName && (
          <p className="text-red-500">{errors.companyName.message}</p>
        )}

        <InputFieldComponent
          placeholder="Enter your company address"
          {...register("companyAddress", {
            required: "Company Address is required",
          })}
          className="px-4 py-2 md:py-3 rounded-lg border border-secondary-black/30 w-full"
        />
        {errors.companyAddress && (
          <p className="text-red-500">{errors.companyAddress.message}</p>
        )}
      </div>

      {/* How do you buy */}

      <h1 className="mt-5">How do you buy?</h1>
      <div className="flex gap-2 text-dark-gray items-center text-sm md:text-lg mt-2">
        <div className="flex gap-2 items-center">
          <InputFieldComponent
            {...register("Adhoc")}
            name="adhoc"
            type="checkbox"
            className="w-5 h-5 rounded mt-1 cursor-pointer"
          />
          <span>Adhoc</span>
        </div>
        <div className="flex gap-2 items-center">
          <InputFieldComponent
            {...register("Contract")}
            name="Contract"
            type="checkbox"
            className="w-5 h-5 rounded mt-1 cursor-pointer"
          />
          <span>Contract</span>
        </div>
      </div>

      {/* What category does your company fall under */}

      <h1 className="mt-5">What category does your company fall under?</h1>
      <div className="grid grid-cols-2 gap-2 text-dark-gray text-sm md:text-lg mt-2">
        <div className="flex gap-2 items-center">
          <InputFieldComponent
            {...register("Retail")}
            name="Retail"
            type="checkbox"
            className="w-5 h-5 rounded mt-1 cursor-pointer"
          />
          <span>Retail</span>
        </div>
        <div className="flex gap-2 items-center">
          <InputFieldComponent
            {...register("Warehouse")}
            name="Contract"
            type="checkbox"
            className="w-5 h-5 rounded mt-1 cursor-pointer"
          />
          <span>Warehouse/Packhouse</span>
        </div>
        <div className="flex gap-2 items-center">
          <InputFieldComponent
            {...register("Processor")}
            name="Processor"
            type="checkbox"
            className="w-5 h-5 rounded mt-1 cursor-pointer"
          />
          <span>Processor</span>
        </div>
        <div className="flex gap-2 items-center">
          <InputFieldComponent
            {...register("Other")}
            name="Other"
            type="checkbox"
            className="w-5 h-5 rounded mt-1 cursor-pointer"
          />
          <span>Other</span>
        </div>
      </div>

      {/* Company type */}

      <h1 className="mt-5">Company Type</h1>
      <div className="grid grid-cols-2 gap-2 text-dark-gray text-sm md:text-lg mt-2">
        <div className="flex gap-2 items-center">
          <InputFieldComponent
            {...register("SMME")}
            name="SMME"
            type="checkbox"
            className="w-5 h-5 rounded mt-1 cursor-pointer"
          />
          <span>SMME</span>
        </div>
        <div className="flex gap-2 items-center">
          <InputFieldComponent
            {...register("ListedCompany")}
            name="ListedCompany"
            type="checkbox"
            className="w-5 h-5 rounded mt-1 cursor-pointer"
          />
          <span>Listed/Company</span>
        </div>
        <div className="flex gap-2 items-center">
          <InputFieldComponent
            {...register("MeduimLarge")}
            name="MeduimLarge"
            type="checkbox"
            className="w-5 h-5 rounded mt-1 cursor-pointer"
          />
          <span>Meduim/Large</span>
        </div>
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

export default CompanyDetailsComponent;
