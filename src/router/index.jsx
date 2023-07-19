import { Routes, Route } from "react-router-dom";
import { Layout, Home, Login, Register, ProductDetail, Cart } from "../pages";
import { NotFound } from "../components";
import PrivateRoute from "./privateRoute";
import ProtectedRoute from "./protectedRoute";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route path="cart" element={<Cart />} />
      </Route>

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
