/* eslint-disable no-console */
import { useState } from "react";
import { BusinessDetailsFormValues } from "../../../@types/fileTypes";
import BusinessDetails from "./BusinessDetails";
import ReviewBusinessDetails from "./ReviewBusinessDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const BusinessDetailsParent = () => {
  const [formData, setFormData] = useState<
    BusinessDetailsFormValues | undefined
  >(undefined);
  const [isReviewing, setIsReviewing] = useState(false);

  const handleFormSubmit = (data: BusinessDetailsFormValues) => {
    setFormData(data);
    setIsReviewing(true);
  };

  const handleEditSection = () => {
    setIsReviewing(false);
  };

  const handleCompleteRegistration = () => {
    console.log("");
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <div>
      {isReviewing && formData ? (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ReviewBusinessDetails
            data={formData}
            onEdit={handleEditSection}
            onComplete={handleCompleteRegistration}
          />
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BusinessDetails
            onSubmit={handleFormSubmit}
            defaultValues={formData}
          />
        </ThemeProvider>
      )}
    </div>
  );
};

export default BusinessDetailsParent;
