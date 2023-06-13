import { Navigate } from "react-router-dom";

function NoPage() {
  if (1 == 1) {
    return <Navigate replace to="/dashboard" />;
  } else {
    return <Navigate replace to="/sing/in" />;
  }
}
export default NoPage;
