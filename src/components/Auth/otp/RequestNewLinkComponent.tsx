/* eslint-disable no-console */
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IoMdMail } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequestNewLinkComponentFieldProps } from "../../../@types/fileTypes";
import { emailSchema } from "../../../validations/formValidations";
import LinkComponent from "./LinkComponent";
import { textFieldSx } from "../../../utils/MUI/muiStyles";

interface RequestNewLinkComponentProps {
  onNext: () => void;
  onRequestNew?: () => void;
}

const RequestNewLinkComponent: React.FC<RequestNewLinkComponentProps> = ({
  onNext,
}) => {
  const [loading, setLoading] = useState(false);
  const [otpSent, setLinkSent] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RequestNewLinkComponentFieldProps>({
    resolver: yupResolver(emailSchema),
  });

  const onSubmit: SubmitHandler<RequestNewLinkComponentFieldProps> = (data) => {
    setLoading(true);
    try {
      if (data.email === "aphrodis@gmail.com") {
        toast.success("OTP sent to your email successfully");
        setTimeout(() => {
          setLinkSent(true);
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
    return <LinkComponent onNext={onNext} />;
  }

  return (
    <div className="max-w-md w-full p-10 shadow-xl">
      <ToastContainer />
      <div className="w-full h-full flex flex-col items-center ">
        <IoMdMail className="text-[5rem] text-blue-600" />
        <h1 className="text-lg">Please enter your email for new link</h1>
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
                {loading ? "Requesting..." : "Request link"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestNewLinkComponent;
