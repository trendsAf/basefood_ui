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
    <div>
      <h1 className="text-center text-2xl font-bold">What is your role?</h1>
      <p className="text-center mt-4">
        Tell us about your role at your company, and we'll tailor your profile
        to fit your daily responsibilities.
      </p>
      <div className="grid grid-cols-3 gap-5 my-4 mt-10 ">
        {data.map((item, index) => (
          <div key={index} className="relative mt-5">
            <PrimaryButton
              text={item.name}
              onClick={() => handleClick(item.name)}
              className={`rounded-l-full rounded-r-full !text-secondary-black bg-white border border-secondary-black/30 w-full ${
                selectedRole === item.name ? "!border-green !text-green" : ""
              }`}
            />
            {selectedRole === item.name && (
              <FaCheck
                className="absolute top-2 right-2 text-green text-4xl"
                style={{ transform: "translate(50%, -50%)" }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-12">
        <PrimaryButton
          text="Next"
          onClick={onNext}
          type="button"
          className="text-white bg-brand-blue px-5 py-2 w-4/6 rounded-lg font-bold"
        />
      </div>
      <div className="text-lg font-thin mt-4">
        <h1 className="text-center">
          Already have a baseFood account?
          <b className="text-brand-blue cursor-pointer ml-2">Login</b>{" "}
        </h1>
      </div>
    </div>
  );
};

export default RoleComponent;
