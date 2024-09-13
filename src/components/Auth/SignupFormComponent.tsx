/* eslint-disable no-console */
import { SubmitHandler, useForm } from "react-hook-form";
import InputFieldComponent from "../common/InputFieldComponent";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";

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
          className=" bg-[#e5e5e5] text-black px-5 py-3 w-full rounded-lg font-bold hover:bg-[#d1d0d0] transition-all duration-300 flex items-center justify-center gap-3"
        >
          <FaLinkedinIn className="text-2xl text-blue-700" />
          Continue with Linkedin
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto border-t border-b border-black/20 py-4"
      >
        <div className="flex flex-col gap-4 ">
          {/* First Name Input */}
          <InputFieldComponent
            className="px-4 py-2 pt-7 rounded-lg outline-none border w-full border-secondary-black/30 focus:border-brand-blue focus:outline-none transition-all duration-300"
            {...register("firstName")}
            label="First Name"
            type="text"
          />

          {/* Email Input */}
          <InputFieldComponent
            className="px-4 py-2 pt-7  rounded-lg border w-full outline-none border-secondary-black/30 focus:border-brand-blue focus:outline-none transition-all duration-300"
            {...register("email")}
            label="Email"
            type="email"
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-brand-blue px-5 py-3 w-full rounded-lg font-bold hover:bg-blue-600 transition-all duration-300"
            >
              Create Account
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-center mt-5">
        <div className="w-2/3">
          <p className="text-center text-sm font-sans font-normal">
            By continuing, you agree to baseFood's
            <span className="logo cursor-pointer"> Terms of Service </span>
            and <span className="logo">Privacy Policy</span>
          </p>
          <div className="text-sm text-center mt-5">
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
