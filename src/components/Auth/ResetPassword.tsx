/* eslint-disable no-console */
import { TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { IoMdMail } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../redux/hooks";
import { resetPassword } from "../../redux/reducers/auth/resetPasswordSlice";
import { useParams } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const { token } = useParams();

  const onSubmit = async (data: any) => {
    if (token) {
      try {
        const response = await dispatch(
          resetPassword({ token, newPassword: data.password }),
        ).unwrap();
        toast.success("Password reset successful!");
        console.log(response);
      } catch (error: any) {
        toast.error(error.message || "Password reset failed!");
        console.error(error);
      }
    } else {
      toast.error("Token not found.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="max-w-md w-full p-10 shadow-xl">
        <ToastContainer />
        <div className="w-full h-full flex flex-col items-center">
          <IoMdMail className="text-[5rem] text-blue-600" />
          <h1 className="text-lg">Please enter your new password</h1>
          <form
            className="w-full mx-auto py-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4">
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Enter your new password"
                    variant="outlined"
                    fullWidth
                    className="bg-white"
                    type="password"
                    error={!!errors.password}
                    // helperText={errors.password ? errors.password.message : ""}
                  />
                )}
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white bg-brand-blue px-5 py-3 w-full rounded-[5px] font-bold transition-all duration-300"
                >
                  Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
