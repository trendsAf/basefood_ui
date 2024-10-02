import { otpSchema } from "../validations/formValidations";
import * as yup from "yup";

export type BusinessDetailsFormValues = {
  companyName: string;
  country: string;
  companyType: string;
  companySize: string;
  revenue: string;
  yearFounded: string;
  role: string;
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
