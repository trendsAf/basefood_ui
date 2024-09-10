/* eslint-disable no-console */
import { SubmitHandler, useForm } from "react-hook-form";
import InputFieldComponent from "../common/InputFieldComponent";
import { Link } from "react-router-dom";

interface SignupFormComponentFieldProps {
  firstName: string;
  email: string;
  phone: string;
  rememberMe: boolean;
}
interface SignupFormComponentProps {
  onNext: () => void;
}

const SignupFormComponent: React.FC<SignupFormComponentProps> = ({
  onNext,
}) => {
  const { handleSubmit, register } = useForm<SignupFormComponentFieldProps>();

  const onSubmit: SubmitHandler<SignupFormComponentFieldProps> = (data) => {
    console.log(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-6">
        {/* First Name Input */}
        <InputFieldComponent
          className="px-4 py-3 rounded-lg border w-full border-secondary-black/30 focus:border-brand-blue focus:outline-none transition-all duration-300"
          {...register("firstName")}
          name="firstName"
          placeholder="First Name"
          label="First Name"
          type="text"
        />

        {/* Email Input */}
        <InputFieldComponent
          className="px-4 py-3 rounded-lg border w-full border-secondary-black/30 focus:border-brand-blue focus:outline-none transition-all duration-300"
          {...register("email")}
          name="email"
          placeholder="Email Address"
          label="Email"
          type="email"
        />

        {/* Phone Input */}
        <InputFieldComponent
          className="px-4 py-3 rounded-lg border w-full border-secondary-black/30 focus:border-brand-blue focus:outline-none transition-all duration-300"
          {...register("phone")}
          name="phone"
          placeholder="Phone"
          label="Phone"
          type="tel"
        />

        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <InputFieldComponent
              {...register("rememberMe")}
              name="rememberMe"
              type="checkbox"
              className="rounded cursor-pointer focus:ring-2 focus:ring-brand-blue"
            />
            <span className="text-dark-gray">
              I accept <b className="text-brand-blue">baseFood</b>{" "}
              <small className="text-brand-blue cursor-pointer hover:underline">
                terms & conditions
              </small>
            </span>
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
            Next
          </button>
        </div>

        <div className="text-sm text-center">
          <h1>
            Already have a baseFood account?
            <Link to={"/login"}>
              <b className="text-brand-blue cursor-pointer ml-2 hover:underline">
                Login
              </b>
            </Link>
          </h1>
        </div>
      </div>
    </form>
  );
};

export default SignupFormComponent;
