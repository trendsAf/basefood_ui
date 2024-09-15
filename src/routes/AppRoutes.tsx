import { Route, Routes } from "react-router-dom";
import PagesLayout from "../components/layouts/PagesLayout";
import RootLayout from "../components/layouts/RootLayout";
import RFQDetails from "../components/RFQDetails";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Buyers from "../pages/Buyers";
import Dashboard from "../pages/Index";
import NewDashboard from "../pages/NewDashboard";
import NewsPage from "../pages/News";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/buyers" element={<PagesLayout />}>
        <Route index element={<Buyers />} />
        <Route path="sourcing" element={<RFQDetails />} />
      </Route>

      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="news" element={<NewsPage />} />
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
  );
};

export default AppRoutes;
