/* eslint-disable no-console */
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoMdMail } from "react-icons/io";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../redux/hooks";
import { resetPassword } from "../../redux/reducers/auth/resetPasswordSlice";
import { passwordSchema } from "../../validations/formValidations";

const ResetPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });
  const dispatch = useAppDispatch();
  const { token } = useParams();

  const onSubmit = async (data: any) => {
    if (token) {
      try {
        const response = await dispatch(
          resetPassword({ token, newPassword: data.password }),
        ).unwrap();
        toast.success(response.data.message);
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
              {/* Password Field */}
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Enter your new password"
                    variant="outlined"
                    fullWidth
                    className="bg-white"
                    type={showPassword ? "text" : "password"}
                    error={!!errors.password}
                    helperText={errors.password?.message || ""}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    }}
                  />
                )}
              />

              {/* Confirm Password Field */}
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Confirm your new password"
                    variant="outlined"
                    fullWidth
                    className="bg-white"
                    type={showConfirmPassword ? "text" : "password"}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message || ""}
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          aria-label="toggle confirm password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      ),
                    }}
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
