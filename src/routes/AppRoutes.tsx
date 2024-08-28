import { Route, Routes } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={<h1 className="dark:text-white">Today's market</h1>}
        />
        <Route
          path="news"
          element={<h1 className="dark:text-white">Market News</h1>}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
