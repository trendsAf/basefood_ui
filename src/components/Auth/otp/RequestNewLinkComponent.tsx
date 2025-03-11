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
import { CirclesWithBar, ThreeDots } from "react-loader-spinner";

interface RequestNewLinkComponentProps {
  onNext: () => void;
}

const RequestNewLinkComponent: React.FC<RequestNewLinkComponentProps> = ({
  onNext,
}) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.resetLink);
  const [linkSent, setLinkSent] = useState(false);

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
      console.log(res, "daaaaataaa");
      toast.success(res.message);
      setTimeout(() => {
        setLinkSent(true);
      }, 4000);
    } catch (error: any) {
      toast.error(error?.message || "Failed to send OTP. Please try again.");
    }
  };

  if (linkSent) {
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
                {isLoading ? (
                  <div className="flex items-center gap-2 justify-center">
                    <CirclesWithBar
                      visible={true}
                      height="30"
                      width="30"
                      color="#ffff"
                      ariaLabel="puff-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                    Processing
                    <ThreeDots
                      visible={true}
                      height="30"
                      width="30"
                      color="#ffff"
                      ariaLabel="puff-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                ) : (
                  "Request Link"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestNewLinkComponent;
