import { useState } from "react";
import { TbPlant, TbChartBar, TbCloudComputing, TbUsers } from "react-icons/tb";
import CompanyDetailsComponent from "../../components/Auth/CompanyDetailsComponent";
import CompleteComponent from "../../components/Auth/CompleteComponent";
import CreatePasswordComponent from "../../components/Auth/CreatePasswordComponent";
import RoleComponent from "../../components/Auth/RoleComponent";
import SignupFormComponent from "../../components/Auth/SignupFormComponent";
import Logo from "../../assets/basefood_lowercase.png";

const Signup = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const features = [
    "Aggregate and analyze agricultural data from multiple sources",
    "Visualize crop yields and market trends in real-time",
    "Leverage AI for predictive farming insights",
    "Connect with a network of farmers and agri-experts",
  ];

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
        <div className="px-2 flex flex-col items-center justify-center space-y-6 w-[80%] py-5 rounded-lg">
          <div className="w-full max-w-md">
            {step === 1 && (
              <div>
                <h1 className="text-brand-blue text-3xl md:text-4xl font-black text-left"></h1>
                <h1 className="text-2xl mb-10">
                  Sign up for a <b className="font-bold">basefood</b> Account
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
                className="text-brand-blue px-4 py-2 mt-4 rounded-lg"
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
