// This component is responsible for rendering the list of products.
// The list of products is passed as a prop to the ProductsContainer component.
// The ProductsContainer component maps over the list of products and renders each product using the Product component.
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
