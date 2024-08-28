import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={<h1 className="dark:text-white ml-4">Hello world</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
