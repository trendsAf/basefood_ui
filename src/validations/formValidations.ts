import * as yup from "yup";

export const signupSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .matches(/^\d+$/, "OTP must be a number")
    .length(6, "OTP must be 6 digits long")
    .required("OTP is required"),
});

export const businessDetailsSchema = yup
  .object({
    companyName: yup.string().required("Company name is required"),
    country: yup.string().required("Please select a country"),
    companyType: yup.string().required("Please select a company type"),
    companySize: yup.string().required("Please select a company size"),
    revenue: yup.string().required("Please select a revenue range"),
    yearFounded: yup.string().required("Please select a year"),
    role: yup.string().required("Please select your role"),
  })
  .required();
