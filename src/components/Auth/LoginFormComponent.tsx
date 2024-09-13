/* eslint-disable no-console */
import { SubmitHandler, useForm } from "react-hook-form";
import InputFieldComponent from "../common/InputFieldComponent";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface LoginFormComponentFieldProps {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginFormComponent = () => {
  const { handleSubmit, register } = useForm<LoginFormComponentFieldProps>();
  const onSubmit: SubmitHandler<LoginFormComponentFieldProps> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="flex flex-col gap-6">
          <div>
            <InputFieldComponent
              className="px-4 py-2 pt-8 rounded-lg border w-full border-secondary-black/30 focus:border-brand-blue focus:outline-none transition-all outline-none duration-300"
              {...register("email")}
              label="Email"
            />
          </div>
          <div>
            <InputFieldComponent
              className="px-4 py-2 pt-8 rounded-lg border w-full border-secondary-black/30 focus:border-brand-blue focus:outline-none outline-none transition-all duration-300"
              {...register("password")}
              name="password"
              label="Password"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-brand-blue px-5 py-3 w-full rounded-lg font-bold hover:bg-blue-600 transition-all duration-300"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-center items-center w-full">
        <button className="text-center text-sm my-5 text-brand-blue">
          Forgot password?
        </button>
      </div>
      <div>
        <div className="flex justify-center my-4">
          <button
            type="submit"
            className=" bg-[#e5e5e5] text-black px-5 py-3 w-full rounded-lg font-bold hover:bg-[#d1d0d0] transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>
        </div>
        <div className="flex justify-center my-4">
          <button
            type="submit"
            className=" bg-[#e5e5e5]  text-black px-5 py-3 w-full rounded-lg font-bold hover:bg-[#d1d0d0] transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FaLinkedinIn className="text-2xl text-blue-700" />
            Continue with Linkedin
          </button>
        </div>
      </div>
      <div className="text-sm">
        <h1 className="text-center">
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
