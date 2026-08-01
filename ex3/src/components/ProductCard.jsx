/* eslint-disable no-unused-vars */
import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <span className="category">{product.category}</span>
      <p className="price">{product.price} ج.م</p>
      <button onClick={() => onAddToCart(product)}>إضافة إلى السلة </button>
    </div>
  );
};

export default ProductCard;
