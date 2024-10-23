import { useLocation } from "react-router-dom";

const ResetPasswordError = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const message = queryParams.get("message");

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex flex-col items-center justify-center text-3xl">
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default ResetPasswordError;
