import { useState } from "react";
import { IoIosMail } from "react-icons/io";
import RequestNewLinkComponent from "./RequestNewLinkComponent";

interface LinkComponentProps {
  onNext: () => void;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ onNext }) => {
  const [showRequestNewLink, setShowRequestNewLink] = useState(false);
  if (showRequestNewLink) {
    return <RequestNewLinkComponent onNext={onNext} />;
  }

  return (
    <div className="shadow-xl p-10">
      {/* <ToastContainer /> */}
      <div className="flex flex-col justify-center items-center border-b-2 pb-4">
        <IoIosMail className="text-5xl text-green" />
        <h1 className="text-center text-2xl logo">VERIFY YOUR EMAIL ADDRESS</h1>
      </div>
      <div className="max-w-md">
        <h1 className="my-4">
          Please check your email and verify you account to continue, if you
          can't find the verification link check in spam box
        </h1>

        <div className="flex justify-center mt-5">
          <div className="text-base helvetica text-center">
            <h1>
              Having problems with the link?
              <span
                className="text-brand-blue cursor-pointer ml-2 hover:underline"
                onClick={() => setShowRequestNewLink(true)}
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

export default LinkComponent;
