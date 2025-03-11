/* eslint-disable no-console */
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoMdMail } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ResetType } from "../../@types/fileTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { passwordResetRequest } from "../../redux/reducers/auth/passwordResetRequestSlice";
import { CirclesWithBar, ThreeDots } from "react-loader-spinner";

const ForgotPassword: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.requestPasswordReset);
  const { control, handleSubmit, reset } = useForm<ResetType>();

  const [emailSent, setEmailSent] = useState(false);

  const onSubmit = async (data: ResetType) => {
    try {
      const result = await dispatch(
        passwordResetRequest({ email: data.email }),
      );

      if (passwordResetRequest.fulfilled.match(result)) {
        if (result.payload?.status === false) {
          toast.error(
            result.payload?.message || "Failed to send password reset email.",
          );
        } else {
          toast.success(result.payload?.message + " please check your email!");
          setEmailSent(true);
          reset();
        }
      } else {
        toast.error("Failed to send password reset email.");
      }
    } catch (error) {
      console.error("Error during password reset request:", error);
      toast.error("An error occurred while sending the password reset email.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="max-w-md w-full p-10 shadow-xl">
        <ToastContainer />

        {emailSent ? (
          <div className="w-full h-full flex flex-col items-center">
            <IoMdMail className="text-[5rem] text-green" />
            <h1 className="text-lg text-center mt-4">
              Check your email box for the password reset link!
            </h1>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center">
            <IoMdMail className="text-[5rem] text-blue-600" />
            <h1 className="text-lg">Please enter your email</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mx-auto py-4"
            >
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
                      type="email"
                      className="bg-white"
                    />
                  )}
                />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-white bg-brand-blue px-5 py-3 w-full rounded-[5px] font-bold transition-all duration-300"
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
                      "Send"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
