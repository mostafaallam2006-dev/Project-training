import starIcon from "../assets/icons/star.png";
import toast from "react-hot-toast";

const Product = ({ product, setCart }) => {
  const handleClick = () => {
    setCart((prev) => [...prev, product]);
    toast.success("تمت إضافة المنتج إلى السلة");
  };

  return (
    <div className="product-wrapper">
      <li className="product-card">
        <img
          className="product-image"
          src={product.img}
          alt={product.title || "product"}
        />

        <p className="product-rating">
          {product.rating}
          <img src={starIcon} alt="star" width="20" />
        </p>

        <p className="price">
          {Number(product.price).toLocaleString("en-EG")} جنيه
        </p>

        <p className="old-price">
          <span>{Number(product.insteadOf).toLocaleString("en-EG")}</span> جنيه
        </p>

        <button className="add-cart-btn" type="button" onClick={handleClick}>
          اضف الى السلة
        </button>
      </li>
    </div>
  );
};

export default Product;