import { useSelector } from "react-redux";
import ProductCard from "./../cards/ProductCard";

const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products?.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </div>
  );
};

export default Products;
