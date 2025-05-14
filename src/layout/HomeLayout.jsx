import AddProduct from "@/components/home/AddProduct";
import Products from "@/components/home/Products";

const HomeLayout = () => {
  return (
    <div className="mx-auto py-12 w-11/12 md:w-10/12 max-w-screen-2xl">
      <div className="flex flex-col lg:flex-row items-stretch gap-8">
        {/* Products */}
        <div className="w-full lg:w-8/12">
          <Products />
        </div>
        {/* AddProducts */}
        <div className="w-full lg:w-4/12 border">
          <AddProduct />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
