import { useState } from "react";
import { login_image } from "../../assets/images";
import SignupFormComponent from "../../components/Auth/SignupFormComponent";
import RoleComponent from "../../components/Auth/RoleComponent";
import CompanyDetailsComponent from "../../components/Auth/CompanyDetailsComponent";
import CreatePasswordComponent from "../../components/Auth/CreatePasswordComponent";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CompleteComponent from "../../components/Auth/CompleteComponent";

const Signup = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const progressPercentage = (step / totalSteps) * 100;

  const getStepLabel = (step: number) => {
    switch (step) {
      case 1:
        return { current: "Personal Details", next: "Role" };
      case 2:
        return { current: "Role", next: "Company Details" };
      case 3:
        return { current: "Company Details", next: "Create Password" };
      case 4:
        return { current: "Create Password", next: "Complete" };
      default:
        return { current: "", next: "" };
    }
  };

  const { current, next } = getStepLabel(step);

  return (
    <div className="bg-white flex h-screen">
      <div className="hidden lg:flex w-2/5 h-full">
        <img
          src={login_image}
          alt="login_image"
          className="max-h-full w-full object-cover"
        />
      </div>
      <div className="px-10 py-10 ben lg:w-3/5 w-full relative">
        <h1 className="text-brand-blue text-2xl md:text-4xl font-bold dark:text-white">
          baseFood
        </h1>
        <div className="absolute top-10 right-10 w-10 h-10 md:w-16 md:h-16">
          <CircularProgressbar
            value={progressPercentage}
            text={`${step}/${totalSteps}`}
            styles={buildStyles({
              textColor: "#1D4ED8",
              pathColor: "#1D4ED8",
              trailColor: "#d6d6d6",
            })}
          />
        </div>
        <div className="text-right absolute right-24 md:right-32 top-10 md:top-14">
          <p className=" text-sm md:text-lg font-bold text-brand-blue">
            {current}
          </p>
          {step < totalSteps && (
            <p className="text-xs md:text-sm text-gray-500">Next: {next}</p>
          )}
        </div>
        <div className="flex flex-col items-center justify-center mt-10 lg:mt-32 w-full">
          <div className="lg:w-1/2 flex flex-col space-y-4">
            {step === 1 && (
              <>
                <h1 className="text-xl md:text-2xl font-bold">
                  Sign Up for a{" "}
                  <b className="text-brand-blue font-bold">baseFood</b> Account
                </h1>
                <p className="text-sm md:text-lg">
                  Ready to get started? Just share the details and we'll take it
                  from there.
                </p>
              </>
            )}

            {step === 1 && <SignupFormComponent onNext={handleNextStep} />}
            {step === 2 && <RoleComponent onNext={handleNextStep} />}
            {step === 3 && <CompanyDetailsComponent onNext={handleNextStep} />}
            {step === 4 && <CreatePasswordComponent onNext={handleNextStep} />}
            {step === 5 && <CompleteComponent />}

            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="text-brand-blue px-4 py-2 mt-4"
              >
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
