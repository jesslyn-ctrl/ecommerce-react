import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "./../pages";
import { authHelpers } from "./../utils/";

const ProtectedRoute = () => {
  if (authHelpers.isAuthenticated()) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  }

  // Redirect to login page
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
