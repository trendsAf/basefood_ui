/* eslint-disable no-console */
import { SubmitHandler, useForm } from "react-hook-form";
import InputFieldComponent from "../common/InputFieldComponent";
import PrimaryButton from "../common/PrimaryButton";

interface SignupFormComponentFieldProps {
  firtName: string;
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div>
        <InputFieldComponent
          className="px-4 py-2 md:py-3 rounded-lg border w-full border-secondary-black/30"
          {...register("firtName")}
          name="text"
          placeholder="First name"
          type="text"
        />
      </div>
      <div className="mt-8">
        <InputFieldComponent
          className="px-4 py-2 md:py-3 rounded-lg border w-full border-secondary-black/30"
          {...register("email")}
          name="email"
          placeholder="Email Address"
          type="email"
        />
      </div>
      <div className="mt-8">
        <InputFieldComponent
          className="px-4 py-2 md:py-3 rounded-lg border w-full border-secondary-black/30"
          {...register("phone")}
          name="phone"
          placeholder="Phone"
        />
      </div>
      <div className="flex items-center justify-between mt-4 md:flex-row flex-col space-y-4 md:space-y-0">
        <div className="flex gap-2 text-dark-gray items-center">
          <InputFieldComponent
            {...register("rememberMe")}
            name="rememberMe"
            type="checkbox"
            className="w-5 h-5 rounded mt-1 cursor-pointer"
          />
          <span className="">
            I accept <b className="text-brand-blue">baseFood</b>{" "}
            <small className="text-brand-blue">terms & conditions</small>
          </span>
        </div>
        <div className="text-sm text-brand-blue">
          <span className="cursor-pointer">Forgot password?</span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12">
        <PrimaryButton
          text="Next"
          onClick={onNext}
          type="button"
          className="text-white bg-brand-blue px-5 py-2 w-4/6 rounded-lg font-bold"
        />
      </div>
      <div className="text-sm md:text-lg font-thin mt-4">
        <h1 className="text-center">
          Already have a baseFood account?
          <b className="text-brand-blue cursor-pointer ml-2">Login</b>{" "}
        </h1>
      </div>
    </form>
  );
};

export default SignupFormComponent;
