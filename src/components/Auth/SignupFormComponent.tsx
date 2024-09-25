/* eslint-disable no-console */
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { signupSchema } from "../../validations/formValidations";

interface SignupFormComponentFieldProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupFormComponent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormComponentFieldProps>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignupFormComponentFieldProps> = (data) => {
    setLoading(true);
    console.log(data);

    setTimeout(() => {
      toast.success("Account created, check email for verifications");
      setLoading(false);
      setTimeout(() => {
        navigate("/verify");
      }, 4000);
    }, 1000);
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
      <div className="flex justify-center my-4">
        <button
          type="button"
          className="bg-[#e5e5e5] text-black px-5 py-3 w-full rounded-[5px] font-bold hover:bg-[#d1d0d0] transition-all duration-300 helvetica flex items-center justify-center gap-3"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>
      </div>
      <div className="flex justify-center my-4">
        <button
          type="button"
          className="bg-[#e5e5e5] text-black px-5 py-3 w-full rounded-[5px] font-bold hover:bg-[#d1d0d0] transition-all helvetica duration-300 flex items-center justify-center gap-3"
        >
          <FaLinkedinIn className="text-2xl text-blue-700" />
          Continue with LinkedIn
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto border-t border-b border-black/20 py-4"
      >
        <div className="flex flex-col gap-4">
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="outlined"
                fullWidth
                className="bg-white"
                sx={textFieldSx}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="outlined"
                fullWidth
                className="bg-white"
                sx={textFieldSx}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
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
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                className="bg-white"
                sx={textFieldSx}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                className="bg-white"
                sx={textFieldSx}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            )}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className={`text-white bg-brand-blue px-5 py-3 w-full rounded-[5px] font-bold transition-all duration-300 ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-center mt-5">
        <div className="w-2/3">
          <p className="text-center helvetica text-sm font-sans font-normal">
            By continuing, you agree to baseFood's
            <span className="logo cursor-pointer"> Terms of Service </span>
            and <span className="logo">Privacy Policy</span>
          </p>
          <div className="text-sm helvetica text-center mt-5">
            <h1>
              Already have an account?
              <Link to={"/login"}>
                <span className="text-brand-blue cursor-pointer ml-2 hover:underline">
                  Login
                </span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupFormComponent;
