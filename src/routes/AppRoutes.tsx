import { Route, Routes } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import Dashboard from "../pages/Index";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import NewsPage from "../pages/News";
import NewDashboard from "../pages/NewDashboard";
import Buyers from "../pages/Buyers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/buyers" element={<Buyers />} />
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="dashboards/new" element={<NewDashboard />} />
        {/* <Route path="buyers" element={<Buyers />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
