import { Suspense } from "react";
import RoleProvider from "./context/RoleProvider";
import AppRoutes from "./routes/App.Routes";
import "react-toastify/dist/ReactToastify.css";
import { RotatingSquare } from "react-loader-spinner";
import logo from "./assets/basefood_logo.png";

const App = () => {
  return (
    <div>
      <RoleProvider>
        <Suspense
          fallback={
            <div className="flex items-center lg:flex-row flex-col justify-center h-screen bg-[#252525] gap-2">
              <RotatingSquare
                visible={true}
                height="100"
                width="100"
                color="#2563EB"
                ariaLabel="rotating-square-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
              <div className="w-1/4 h-auto">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-cover animate-pulse"
                />
              </div>
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </RoleProvider>
    </div>
  );
};

export default App;
