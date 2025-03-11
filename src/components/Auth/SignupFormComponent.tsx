/* eslint-disable no-console */
import { yupResolver } from "@hookform/resolvers/yup";
import { IconButton, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegisterTypes } from "../../@types/fileTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { register } from "../../redux/reducers/auth/registerSlice";

import { signupSchema } from "../../validations/formValidations";
import { useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { CirclesWithBar, ThreeDots } from "react-loader-spinner";

const SignupFormComponent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.register);

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
  } = useForm<RegisterTypes>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<RegisterTypes> = async (
    data: RegisterTypes,
  ) => {
    try {
      const response = await dispatch(register(data)).unwrap();
      toast.success(response?.message);
      console.log(response, "SiiiigupRessssss");
      setTimeout(() => {
        navigate("/verify_email");
      }, 3000);
    } catch (error: any) {
      if (error) {
        toast.error(error?.data?.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center my-2 2xl:my-4">
        <button
          type="button"
          className="bg-[#e5e5e5] text-black px-5 py-2 2xl:py-3 w-full rounded-[5px] font-bold hover:bg-[#d1d0d0] transition-all duration-300 helvetica flex items-center justify-center gap-3"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>
      </div>
      <div className="flex justify-center my-4">
        <button
          type="button"
          className="bg-[#e5e5e5] text-black px-5 py-2 2xl:py-3 w-full rounded-[5px] font-bold hover:bg-[#d1d0d0] transition-all helvetica duration-300 flex items-center justify-center gap-3"
        >
          <FaLinkedinIn className="text-2xl text-blue-700" />
          Continue with LinkedIn
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto border-t border-b border-black/20 py-4"
      >
        <div className="flex flex-col gap-3 2xl:gap-4">
          <Controller
            name="firstname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="outlined"
                fullWidth
                className="bg-white"
                size="small"
                error={!!errors?.firstname}
                helperText={errors?.firstname?.message}
              />
            )}
          />
          <Controller
            name="lastname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="outlined"
                fullWidth
                className="bg-white"
                size="small"
                error={!!errors?.lastname}
                helperText={errors?.lastname?.message}
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
                size="small"
                error={!!errors?.email}
                helperText={errors?.email?.message}
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
                size="small"
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
          <Controller
            name="confirmPassword"
            // name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Confirm Password"
                // type="password"
                type={showPassword ? "text" : "password"}
                // label="Password"
                variant="outlined"
                fullWidth
                className="bg-white"
                size="small"
                error={!!errors?.confirmPassword}
                helperText={errors?.confirmPassword?.message}
                // helperText={errors.password?.message}
                // error={!!errors.password}
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

          {/* <Controller
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
                size="small"
                error={!!errors?.confirmPassword}
                helperText={errors?.confirmPassword?.message}
              />
            )}
          /> */}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`text-white bg-brand-blue px-5 py-2 w-full rounded-[5px] font-bold transition-all duration-300 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
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
                "Create Account"
              )}
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-center mt-3 2xl:mt-5">
        <div className="w-2/3">
          <p className="text-center helvetica text-sm font-sans font-normal">
            By continuing, you agree to baseFood's
            <span className="logo cursor-pointer"> Terms of Service </span>
            and <span className="logo">Privacy Policy</span>
          </p>
          <div className="text-sm helvetica text-center mt-3 2xl:mt-5">
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
