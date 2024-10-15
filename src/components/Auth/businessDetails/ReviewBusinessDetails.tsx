import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Logo from "../../../assets/basefood_logo.png";
import { features } from "../../../utils/signUpData";
import SignupLeftSection from "../../common/SignupLeftSection";
import { BusinessDetailsFormValues } from "../../../@types/fileTypes";

interface ReviewBusinessDetailsProps {
  data: BusinessDetailsFormValues;
  onComplete: () => void;
  onEdit: () => void;
}

const ReviewBusinessDetails: React.FC<ReviewBusinessDetailsProps> = ({
  data,
  onComplete,
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
      navigate("/login");
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
                label="Company Name"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={data.country}
                variant="outlined"
                fullWidth
                label="Country"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={data.company_type}
                variant="outlined"
                fullWidth
                label="Company Type"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={data.company_size}
                variant="outlined"
                fullWidth
                label="Company Size"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={data.revenue}
                variant="outlined"
                fullWidth
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
                label="Year Founded"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={data.company_role}
                variant="outlined"
                fullWidth
                label="Role"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>
          </div>

          <div className="mt-4">
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
