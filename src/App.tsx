import RoleProvider from "./context/RoleProvider";
import AppRoutes from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <RoleProvider>
        <AppRoutes />
      </RoleProvider>
    </div>
  );
};

export default App;
