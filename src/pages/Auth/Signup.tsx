import { useState } from "react";
import { TbPlant, TbChartBar, TbCloudComputing, TbUsers } from "react-icons/tb";
import CompanyDetailsComponent from "../../components/Auth/CompanyDetailsComponent";
import CreatePasswordComponent from "../../components/Auth/CreatePasswordComponent";
import SignupFormComponent from "../../components/Auth/SignupFormComponent";
import Logo from "../../assets/basefood_lowercase.png";
import { IoIosArrowRoundBack, IoMdCheckmark } from "react-icons/io";
import { data } from "../../utils/roleButtonUtils";
import PrimaryButton from "../../components/common/PrimaryButton";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };
  const handleClick = (role: string) => {
    setSelectedRole(role);
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
        <div className=" flex flex-col items-center justify-center space-y-6 w-[80%] py-5 rounded-lg">
          <div className="w-full max-w-md">
            {step === 1 && (
              <div>
                <h1 className="text-2xl space_grotesk2 font-medium text-center mb-10">
                  Sign up for a <b className="font-bold">basefood</b> Account
                </h1>
              </div>
            )}
            {step === 1 && <SignupFormComponent onNext={handleNextStep} />}
            {step === 2 && <CompanyDetailsComponent onNext={handleNextStep} />}
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
                        onClick={() => handleClick(item.name)}
                        className={`rounded-[5px] helvetica !text-[#121212]  text-left bg-white border whitespace-nowrap border-secondary-black/30 w-full py-2 transition-colors duration-300 ${
                          selectedRole === item.name
                            ? "!border-green-500 !text-brand-blue !border-brand-blue"
                            : "hover:border-brand-blue hover:!text-brand-blue"
                        }`}
                      />
                      {selectedRole === item.name && (
                        <IoMdCheckmark
                          className="absolute text-brand-blue top-1/2 right-4 text-green-500 text-lg"
                          style={{ transform: "translateY(-50%)" }}
                        />
                      )}
                    </div>
                  ))}
                </div>
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
            {step === 4 && <CreatePasswordComponent onNext={handleNextStep} />}
            {/* {step === 5 && <CompleteComponent />} */}
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
