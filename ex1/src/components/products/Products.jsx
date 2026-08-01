import Card from "./Card";

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product, index) => {
        return <Card product={product} key={index} />;
      })}
    </div>
  );
};

export default Products;
