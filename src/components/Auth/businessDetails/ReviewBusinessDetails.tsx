// ReviewBusinessDetails.tsx
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BusinessDetailsFormValues } from "../../../@types/fileTypes";
import Logo from "../../../assets/basefood_logo.png";
import {
  companyTypes,
  companySizes,
  revenueRanges,
  roles,
  countries,
} from "../../../utils/countriesData";
import { features } from "../../../utils/signUpData";
import SignupLeftSection from "../../common/SignupLeftSection";

// Helper function to map the value to its corresponding name
const getCompanyTypeName = (value: string) => {
  const type = companyTypes.find((item) => item.value === value);
  return type ? type.name : value;
};

const getCompanySizeName = (value: string) => {
  const size = companySizes.find((item) => item.value === value);
  return size ? size.name : value;
};

const getRevenueRangeName = (value: string) => {
  const range = revenueRanges.find((item) => item.value === value);
  return range ? range.name : value;
};

const getRoleName = (value: string) => {
  const role = roles.find((item) => item.value === value);
  return role ? role.name : value;
};
const getCountryName = (value: string) => {
  const country = countries.find((item) => item.code === value);
  return country ? country.name : value;
};

interface ReviewBusinessDetailsProps {
  data: BusinessDetailsFormValues;
  onComplete: () => void;
  onEdit: () => void;
}

const ReviewBusinessDetails: React.FC<ReviewBusinessDetailsProps> = ({
  data,
  onComplete,
  onEdit,
}) => {
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleComplete = () => {
    setIsLoading(true);
    toast.success("Thank you for completing the profile!");

    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 1000);

    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  return (
    <div className="h-screen flex">
      <SignupLeftSection logo={Logo} features={features} />
      <div className="w-full px-[4%] mx-auto flex items-center justify-center">
        <div className="w-full p-6 bg-white rounded-lg">
          <h1 className="text-2xl font-semibold mb-6">
            Review Your Company Information
          </h1>

          <div className="space-y-4">
            <div className="flex items-center">
              <TextField
                value={data.company_name}
                variant="outlined"
                fullWidth
                size="small"
                label="Company Name"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={getCountryName(data.country)}
                variant="outlined"
                fullWidth
                size="small"
                label="Country"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>
            <div className="flex items-center">
              <TextField
                value={data.province}
                variant="outlined"
                fullWidth
                size="small"
                label="Province"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={getCompanyTypeName(data.company_type)}
                variant="outlined"
                fullWidth
                size="small"
                label="Company Type"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={getCompanySizeName(data.company_size)}
                variant="outlined"
                fullWidth
                size="small"
                label="Company Size"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={getRevenueRangeName(data.annual_revenue)}
                variant="outlined"
                fullWidth
                size="small"
                label="Revenue Range"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={data.start_year}
                variant="outlined"
                fullWidth
                size="small"
                label="Year Founded"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={getRoleName(data.company_role)}
                variant="outlined"
                fullWidth
                size="small"
                label="Role"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>
            <div className="flex items-center">
              <TextField
                value={data.phone}
                variant="outlined"
                fullWidth
                size="small"
                label="Phone number"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-between gap-4">
            <button
              onClick={onEdit}
              className="w-full p-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={handleComplete}
              disabled={loading}
              className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              {loading ? "Completing..." : "Complete Registration"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ReviewBusinessDetails;
