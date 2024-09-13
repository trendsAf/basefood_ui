/* eslint-disable no-console */
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TextField } from "@mui/material";

interface LoginFormComponentFieldProps {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginFormComponent = () => {
  const { handleSubmit, control } = useForm<LoginFormComponentFieldProps>();
  const onSubmit: SubmitHandler<LoginFormComponentFieldProps> = (data) => {
    console.log(data);
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
              />
            )}
          />

          <div className="flex justify-center">
            <Link
              to="/"
              className="text-white text-center bg-brand-blue px-5 py-3 w-full rounded-[5px] font-bold hover:bg-blue-600 transition-all duration-300"
            >
              <button type="submit">Login</button>
            </Link>
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
