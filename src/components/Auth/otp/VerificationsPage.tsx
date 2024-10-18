import { useState } from "react";
import OtpComponent from "./LinkComponent";
import RequestNewOtpComponent from "./RequestNewLinkComponent";

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
