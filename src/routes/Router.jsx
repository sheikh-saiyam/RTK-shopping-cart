import { Route, Routes } from "react-router";
import HomeLayout from "@/layout/HomeLayout";
import MainLayout from "@/layout/MainLayout";
import Products from "@/pages/products/ProductsPage";
import Cart from "@/pages/cart/Cart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeLayout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default Router;
