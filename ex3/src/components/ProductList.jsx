/* eslint-disable no-unused-vars */
import React from "react";

import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return <p className="empty-msg">لا توجد منتجات في هذا التصنيف </p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
