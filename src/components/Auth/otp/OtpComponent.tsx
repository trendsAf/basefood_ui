import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { otpSchema } from "../../../validations/formValidations";
import { useNavigate } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import RequestNewOtpComponent from "./RequestNewOtpComponent";

type OtpComponentFieldProps = yup.InferType<typeof otpSchema>;

interface OtpComponentProps {
  onNext: () => void;
}

const OtpComponent: React.FC<OtpComponentProps> = ({ onNext }) => {
  const [loading, setLoading] = useState(false);
  const [showRequestNewOtp, setShowRequestNewOtp] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<OtpComponentFieldProps>({
    resolver: yupResolver(otpSchema),
    mode: "onSubmit",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number,
  ) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const otpArray = [...otp];
    otpArray[idx] = value;

    setOtp(otpArray);
    setValue("otp", otpArray.join(""));

    if (value && idx < otp.length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number,
  ) => {
    if (e.key === "Backspace") {
      if (otp[idx] === "" && idx > 0) {
        inputRefs.current[idx - 1]?.focus();
      }

      const otpArray = [...otp];
      otpArray[idx] = "";
      setOtp(otpArray);
      setValue("otp", otpArray.join(""));
    }
  };

  const onSubmit: SubmitHandler<OtpComponentFieldProps> = (data) => {
    setLoading(true);
    setTimeout(() => {
      if (data.otp === "484848") {
        setLoading(false);
        navigate("/success");
      } else {
        toast.error("Invalid OTP, please try again");
        setLoading(false);
      }
    }, 1000);
  };

  if (showRequestNewOtp) {
    return <RequestNewOtpComponent onNext={onNext} />;
  }

  return (
    <div className="shadow-xl p-10">
      <ToastContainer />
      <div className="flex flex-col justify-center items-center border-b-2 pb-4">
        <IoIosMail className="text-5xl text-green" />
        <h1 className="text-center text-2xl logo">VERIFY YOUR EMAIL ADDRESS</h1>
      </div>
      <div className="max-w-md">
        <h1 className="my-4">
          Please check your email and enter the verification code below to
          verify your email address
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full py-4 flex flex-col gap-5"
        >
          <div className="flex items-center justify-between gap-2">
            {otp.map((otpNumber, idx) => (
              <Controller
                key={idx}
                name={otpNumber}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    inputRef={(el) => (inputRefs.current[idx] = el)}
                    value={otp[idx]}
                    onChange={(e) => handleChange(e, idx)}
                    onKeyDown={(e) =>
                      handleKeyDown(
                        e as React.KeyboardEvent<HTMLInputElement>,
                        idx,
                      )
                    }
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: "center", fontSize: "24px" },
                    }}
                    error={!!errors.otp}
                    helperText={idx === 0 ? errors.otp?.message : ""}
                    sx={{ width: "60px", height: "40px" }}
                  />
                )}
              />
            ))}
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className={`text-white bg-brand-blue px-5 py-3 w-full rounded-[5px] font-bold transition-all duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
              }`}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-5">
          <div className="text-base helvetica text-center">
            <h1>
              Having problems with the code?
              <span
                className="text-brand-blue cursor-pointer ml-2 hover:underline"
                onClick={() => setShowRequestNewOtp(true)}
              >
                Request new
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpComponent;
