const Card = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.desc}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Card;
