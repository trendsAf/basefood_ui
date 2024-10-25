import { useState } from "react";
import OtpComponent from "./LinkComponent";
import RequestNewOtpComponent from "./RequestNewLinkComponent";

interface VerificationPageProps {
  onNext: () => void;
}

const VerificationPage: React.FC<VerificationPageProps> = ({ onNext }) => {
  const [isRequestingNewLink, setIsRequestingNewLink] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      {isRequestingNewLink ? (
        <RequestNewOtpComponent onNext={() => setIsRequestingNewLink(false)} />
      ) : (
        <OtpComponent onNext={onNext} />
      )}
    </div>
  );
};

export default VerificationPage;
