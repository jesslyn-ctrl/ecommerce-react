import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "./../pages";
import { authHelpers } from "./../utils/";

const ProtectedRoute = () => {
  if (!authHelpers.isAuthenticated()) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  }

  // Redirect to home page
  return <Navigate to="/" />;
};

export default ProtectedRoute;
