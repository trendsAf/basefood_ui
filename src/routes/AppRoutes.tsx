import { SkeletonTheme } from "react-loading-skeleton";
import { Route, Routes } from "react-router-dom";
import OtpSuccess from "../components/Auth/otp/OtpSuccess";
import VerificationPage from "../components/Auth/otp/VerificationsPage";
import BusinessDetailsParent from "../components/Auth/businessDetails/BusinessDetailsParent";
import PagesLayout from "../components/layouts/PagesLayout";
import RootLayout from "../components/layouts/RootLayout";
import RFQDetails from "../components/RFQDetails";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Buyers from "../pages/Buyers";
import Dashboard from "../pages/Index";
import NewDashboard from "../pages/NewDashboard";
import NewsPage from "../pages/News";
import WelcomePage from "../pages/WelcomePage";
import ProfilePage from "../pages/ProfilePage";
import Dashboard1 from "../components/dashboards/Dashboard1";
import OtpErrorPage from "../components/Auth/otp/OtpErrorPage";

const AppRoutes = () => {
  const handleNext = () => {};
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/verify"
          element={<VerificationPage onNext={handleNext} />}
        />
        <Route path="/success" element={<OtpSuccess />} />
        <Route path="/error" element={<OtpErrorPage />} />
        <Route path="/business" element={<BusinessDetailsParent />} />
        <Route path="/welcome" element={<WelcomePage />} />

        <Route path="/buyers" element={<PagesLayout />}>
          <Route index element={<Buyers />} />
          <Route path="sourcing" element={<RFQDetails />} />
        </Route>

        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="dashboard" element={<Dashboard1 />} />
          <Route path="dashboard1" element={<Dashboard1 />} />
          <Route path="dashboards/new" element={<NewDashboard />} />
        </Route>
        <Route
          path="*"
          element={
            <div className="flex w-full h-screen items-center justify-center text-3xl logo">
              {" "}
              Page not found
            </div>
          }
        />
      </Routes>
    </SkeletonTheme>
  );
};

export default AppRoutes;
