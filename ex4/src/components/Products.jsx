import Producte from "./Producte";
const Products = ({ products, setCart }) => {
  return (
    <div className="products-container">
      <ul className="products-grid">
        {products.map((product) => (
          <Producte key={product.id} product={product} setCart={setCart} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
