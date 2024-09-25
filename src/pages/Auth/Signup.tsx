import { useState } from "react";
import { TbPlant, TbChartBar, TbCloudComputing, TbUsers } from "react-icons/tb";
// import CompanyDetailsComponent from "../../components/Auth/CompanyDetailsComponent";
import CreatePasswordComponent from "../../components/Auth/CreatePasswordComponent";
// import SignupFormComponent from "../../components/Auth/SignupFormComponent";
import Logo from "../../assets/basefood_lowercase.png";
import { IoIosArrowRoundBack, IoMdCheckmark } from "react-icons/io";
import { data } from "../../utils/roleButtonUtils";
import PrimaryButton from "../../components/common/PrimaryButton";
import { Controller, useForm } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [step, setStep] = useState(1);

  const {
    setValue,
    watch,
    setError,
    control,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const categoryOptions = ["Supplier", "Buyer", "Broker", "Researcher"];

  const selectedPosition = watch("position");
  // const password = watch("password");
  // const confirmPassword = watch("confirmPassword");

  // const handleNextStep = () => {
  //   if (step === 3 && !selectedPosition) {
  //     setError("position", {
  //       type: "manual",
  //       message: "Please select a position",
  //     });
  //   } else {
  //     clearErrors("position");
  //     setStep((prevStep) => prevStep + 1);
  //   }
  // };

  const handleNextStep = () => {
    if (step === 1) {
      handleSubmit((formData) => {
        setValue("firstName", formData.firstName);
        setValue("lastName", formData.lastName);
        setValue("email", formData.email);
        setStep((prevStep) => prevStep + 1);
      })();
    } else if (step === 2) {
      handleSubmit((formData) => {
        setValue("companyName", formData.companyName);
        setValue("companyAddress", formData.companyAddress);
        setValue("companyCategory", formData.companyCategory);
        setStep((prevStep) => prevStep + 1);
      })();
    } else if (step === 3 && !selectedPosition) {
      setError("position", {
        type: "manual",
        message: "Please select a position",
      });
    } else {
      clearErrors("position");
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const onSubmit = (data: any) => {
    console.log("Final form data:", data);
  };

  const features = [
    "Aggregate and analyze agricultural data from multiple sources",
    "Visualize crop yields and market trends in real-time",
    "Leverage AI for predictive farming insights",
    "Connect with a network of farmers and agri-experts",
  ];

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
    <div className="bg-white flex h-screen">
      <div className="hidden lg:flex flex-col w-[50%] h-full relative">
        <div className="absolute w-full h-full bg-black/70 inset-0 z-10"></div>
        <div className="w-full h-full">
          <img
            src="https://res.cloudinary.com/dq6npfdgz/image/upload/v1725875253/data_image7_tqfxiu.jpg"
            alt="Agricultural landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-8 left-8 z-30">
          <img
            className="text-white w-[8rem] font-bold"
            src={Logo}
            alt="baseFood"
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-12">
          <h1 className="text-4xl font-[800] mb-8">
            Cultivate smarter decisions
          </h1>
          <div className="grid grid-cols-1 gap-6 w-full max-w-md">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                {idx === 0 && <TbPlant className="text-2xl flex-shrink-0" />}
                {idx === 1 && <TbChartBar className="text-2xl flex-shrink-0" />}
                {idx === 2 && (
                  <TbCloudComputing className="text-2xl flex-shrink-0" />
                )}
                {idx === 3 && <TbUsers className="text-2xl flex-shrink-0" />}
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center w-full relative">
        <div className=" flex flex-col items-center justify-center space-y-6 w-[80%] py-5 rounded-lg">
          <div className="w-full max-w-md">
            {step === 1 && (
              <div>
                <h1 className="text-2xl space_grotesk2 font-medium text-center mb-10">
                  Sign up for a <b className="font-bold">basefood</b> Account
                </h1>
              </div>
            )}
            {step === 1 && (
              // <SignupFormComponent
              //   onNext={handleNextStep}
              //   setValue={setValue}
              // />
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
                          helperText={
                            errors.firstName
                              ? String(errors.firstName.message)
                              : ""
                          }
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
                          helperText={
                            errors.lastName
                              ? String(errors.lastName.message)
                              : ""
                          }
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
                          helperText={
                            errors.email ? String(errors.email.message) : ""
                          }
                          sx={textFieldSx}
                        />
                      )}
                    />
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => handleNextStep()}
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
                      <span className="logo cursor-pointer">
                        {" "}
                        Terms of Service{" "}
                      </span>
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
            )}
            {step === 2 && (
              // <CompanyDetailsComponent
              //   onNext={handleNextStep}
              //   setValue={setValue}
              // />
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full bg-white"
              >
                <h1 className="text-2xl space_grotesk2 text-center font-medium mb-4">
                  Add your Company Details
                </h1>
                <p className="text-md text-center helvetica text-gray-600 mb-6">
                  Link your account to your company, and you'll be able to add
                  your team and manage applications.
                </p>
                <div className="flex flex-col gap-4">
                  <Controller
                    name="companyName"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Company Name is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Company Name"
                        variant="outlined"
                        fullWidth
                        error={!!errors.companyName}
                        helperText={
                          errors.companyName
                            ? String(errors.companyName.message)
                            : ""
                        }
                        sx={textFieldSx}
                      />
                    )}
                  />
                  <Controller
                    name="companyAddress"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Company Address is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Company Address"
                        variant="outlined"
                        fullWidth
                        error={!!errors.companyAddress}
                        helperText={
                          errors.companyAddress
                            ? String(errors.companyAddress.message)
                            : ""
                        }
                        sx={textFieldSx}
                      />
                    )}
                  />
                  <Controller
                    name="companyCategory"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Company Category is required" }}
                    render={({ field }) => (
                      <FormControl fullWidth variant="outlined">
                        <InputLabel>Select Company Category</InputLabel>
                        <Select
                          {...field}
                          label="Company Category"
                          error={!!errors.companyCategory}
                        >
                          {categoryOptions.map((category) => (
                            <MenuItem key={category} value={category}>
                              {category}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  />
                </div>

                <div className="flex items-center justify-center mt-8 w-full">
                  <PrimaryButton
                    text="Next"
                    onClick={handleNextStep}
                    type="button"
                    className="text-white helvetica w-full bg-brand-blue px-5 py-3 rounded-[5px] font-bold hover:bg-blue-600 transition-all duration-300"
                  />
                </div>
              </form>
            )}
            {step === 3 && (
              <div className="">
                <h1 className="text-2xl space_grotesk2 text-center font-medium">
                  What is your role?
                </h1>
                <p className="text-center helvetica mt-4 text-md text-gray-600">
                  Tell us about your role at your company, and we'll tailor your
                  profile to fit your daily responsibilities.
                </p>
                <div className="grid grid-cols-2 gap-x-2">
                  {data.map((item, index) => (
                    <div key={index} className="relative mt-5">
                      <PrimaryButton
                        text={item.name}
                        onClick={() => setValue("position", item.name)}
                        className={`rounded-[5px] helvetica !text-[#121212]  text-left bg-white border whitespace-nowrap border-secondary-black/30 w-full py-2 transition-colors duration-300 ${
                          selectedPosition === item.name
                            ? "!border-green-500 !text-brand-blue !border-brand-blue"
                            : "hover:border-brand-blue hover:!text-brand-blue"
                        }`}
                      />
                      {selectedPosition === item.name && (
                        <IoMdCheckmark
                          className="absolute text-brand-blue top-1/2 right-4 text-green-500 text-lg"
                          style={{ transform: "translateY(-50%)" }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                {errors.role && typeof errors.role.message === "string" && (
                  <p className="text-red text-sm mt-2">{errors.role.message}</p>
                )}
                <div className="flex w-full items-center justify-center mt-8">
                  <PrimaryButton
                    text="Next"
                    onClick={handleNextStep}
                    type="button"
                    className="text-white helvetica w-full bg-brand-blue px-5 py-2 rounded-[5px] font-bold hover:bg-blue-600 transition-all duration-300"
                  />
                </div>
              </div>
            )}
            {step === 4 && (
              <CreatePasswordComponent
                onNext={handleSubmit(onSubmit)}
                setValue={setValue}
              />
            )}
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="text-brand-blue helvetica flex gap-1 items-center px-4 mt-4 py-2 rounded-lg"
              >
                <IoIosArrowRoundBack className="text-xl " />
                Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
