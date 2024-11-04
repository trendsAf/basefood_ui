/* eslint-disable no-console */
import { yupResolver } from "@hookform/resolvers/yup";
import { IconButton, TextField } from "@mui/material";
import Cookies from "js-cookie";
import { Controller, useForm } from "react-hook-form";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginTypes } from "../../@types/fileTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/reducers/auth/loginSlice";
import { loginSchema } from "../../validations/formValidations";
import GoogleButton from "../common/buttons/GoogleButton";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginFormComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginTypes>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, error } = useAppSelector((state) => state.login);

  const onSubmit = async (data: LoginTypes) => {
    try {
      const res = await dispatch(login(data)).unwrap();
      console.log(res, "Reeeeeesssssponse");
      if (res && res?.auth_token) {
        Cookies.set("access_token", res?.auth_token);
        toast.success("You're logged in");
        setTimeout(() => {
          navigate("/");
        }, 3500);
      } else if (res && res?.access_token) {
        Cookies.set("access_token", res?.access_token);
        toast.success("Please complete profile");
        setTimeout(() => {
          navigate("/business_information");
        }, 3500);
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      if (error) {
        toast.error(error?.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  const textFieldSx = {
    "& .MuiOutlinedInput-input": {
      padding: "14px 14px",
    },
    "& .MuiInputLabel-root": {
      transform: "translate(14px, 16px) scale(0.89)",
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(14px, -8px) scale(0.75)",
    },
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="flex flex-col gap-6">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                fullWidth
                className="bg-white"
                sx={textFieldSx}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                fullWidth
                className="bg-white"
                sx={textFieldSx}
                error={!!errors.password}
                helperText={errors.password?.message}
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

          <div className="flex justify-center">
            <button
              className="text-white text-center bg-brand-blue px-5 py-3 w-full rounded-[5px] font-bold hover:bg-blue-600 transition-all duration-300"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </div>
      </form>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <div className="flex justify-center items-center w-full">
        <Link to={"/forgot_password"} className="w-full">
          <button className="text-center helvetica text-sm my-5 text-brand-blue">
            Forgot password?
          </button>
        </Link>
      </div>
      <div>
        <div className="flex justify-center my-4">
          <GoogleButton />
        </div>
        <div className="flex justify-center my-4">
          <button
            type="button"
            className=" bg-[#e5e5e5]  text-black px-5 py-3 w-full rounded-[5px] font-bold hover:bg-[#d1d0d0] transition-all helvetica duration-300 flex items-center justify-center gap-3"
          >
            <FaLinkedinIn className="text-2xl text-blue-700" />
            Continue with Linkedin
          </button>
        </div>
      </div>
      <div className="text-sm">
        <h1 className="text-center helvetica">
          New to baseFood?
          <Link to={"/register"}>
            <b className="text-brand-blue cursor-pointer ml-2 hover:underline">
              Sign Up
            </b>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default LoginFormComponent;
