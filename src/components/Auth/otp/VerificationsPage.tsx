import { useState } from "react";
import OtpComponent from "./OtpComponent";
import RequestNewOtpComponent from "./RequestNewOtpComponent";

interface VerificationPageProps {
  onNext: () => void;
}

const VerificationPage: React.FC<VerificationPageProps> = ({ onNext }) => {
  const [isRequestingNewOtp, setIsRequestingNewOtp] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      {isRequestingNewOtp ? (
        <RequestNewOtpComponent onNext={() => setIsRequestingNewOtp(false)} />
      ) : (
        <OtpComponent onNext={onNext} />
      )}
    </div>
  );
};

export default VerificationPage;
