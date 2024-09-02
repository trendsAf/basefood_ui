import { Route, Routes } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import Dashboard from "../pages/Index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route
          path="news"
          element={<h1 className="dark:text-white">Market News</h1>}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
