/* eslint-disable no-console */
import { useState, useRef } from "react";

const MyOtp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    setOtp((prevOtp) =>
      prevOtp.map((otpNumber, index) => (index === idx ? value : otpNumber)),
    );

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

      setOtp((prevOtp) =>
        prevOtp.map((otpNumber, index) => (index === idx ? "" : otpNumber)),
      );
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join("");
    console.log("Entered OTP:", otpValue);
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="flex flex-col border p-5">
        <h1>Please enter your OTP</h1>
        <div className="flex items-center gap-2">
          {otp.map((otpNumber, idx) => (
            <div key={idx} className="p-2 h-20 w-20">
              <input
                ref={(el) => (inputRefs.current[idx] = el)}
                className="border w-full h-full text-center text-2xl"
                value={otpNumber}
                maxLength={1}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                inputMode="numeric"
                pattern="\d*"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="mt-5 bg-blue-500 text-white py-2 px-4"
          disabled={otp.includes("")}
        >
          Submit OTP
        </button>
      </div>
    </div>
  );
};

export default MyOtp;
