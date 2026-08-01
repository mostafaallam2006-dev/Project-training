/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = ({ totalItems, onOpenCart }) => {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>متجري الإلكتروني </h2>
      </div>
      <button className="cart-btn" onClick={onOpenCart}>
        السلة
        {totalItems > 0 && <span className="badge">{totalItems}</span>}
      </button>
    </header>
  );
};

export default Navbar;
