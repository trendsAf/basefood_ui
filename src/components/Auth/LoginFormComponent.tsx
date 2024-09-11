/* eslint-disable no-console */
import { SubmitHandler, useForm } from "react-hook-form";
import InputFieldComponent from "../common/InputFieldComponent";
import { Link } from "react-router-dom";

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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
      <div className="flex flex-col gap-6">
        <div>
          <InputFieldComponent
            className="px-4 py-3 rounded-lg border w-full border-secondary-black/30 focus:border-brand-blue focus:outline-none transition-all duration-300"
            {...register("email")}
            name="email"
            placeholder="Email Address"
            label="Email"
          />
        </div>
        <div>
          <InputFieldComponent
            className="px-4 py-3 rounded-lg border w-full border-secondary-black/30 focus:border-brand-blue focus:outline-none transition-all duration-300"
            {...register("password")}
            name="password"
            placeholder="Password"
            type="password"
            label="Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <InputFieldComponent
              {...register("rememberMe")}
              name="rememberMe"
              type="checkbox"
              className="rounded cursor-pointer focus:ring-2 focus:ring-brand-blue"
            />
            <span className="text-dark-gray">Remember me</span>
          </div>
          <div className="text-sm text-brand-blue cursor-pointer hover:underline">
            Forgot password?
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-brand-blue px-5 py-3 w-full rounded-lg font-bold hover:bg-blue-600 transition-all duration-300"
          >
            Login
          </button>
        </div>
        <div className="text-sm">
          <h1>
            Don’t have a baseFood account yet?
            <Link to={"/signup"}>
              <b className="text-brand-blue cursor-pointer ml-2 hover:underline">
                Sign Up
              </b>
            </Link>
          </h1>
        </div>
      </div>
    </form>
  );
};

export default LoginFormComponent;
