import Cookies from "js-cookie";
import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutesComponent: FC = () => {
  const navigate = useNavigate();
  const token = Cookies.get("access_token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoutesComponent;
