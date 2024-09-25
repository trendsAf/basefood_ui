import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { BusinessDetailsFormValues, years } from "../../../@types/fileTypes";
import Logo from "../../../assets/basefood_logo.png";
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
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface BusinessDetailsProps {
  onSubmit: (data: BusinessDetailsFormValues) => void;
  defaultValues?: BusinessDetailsFormValues | null;
}

const BusinessDetails: React.FC<BusinessDetailsProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BusinessDetailsFormValues>({
    resolver: yupResolver(businessDetailsSchema),
    mode: "onSubmit",
    defaultValues: defaultValues || {},
  });

  return (
    <div className="flex h-screen">
      <SignupLeftSection logo={Logo} features={features} />

      <div className="w-full px-[4%] flex items-center justify-center">
        <div className="p-6 bg-white rounded-lg w-full">
          <h1 className="text-2xl font-semibold mb-6">Company Information</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Company Name Input */}
            <div>
              <Controller
                name="companyName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className={`w-full p-3 border ${
                      errors.companyName ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    placeholder="Enter company name"
                  />
                )}
              />
              {errors.companyName && (
                <p className="text-red text-sm mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            {/* Country Select */}
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

            {/* Company Type Select */}
            <div>
              <FormControl fullWidth error={Boolean(errors.companyType)}>
                <InputLabel>Select company type</InputLabel>
                <Controller
                  name="companyType"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Select company type">
                      {companyTypes.map((type, index) => (
                        <MenuItem key={index} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.companyType && (
                <p className="text-red text-sm mt-1">
                  {errors.companyType.message}
                </p>
              )}
            </div>

            {/* Company Size Select */}
            <div>
              <FormControl fullWidth error={Boolean(errors.companySize)}>
                <InputLabel>Select company size</InputLabel>
                <Controller
                  name="companySize"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Select company size">
                      {companySizes.map((size, index) => (
                        <MenuItem key={index} value={size}>
                          {size}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.companySize && (
                <p className="text-red text-sm mt-1">
                  {errors.companySize.message}
                </p>
              )}
            </div>

            {/* Revenue Select */}
            <div>
              <FormControl fullWidth error={Boolean(errors.revenue)}>
                <InputLabel>Select revenue range</InputLabel>
                <Controller
                  name="revenue"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Select revenue range">
                      {revenueRanges.map((range, index) => (
                        <MenuItem key={index} value={range}>
                          {range}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.revenue && (
                <p className="text-red text-sm mt-1">
                  {errors.revenue.message}
                </p>
              )}
            </div>

            {/* Year Founded Select */}
            <div>
              <FormControl fullWidth error={Boolean(errors.yearFounded)}>
                <InputLabel>Select year</InputLabel>
                <Controller
                  name="yearFounded"
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
              {errors.yearFounded && (
                <p className="text-red text-sm mt-1">
                  {errors.yearFounded.message}
                </p>
              )}
            </div>

            {/* Role Select */}
            <div>
              <FormControl fullWidth error={Boolean(errors.role)}>
                <InputLabel>Select role</InputLabel>
                <Controller
                  name="role"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Select role">
                      {roles.map((role, index) => (
                        <MenuItem key={index} value={role}>
                          {role}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.role && (
                <p className="text-red text-sm mt-1">{errors.role.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
