import ProductList from "@/components/cards/ProductList";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="mx-auto py-12 w-11/12 md:w-10/12 max-w-screen-2xl">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products?.map((product, i) => (
          <ProductList product={product} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
