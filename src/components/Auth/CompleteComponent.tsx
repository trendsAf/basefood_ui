import React from "react";
import { Link } from "react-router-dom";

const CompleteComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-50">
      <div className="bg-white p-8 rounded-lg w-full text-center">
        {/* <h1 className="text-3xl font-bold mb-4 text-green-500">
          Congratulations!
        </h1> */}
        <p className="text-lg mb-4 text-gray-700">
          You've successfully completed the signup.
        </p>
        {/* <div className="text-4xl mb-6">🎉🥳🎊</div> */}
        <p className="text-base text-gray-600">
          Thank you for being a part of our community! Please
          <Link to={"/login"}>
            <b className="text-brand-blue font-bold cursor-pointer ml-1 hover:underline">
              Login
            </b>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default CompleteComponent;
