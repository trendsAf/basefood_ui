import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { TextField } from "@mui/material";

interface SignupFormComponentFieldProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  rememberMe: boolean;
}

interface SignupFormComponentProps {
  onNext: () => void;
  setValue: (name: string, value: any) => void;
}

const SignupFormComponent: React.FC<SignupFormComponentProps> = ({
  onNext,
  setValue,
}) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SignupFormComponentFieldProps>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<SignupFormComponentFieldProps> = (data) => {
    setValue("firstName", data.firstName);
    setValue("lastName", data.lastName);
    setValue("email", data.email);
    reset(data);
    onNext();
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
          Continue with Linkedin
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
            rules={{ required: "First Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="outlined"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ""}
                sx={textFieldSx}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: "Last Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="outlined"
                fullWidth
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ""}
                sx={textFieldSx}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                sx={textFieldSx}
              />
            )}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-brand-blue px-5 py-3 w-full rounded-[5px] font-bold hover:bg-blue-600 transition-all helvetica duration-300"
            >
              Create Account
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
