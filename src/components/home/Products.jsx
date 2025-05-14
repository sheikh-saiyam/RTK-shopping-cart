import ProductCard from "./../cards/ProductCard";

const Products = () => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCard product={null} key={i} />
      ))}
    </div>
  );
};

export default Products;
