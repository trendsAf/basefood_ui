/* eslint-disable no-console */
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../redux/api";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface LoginFormComponentFieldProps {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginFormComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormComponentFieldProps>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<LoginFormComponentFieldProps> = async (
    data,
  ) => {
    setIsLoading(true);
    try {
      const response = await api.post("/users/login", data);
      console.log(response.data);
      toast.success("you're logged in!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error: any) {
      toast.error(
        error.response?.data.message ||
          "Login failed. Please check your credentials.",
      );
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                className="bg-white"
                sx={textFieldSx}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />

          <div className="flex justify-center">
            <button
              className="text-white text-center bg-brand-blue px-5 py-3 w-full rounded-[5px] font-bold hover:bg-blue-600 transition-all duration-300"
              type="submit"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-center items-center w-full">
        <button className="text-center helvetica text-sm my-5 text-brand-blue">
          Forgot password?
        </button>
      </div>
      <div>
        <div className="flex justify-center my-4">
          <button
            type="submit"
            className=" bg-[#e5e5e5] text-black px-5 py-3 w-full rounded-[5px] font-bold hover:bg-[#d1d0d0] transition-all helvetica duration-300 flex items-center justify-center gap-3"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>
        </div>
        <div className="flex justify-center my-4">
          <button
            type="submit"
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
          <Link to={"/signup"}>
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
