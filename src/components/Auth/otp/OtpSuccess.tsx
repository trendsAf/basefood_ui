import { IoMdCloudDone } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";
import { verifyAccount } from "../../../redux/reducers/auth/verifySlice";
import { toast } from "react-toastify";

const OtpSuccess = () => {
  // const dispatch = useAppDispatch();
  // const { isVerified, isLoading } = useAppSelector(
  //   (state) => state.verifyAccount,
  // );
  // const { userId } = useParams();
  // useEffect(() => {
  //   const verifyUser = async () => {
  //     try {
  //       await dispatch(verifyAccount(userId as string)).unwrap();
  //       toast.success("Verified successfully");
  //     } catch (error) {
  //       toast.error("Erro verifying");
  //     }
  //   };
  //   verifyUser();
  // }, [dispatch, userId]);

  // console.log(userId, "Idiiiiiiiiiii");
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
