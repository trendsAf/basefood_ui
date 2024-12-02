import React, { useState } from "react";
import { data } from "../../utils/roleButtonUtils";
import PrimaryButton from "../common/PrimaryButton";
import { IoMdCheckmark } from "react-icons/io";

interface RoleComponentProps {
  onNext: () => void;
}

const RoleComponent: React.FC<RoleComponentProps> = ({ onNext }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleClick = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <div className="py-8">
      <h1 className="text-2xl text-center space_grotesk2 md:text-3xl  text-gray-800">
        What is your role?
      </h1>
      <p className="text-center mt-4 text-sm text-gray-600">
        Tell us about your role at your company, and we'll tailor your profile
        to fit your daily responsibilities.
      </p>
      <div className="grid grid-cols-2 gap-x-2">
        {data.map((item, index) => (
          <div key={index} className="relative mt-5">
            <PrimaryButton
              text={item.name}
              onClick={() => handleClick(item.name)}
              className={`rounded-lg !text-[#121212]  text-left bg-white border whitespace-nowrap border-secondary-black/30 w-full py-2 transition-colors duration-300 ${
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
          onClick={onNext}
          type="button"
          className="text-white w-full bg-brand-blue px-5 py-2 rounded-lg font-bold hover:bg-blue-600 transition-all duration-300"
        />
      </div>
      <div className="font-thin mt-6">
        <h1 className="text-base text-center md:text-lg text-gray-600">
          Already have an account?
          <b className="text-brand-blue cursor-pointer ml-2 hover:underline">
            Login
          </b>
        </h1>
      </div>
    </div>
  );
};

export default RoleComponent;
