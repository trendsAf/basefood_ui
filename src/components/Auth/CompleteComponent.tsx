import React from "react";
import { Link } from "react-router-dom";

const CompleteComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] w-full p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-600">
          Congratulations!
        </h1>
        <p className="text-lg mb-4">
          You've successfully completed the signup.
        </p>
        <div className="text-4xl mb-6">🎉🥳🎊</div>
        <p className="text-sm text-gray-600">
          Thank you for being a part of our community! please
          <Link to={"/login"}>
            <b className="text-brand-blue font-bold cursor-pointer ml-2">
              Login
            </b>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CompleteComponent;
