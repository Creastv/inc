import { Outlet, Navigate } from "react-router-dom";
const Layout = () => {
  if (1 == 1) {
    return <Navigate replace to="/dashboard" />;
  } else {
    return <Outlet />;
  }
};

export default Layout;
