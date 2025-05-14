import HomeLayout from "@/layout/HomeLayout";
import MainLayout from "@/layout/MainLayout";
import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeLayout />} />
      </Route>
    </Routes>
  );
};

export default Router;
