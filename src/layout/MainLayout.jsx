import Navbar from "@/components/shared/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div className="mx-auto py-5 px-2 border-b w-11/12 md:w-10/12 max-w-screen-2xl">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
