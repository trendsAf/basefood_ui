import { useState } from "react";
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
      <div className="hidden lg:flex flex-col justify-between w-[40%] h-full bg-brand-blue/80 px-[5%] py-[10%]">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-center text-white">
            Welcome to baseFood!
          </h1>
          <p className="text-center text-lg text-white">
            Sign up to explore the best agricultural products and get insights
            into the market.
          </p>
          <button className="w-full py-3 border text-white mt-8 border-white/40 hover:bg-white hover:text-brand-blue transition-all duration-300">
            Login
          </button>
        </div>
        <div>
          <h1 className="text-white text-center text-2xl md:text-4xl font-black font-sans">
            baseFood
          </h1>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center w-full relative">
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
        <div className="absolute top-10 right-24 md:right-32">
          <p className="text-sm md:text-lg font-bold text-brand-blue">
            {current}
          </p>
          {step < totalSteps && (
            <p className="text-xs md:text-sm text-gray-500">Next: {next}</p>
          )}
        </div>

        <div className="px-2 flex flex-col items-center justify-center space-y-6 w-3/5 py-5 _shadow rounded-lg">
          <div className="w-full max-w-md">
            {step === 1 && (
              <div>
                <h1 className="text-brand-blue text-3xl md:text-4xl font-black text-left">
                  {/* Sign Up */}
                </h1>
                <h1 className="text-2xl text-center mb-10">
                  Sign up for your{" "}
                  <b className="text-brand-blue font-bold">baseFood</b> Account
                </h1>
              </div>
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
