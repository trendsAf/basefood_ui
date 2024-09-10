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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full  bg-white">
      <h1 className="text-center text-2xl font-bold mb-4">
        Add your Company Details
      </h1>
      <p className="text-sm text-center text-gray-600 mb-6">
        Link your account to your company, and you'll be able to add your team
        and manage applications.
      </p>

      <div className="space-y-4 mb-6">
        <InputFieldComponent
          placeholder="Enter your company name"
          {...register("companyName", { required: "Company Name is required" })}
          className="px-4 py-3 rounded-lg border border-gray-300 w-full focus:border-brand-blue focus:ring-2 focus:ring-brand-blue outline-none transition duration-200"
        />
        {errors.companyName && (
          <p className="text-red-500 text-sm">{errors.companyName.message}</p>
        )}

        <InputFieldComponent
          placeholder="Enter your company address"
          {...register("companyAddress", {
            required: "Company Address is required",
          })}
          className="px-4 py-3 rounded-lg border border-gray-300 w-full focus:border-brand-blue focus:ring-2 focus:ring-brand-blue outline-none transition duration-200"
        />
        {errors.companyAddress && (
          <p className="text-red-500 text-sm">
            {errors.companyAddress.message}
          </p>
        )}
      </div>

      <h2 className="text-lg font-semibold mt-6 mb-2">How do you buy?</h2>
      <div className="flex gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <InputFieldComponent
            {...register("Adhoc")}
            name="adhoc"
            type="checkbox"
            className="w-4 h-4 rounded focus:ring-2 focus:ring-brand-blue cursor-pointer"
          />
          <span>Adhoc</span>
        </div>
        <div className="flex items-center gap-2">
          <InputFieldComponent
            {...register("Contract")}
            name="Contract"
            type="checkbox"
            className="w-4 h-4 rounded focus:ring-2 focus:ring-brand-blue cursor-pointer"
          />
          <span>Contract</span>
        </div>
      </div>

      <h2 className="text-lg font-semibold mt-6 mb-2">Company Category</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <InputFieldComponent
            {...register("Retail")}
            name="Retail"
            type="checkbox"
            className="w-4 h-4 rounded focus:ring-2 focus:ring-brand-blue cursor-pointer"
          />
          <span>Retail</span>
        </div>
        <div className="flex items-center gap-2">
          <InputFieldComponent
            {...register("Warehouse")}
            name="Warehouse"
            type="checkbox"
            className="w-4 h-4 rounded focus:ring-2 focus:ring-brand-blue cursor-pointer"
          />
          <span>Warehouse/Packhouse</span>
        </div>
        <div className="flex items-center gap-2">
          <InputFieldComponent
            {...register("Processor")}
            name="Processor"
            type="checkbox"
            className="w-4 h-4 rounded focus:ring-2 focus:ring-brand-blue cursor-pointer"
          />
          <span>Processor</span>
        </div>
        <div className="flex items-center gap-2">
          <InputFieldComponent
            {...register("Other")}
            name="Other"
            type="checkbox"
            className="w-4 h-4 rounded focus:ring-2 focus:ring-brand-blue cursor-pointer"
          />
          <span>Other</span>
        </div>
      </div>

      <h2 className="text-lg font-semibold mt-6 mb-2">Company Type</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <InputFieldComponent
            {...register("SMME")}
            name="SMME"
            type="checkbox"
            className="w-4 h-4 rounded focus:ring-2 focus:ring-brand-blue cursor-pointer"
          />
          <span>SMME</span>
        </div>
        <div className="flex items-center gap-2">
          <InputFieldComponent
            {...register("ListedCompany")}
            name="ListedCompany"
            type="checkbox"
            className="w-4 h-4 rounded focus:ring-2 focus:ring-brand-blue cursor-pointer"
          />
          <span>Listed Company</span>
        </div>
        <div className="flex items-center gap-2">
          <InputFieldComponent
            {...register("MeduimLarge")}
            name="MeduimLarge"
            type="checkbox"
            className="w-4 h-4 rounded focus:ring-2 focus:ring-brand-blue cursor-pointer"
          />
          <span>Medium/Large</span>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8 w-full">
        <PrimaryButton
          text="Next"
          onClick={onNext}
          type="button"
          className="text-white w-full bg-brand-blue px-5 py-3 rounded-lg font-bold hover:bg-blue-600 transition-all duration-300"
        />
      </div>
    </form>
  );
};

export default CompanyDetailsComponent;
