import { otpSchema } from "../validations/formValidations";
import * as yup from "yup";

export type BusinessDetailsFormValues = {
  revenue: string;
  company_name: string;
  company_type: string;
  company_size: string;
  start_year: string;
  annual_revenue: string;
  company_role: string;
  phone: string;
  province: string;
  country: string;
};

export type OtpComponentFieldProps = yup.InferType<typeof otpSchema>;

export type RequestNewOtpComponentFieldProps = {
  email: string;
};

export type CreatePasswordFormInputs = {
  password: string;
  confirmPassword: string;
};

export const currentYear = new Date().getFullYear();
export const years = Array.from(
  new Array(currentYear - 1900 + 1),
  (_, index) => `${1900 + index}`,
);

export type DynamicType = {
  [key: string]: any;
};

export type RegisterTypes = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type LoginTypes = {
  email: string;
  password: string;
};

export type ReducerTypes = {
  isLoading: boolean;
  data?: DynamicType;
  error: string | null;
  isVerified?: boolean;
  message?: string | null;
};
