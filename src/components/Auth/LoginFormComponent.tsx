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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="mt-8">
        <InputFieldComponent
          className="px-4 py-3 rounded-lg border w-full border-secondary-black/30"
          {...register("email")}
          name="email"
          placeholder="Email Address"
        />
      </div>
      <div>
        <InputFieldComponent
          className="px-4 py-3 rounded-lg border w-full border-secondary-black/30"
          {...register("password")}
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 text-dark-gray items-center">
          <InputFieldComponent
            {...register("rememberMe")}
            name="rememberMe"
            type="checkbox"
            className="w-5 h-5 rounded mt-1 cursor-pointer"
          />
          <span>Remember me</span>
        </div>
        <div className="text-sm text-brand-blue">
          <span className="cursor-pointer">Forgot password?</span>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Link to={"/"} className="flex justify-center mt-16 w-4/6">
          <button
            type="submit"
            className="text-white bg-brand-blue px-5 py-2 w-4/6 rounded-lg font-bold"
          >
            Login
          </button>
        </Link>
      </div>
      <div className="text-sm">
        <h1 className="text-center">
          Don’t have a baseFood account yet?
          <Link to={"/signup"}>
            <b className="text-brand-blue cursor-pointer ml-2">Sign Up</b>
          </Link>
        </h1>
      </div>
    </form>
  );
};

export default LoginFormComponent;
