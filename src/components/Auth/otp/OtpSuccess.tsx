import { IoMdCloudDone } from "react-icons/io";
import { Link } from "react-router-dom";

const OtpSuccess = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 justify-center h-screen pb-40">
        <IoMdCloudDone className="text-green text-[20rem]" />
        <h2 className="text-2xl logo mb-5">
          Your email was verified successfully
        </h2>
        <Link to={"/business"}>
          <button
            className="text-white bg-brand-blue px-5 py-2 cursor-pointer"
            type="submit"
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OtpSuccess;
