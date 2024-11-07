/* eslint-disable no-console */
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { BusinessDetailsFormValues, years } from "../../../@types/fileTypes";
import Logo from "../../../assets/basefood_logo.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { businessInfo } from "../../../redux/reducers/auth/businessInfoSlice";
import {
  companySizes,
  companyTypes,
  countries,
  revenueRanges,
  roles,
} from "../../../utils/countriesData";
import { features } from "../../../utils/signUpData";
import { businessDetailsSchema } from "../../../validations/formValidations";
import SignupLeftSection from "../../common/SignupLeftSection";
import Cookies from "js-cookie";
import { decodeToken } from "../../../utils/config/decode";

interface BusinessDetailsProps {
  onSubmit: (data: BusinessDetailsFormValues) => void;
  defaultValues?: BusinessDetailsFormValues;
}

const BusinessDetails: React.FC<BusinessDetailsProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.businessInfo);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BusinessDetailsFormValues>({
    resolver: yupResolver(businessDetailsSchema),
    mode: "onSubmit",
    defaultValues: defaultValues ?? {},
  });

  const onSubmitForm = async (data: BusinessDetailsFormValues) => {
    try {
      const result = await dispatch(businessInfo(data)).unwrap();
      toast.success(result?.message);
      Cookies.set("access_token", result.auth_token);
      const decodedToken = decodeToken(result.auth_token);
      Cookies.set("userInfo", JSON.stringify(decodedToken));
      onSubmit(data);
    } catch (error: any) {
      toast.error(error?.message);
      console.error("Error submitting business details:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <SignupLeftSection logo={Logo} features={features} />

      <div className="w-full px-[4%] flex items-center justify-center">
        <div className="p-6 bg-white rounded-lg w-full">
          <h1 className="text-2xl font-semibold mb-6">Company Information</h1>
          <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
            {/* <p>Form Errors: {JSON.stringify(errors)}</p> */}
            <div>
              <Controller
                name="company_name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className={`w-full p-3 border ${
                      errors.company_name ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    placeholder="Enter company name"
                  />
                )}
              />
              {errors.company_name && (
                <p className="text-red text-sm mt-1">
                  {errors.company_name.message}
                </p>
              )}
            </div>

            <div>
              <FormControl fullWidth error={Boolean(errors.country)}>
                <InputLabel>Select country</InputLabel>
                <Controller
                  name="country"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Select country">
                      {countries.map((country) => (
                        <MenuItem key={country.code} value={country.code}>
                          {country.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.country && (
                <p className="text-red text-sm mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="province"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className={`w-full p-3 border ${
                      errors.province ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    placeholder="Enter province"
                  />
                )}
              />
              {errors.province && (
                <p className="text-red text-sm mt-1">
                  {errors.province.message}
                </p>
              )}
            </div>

            <div>
              <FormControl fullWidth error={Boolean(errors.company_type)}>
                <InputLabel>Select company type</InputLabel>
                <Controller
                  name="company_type"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Select company type">
                      {companyTypes.map((type, index) => (
                        <MenuItem key={index} value={type.value}>
                          {type.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.company_type && (
                <p className="text-red text-sm mt-1">
                  {errors.company_type.message}
                </p>
              )}
            </div>

            <div>
              <FormControl fullWidth error={Boolean(errors.company_size)}>
                <InputLabel>Select company size</InputLabel>
                <Controller
                  name="company_size"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Select company size">
                      {companySizes.map((size, index) => (
                        <MenuItem key={index} value={size.value}>
                          {size.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.company_size && (
                <p className="text-red text-sm mt-1">
                  {errors.company_size.message}
                </p>
              )}
            </div>

            <div>
              <FormControl fullWidth error={Boolean(errors.start_year)}>
                <InputLabel>Select year founded</InputLabel>
                <Controller
                  name="start_year"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Select year">
                      {years
                        .slice()
                        .reverse()
                        .map((year, index) => (
                          <MenuItem key={index} value={year}>
                            {year}
                          </MenuItem>
                        ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.start_year && (
                <p className="text-red text-sm mt-1">
                  {errors.start_year.message}
                </p>
              )}
            </div>

            <div>
              <FormControl fullWidth error={Boolean(errors.annual_revenue)}>
                <InputLabel>Select annual revenue</InputLabel>
                <Controller
                  name="annual_revenue"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Select annual revenue">
                      {revenueRanges.map((range, index) => (
                        <MenuItem key={index} value={range.value}>
                          {range.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.annual_revenue && (
                <p className="text-red text-sm mt-1">
                  {errors.annual_revenue.message}
                </p>
              )}
            </div>

            <div>
              <FormControl fullWidth error={Boolean(errors.company_role)}>
                <InputLabel>Select role</InputLabel>
                <Controller
                  name="company_role"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Select role">
                      {roles.map((role, index) => (
                        <MenuItem key={index} value={role.value}>
                          {role.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.company_role && (
                <p className="text-red text-sm mt-1">
                  {errors.company_role.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className={`w-full p-3 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    placeholder="Enter phone number"
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Next"}
              </button>
              {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BusinessDetails;
