/* eslint-disable no-console */
import { IoTimeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const ResetPasswordError = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const message = queryParams.get("message");
  console.log(message, "message");

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50">
      <main className="text-center p-6 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-4 text-red-600">{message}</h1>
        {message === "link has expired" ? (
          <p className="text-gray-500 text-xl">Session Timeout</p>
        ) : (
          ""
        )}

        <div className="flex flex-col items-center">
          <IoTimeOutline className="text-[#ED4337] text-[8rem] my-5" />
          <p className="text-lg text-gray-700">
            Return to
            <Link to="/login" className="text-blue-600 hover:underline mx-1">
              Login
            </Link>
            and restart forgot password process.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ResetPasswordError;
