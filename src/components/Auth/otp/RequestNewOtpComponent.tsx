/* eslint-disable no-console */
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IoMdMail } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequestNewOtpComponentFieldProps } from "../../../@types/fileTypes";
import { emailSchema } from "../../../validations/formValidations";
import OtpComponent from "./OtpComponent";
import { textFieldSx } from "../../../utils/MUI/muiStyles";

interface RequestNewOtpComponentProps {
  onNext: () => void;
  onRequestNew?: () => void;
}

const RequestNewOtpComponent: React.FC<RequestNewOtpComponentProps> = ({
  onNext,
}) => {
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RequestNewOtpComponentFieldProps>({
    resolver: yupResolver(emailSchema),
  });

  const onSubmit: SubmitHandler<RequestNewOtpComponentFieldProps> = (data) => {
    setLoading(true);
    try {
      if (data.email === "aphrodis@gmail.com") {
        toast.success("OTP sent to your email successfully");
        setTimeout(() => {
          setOtpSent(true);
          setLoading(false);
        }, 4000);
      } else {
        toast.error("Your email is not in our database");
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (otpSent) {
    return <OtpComponent onNext={onNext} />;
  }

  return (
    <div className="max-w-md w-full p-10 shadow-xl">
      <ToastContainer />
      <div className="w-full h-full flex flex-col items-center ">
        <IoMdMail className="text-[5rem] text-blue-600" />
        <h1 className="text-lg">Please enter your email for new OTP</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto py-4">
          <div className="flex flex-col gap-4">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Please enter your email"
                  variant="outlined"
                  fullWidth
                  className="bg-white"
                  sx={textFieldSx}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className={`text-white bg-brand-blue px-5 py-3 w-full rounded-[5px] font-bold transition-all duration-300 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Request OTP"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestNewOtpComponent;
