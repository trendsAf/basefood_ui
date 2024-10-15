/* eslint-disable no-console */
import { useState } from "react";
import { BusinessDetailsFormValues } from "../../../@types/fileTypes";
import BusinessDetails from "./BusinessDetails";
import ReviewBusinessDetails from "./ReviewBusinessDetails";

const BusinessDetailsParent = () => {
  const [formData, setFormData] = useState<BusinessDetailsFormValues>();
  const [isReviewing, setIsReviewing] = useState(false);

  const handleFormSubmit = (data: BusinessDetailsFormValues) => {
    setFormData(data);
    setIsReviewing(true);
  };

  const handleEditSection = () => {
    setIsReviewing(false);
  };

  const handleCompleteRegistration = () => {
    console.log("Registration Complete:", formData);
  };

  return (
    <div>
      {isReviewing && formData ? (
        <ReviewBusinessDetails
          data={formData}
          onEdit={handleEditSection}
          onComplete={handleCompleteRegistration}
        />
      ) : (
        <BusinessDetails onSubmit={handleFormSubmit} defaultValues={formData} />
      )}
    </div>
  );
};

export default BusinessDetailsParent;
