import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { RootState } from "../redux/store";

// Import components
import BusinessDetailsParent from "../components/Auth/businessDetails/BusinessDetailsParent";
import ForgotPassword from "../components/Auth/ForgotPassword";
import OtpErrorPage from "../components/Auth/otp/OtpErrorPage";
import VerificationPage from "../components/Auth/otp/VerificationsPage";
import Verify from "../components/Auth/otp/Verify";
import ProtectedRoutesComponent from "../components/Auth/ProtectedRoutesComponent";
import ResetPassword from "../components/Auth/ResetPassword";
import ResetPasswordError from "../components/Auth/ResetPasswordError";
import Dashboard1 from "../components/dashboards/Dashboard1";
import PagesLayout from "../components/layouts/PagesLayout";
import RootLayout from "../components/layouts/RootLayout";
import ConsumerProductComponent from "../components/products/consumer/ConsumerProductComponent";
import ProducerSingleProductComponent from "../components/products/Producer/ProducerSingleProductComponent";
import RFQDetails from "../components/RFQDetails";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Buyers from "../pages/Buyers";
import Dashboard from "../pages/Index";
import NewDashboard from "../pages/NewDashboard";
import NewsPage from "../pages/News";
// import ProductsPage from "../pages/products/ProductsPage";
import PublicRoutes from "../components/Auth/PublicRoutes";
import ProfilePage from "../pages/ProfilePage";
import WelcomePage from "../pages/WelcomePage";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AppRoutes = () => {
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/reset_password/:token" element={<ResetPassword />} />
          <Route path="reset_password_error" element={<ResetPasswordError />} />
          <Route
            path="/verify_email"
            element={<VerificationPage onNext={() => {}} />}
          />
          <Route path="/confirm_email" element={<Verify />} />
          <Route path="/error" element={<OtpErrorPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Route>

        <Route
          element={
            <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
              <CssBaseline />
              <ProtectedRoutesComponent />
            </ThemeProvider>
          }
        >
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="dashboard" element={<Dashboard1 />} />
            <Route path="dashboard1" element={<Dashboard1 />} />
            <Route path="dashboards/new" element={<NewDashboard />} />
            {/* <Route path="products" element={<ProductsPage />} /> */}
            <Route path="prod" element={<ConsumerProductComponent />} />
            <Route
              path="products/:id"
              element={<ProducerSingleProductComponent />}
            />
          </Route>
          <Route
            path="/business_information"
            element={<BusinessDetailsParent />}
          />
          <Route path="/buyers" element={<PagesLayout />}>
            <Route index element={<Buyers />} />
            <Route path="sourcing" element={<RFQDetails />} />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <div className="flex w-full h-screen items-center justify-center text-3xl logo">
              Page not found
            </div>
          }
        />
      </Routes>
    </SkeletonTheme>
  );
};

export default AppRoutes;
