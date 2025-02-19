import Cookies from "js-cookie";
import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SessionTimeoutHook from "../../redux/hooks/SessionTimeoutHook";

const ProtectedRoutesComponent: FC = () => {
  const navigate = useNavigate();
  const access_token = Cookies?.get("access_token");

  useEffect(() => {
    if (!access_token) {
      navigate("/login", { replace: true });
    }
  }, [access_token, navigate]);

  return access_token ? (
    <SessionTimeoutHook>
      <Outlet />
    </SessionTimeoutHook>
  ) : null;
};

export default ProtectedRoutesComponent;
