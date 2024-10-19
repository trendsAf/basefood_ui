import { useEffect } from "react";
import { IoMdCloudDone } from "react-icons/io";
import { MdError } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { verifyAccount } from "../../../redux/reducers/auth/verifySlice";
import VerifySkeleton from "../../common/skeleton/VerifySkeleton";

const Verify = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.verifyAccount);
  const [searchParams] = useSearchParams();

  const status = searchParams.get("status");
  const message = searchParams.get("message");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        if (status && message) {
          const response = await dispatch(
            verifyAccount({ status, message }),
          ).unwrap();
          toast.success("Verified successfully");
          console.log(response, "Reeeeeeeessss");
        }
      } catch (error) {
        toast.error("Error verifying");
      }
    };
    verifyUser();
  }, [dispatch, status, message]);

  console.log(message, "looogogogogogndkjfdnf");

  return (
    <div>
      {isLoading ? (
        <VerifySkeleton />
      ) : status === "True" ? (
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
      ) : (
        <div className="flex flex-col items-center gap-2 justify-center h-screen pb-40">
          <MdError className="text-[#ED4337] text-[9rem]" />
          <h2 className="text-2xl logo mb-5">
            Unable to verify your email. {message && message}
          </h2>
          <Link to={"/verify"} className="flex items-center gap-3">
            Having trouble with the link?
            <button className="text-brand-blue hover:underline" type="submit">
              Click here
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Verify;
