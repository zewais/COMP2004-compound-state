import Product from "./Product";
export default function ProductsContainer({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
