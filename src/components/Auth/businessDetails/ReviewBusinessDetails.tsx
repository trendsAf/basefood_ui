/* eslint-disable no-console */
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BusinessDetailsFormValues } from "../../../@types/fileTypes";
import Logo from "../../../assets/basefood_logo.png";
import { features } from "../../../utils/signUpData";
import SignupLeftSection from "../../common/SignupLeftSection";

interface ReviewBusinessDetailsProps {
  data: BusinessDetailsFormValues;
  onEdit: (section: string) => void;
  onComplete: () => void;
}

const ReviewBusinessDetails: React.FC<ReviewBusinessDetailsProps> = ({
  data,
  onEdit,
  onComplete,
}) => {
  const [loading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(data);
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof BusinessDetailsFormValues,
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saved data: ", formData);
    toast.success("Data saved successfully!");
    onEdit("businessDetails");
  };

  const handleComplete = () => {
    console.log("Submitted data: ", formData);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Thank you for completing the profile!");
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
                value={formData.companyName}
                onChange={(e) => handleInputChange(e, "companyName")}
                variant="outlined"
                fullWidth
                placeholder="Company Name"
                InputProps={{
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                  readOnly: true,
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={formData.country}
                onChange={(e) => handleInputChange(e, "country")}
                variant="outlined"
                fullWidth
                placeholder="Country"
                InputProps={{
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                  readOnly: true,
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={formData.companyType}
                onChange={(e) => handleInputChange(e, "companyType")}
                variant="outlined"
                fullWidth
                placeholder="Company Type"
                InputProps={{
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                  readOnly: true,
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={formData.companySize}
                onChange={(e) => handleInputChange(e, "companySize")}
                variant="outlined"
                fullWidth
                placeholder="Company Size"
                InputProps={{
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                  readOnly: true,
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={formData.revenue}
                onChange={(e) => handleInputChange(e, "revenue")}
                variant="outlined"
                fullWidth
                placeholder="Revenue Range"
                InputProps={{
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                  readOnly: true,
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={formData.yearFounded}
                onChange={(e) => handleInputChange(e, "yearFounded")}
                variant="outlined"
                fullWidth
                placeholder="Year Founded"
                InputProps={{
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                  readOnly: true,
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={formData.role}
                onChange={(e) => handleInputChange(e, "role")}
                variant="outlined"
                fullWidth
                placeholder="Role"
                InputProps={{
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                  readOnly: true,
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4">
            <div className="mt-4">
              <button
                onClick={handleSave}
                className="w-full p-3 bg-green/90 text-white rounded-md hover:bg-green transition-colors"
              >
                Update
              </button>
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
      </div>
      <ToastContainer />
    </div>
  );
};

export default ReviewBusinessDetails;
