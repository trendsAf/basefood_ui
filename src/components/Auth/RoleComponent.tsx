import React, { useState } from "react";
import { data } from "../../utils/roleButtonUtils";
import PrimaryButton from "../common/PrimaryButton";
import { FaCheck } from "react-icons/fa"; // Import a tick icon

interface RoleComponentProps {
  onNext: () => void;
}

const RoleComponent: React.FC<RoleComponentProps> = ({ onNext }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleClick = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800">
        What is your role?
      </h1>
      <p className="text-center mt-4 text-base md:text-lg text-gray-600">
        Tell us about your role at your company, and we'll tailor your profile
        to fit your daily responsibilities.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-8">
        {data.map((item, index) => (
          <div key={index} className="relative mt-5">
            <PrimaryButton
              text={item.name}
              onClick={() => handleClick(item.name)}
              className={`rounded-full text-secondary-black bg-white border border-secondary-black/30 w-full py-3 transition-colors duration-200 ${
                selectedRole === item.name
                  ? "!border-green-500 !text-green-500"
                  : "hover:border-brand-blue hover:text-brand-blue"
              }`}
            />
            {selectedRole === item.name && (
              <FaCheck
                className="absolute top-1/2 right-4 text-green-500 text-lg"
                style={{ transform: "translateY(-50%)" }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-center mt-12">
        <PrimaryButton
          text="Next"
          onClick={onNext}
          type="button"
          className="text-white w-full bg-brand-blue px-5 py-2 rounded-lg font-bold hover:bg-blue-600 transition-all duration-300"
        />
      </div>
      <div className="text-lg font-thin mt-6">
        <h1 className="text-center">
          Already have a baseFood account?
          <b className="text-brand-blue cursor-pointer ml-2 hover:underline">
            Login
          </b>
        </h1>
      </div>
    </div>
  );
};

export default RoleComponent;
