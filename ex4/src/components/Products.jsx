import starIcon from "../assets/icons/star.png";
const Products = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.img}
              alt={product.title}
              width="200"
              height="200"
            />
            <h3>{product.title}</h3>
            <p>
              Rating: {product.rating}
              <img src={starIcon} alt="star" width="20" height="20" />
            </p>
            <p>Price: {Number(product.price).toLocaleString("en-EG")} جنيه</p>
            <p>
              Instead of:{" "}
              <span style={{ textDecoration: "line-through", color: "red" }}>
                {Number(product.insteadOf).toLocaleString("en-EG")}
              </span>{" "}
              جنيه
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
