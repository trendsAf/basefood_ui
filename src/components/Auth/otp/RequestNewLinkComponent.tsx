/* eslint-disable no-console */
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IoMdMail } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequestNewLinkComponentFieldProps } from "../../../@types/fileTypes";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { reset } from "../../../redux/reducers/auth/resetSlice";
import { textFieldSx } from "../../../utils/MUI/muiStyles";
import { emailSchema } from "../../../validations/formValidations";
import LinkComponent from "./LinkComponent";

interface RequestNewLinkComponentProps {
  onNext: () => void;
}

const RequestNewLinkComponent: React.FC<RequestNewLinkComponentProps> = ({
  onNext,
}) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.verifyAccount);
  const [otpSent, setLinkSent] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RequestNewLinkComponentFieldProps>({
    resolver: yupResolver(emailSchema),
  });

  const onSubmit: SubmitHandler<RequestNewLinkComponentFieldProps> = async (
    data,
  ) => {
    try {
      setLinkSent(false);
      const res = await dispatch(reset({ email: data.email })).unwrap();
      console.log(data, "daaaaataaa");
      toast.success(res.message);
      setLinkSent(true);
    } catch (error: any) {
      toast.error(error?.message || "Failed to send OTP. Please try again.");
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
        <h1 className="text-lg">Please enter your email for a new link</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto py-4">
          <div className="flex flex-col gap-4">
            <Controller
              name="email"
              control={control}
              defaultValue=""
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
                className={`text-white bg-brand-blue px-5 py-3 w-full rounded-[5px] font-bold transition-all duration-300 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
                disabled={isLoading}
              >
                {isLoading ? "Requesting..." : "Request link"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestNewLinkComponent;
