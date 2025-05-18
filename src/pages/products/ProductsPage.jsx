import ProductList from "@/components/cards/ProductList";
import AddProduct from "@/components/home/AddProduct";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="mx-auto py-12 w-11/12 md:w-10/12 max-w-screen-2xl">
      <div className="flex flex-col lg:flex-row items-stretch gap-8 relative">
        {/* Products */}
        <div className="w-full lg:w-8/12">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products?.map((product, i) => (
              <ProductList product={product} key={i} />
            ))}
          </div>
        </div>
        {/* AddProducts */}
        <div className="w-full lg:w-4/12 lg:sticky top-24 h-fit">
          <AddProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
