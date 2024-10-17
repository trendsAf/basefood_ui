import Cookies from "js-cookie";
import { FC, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PublicRoutess: FC = () => {
  const navigate = useNavigate();
  const token = Cookies.get("access_token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return !token ? <Outlet /> : null;
};

export default PublicRoutess;
