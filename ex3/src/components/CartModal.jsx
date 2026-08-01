/* eslint-disable no-unused-vars */
import React from "react";

const CartModal = ({
  cart,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart,
  totalPrice,
}) => {
  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h3>سلة التسوق </h3>
          <button className="close-btn" onClick={onClose}>
            *
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart">السلة فارغة حالياً </p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      {item.price} ج.م × {item.quantity}
                    </p>
                  </div>
                  <div className="quantity-controls">
                    <button
                      onClick={() => onUpdateQuantity(item.id, "decrease")}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, "increase")}
                    >
                      +
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => onRemoveFromCart(item.id)}
                    >
                      سلة
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="total">
                <span>الإجمالي:</span>
                <strong>{totalPrice} ج.م</strong>
              </div>
              <div className="cart-actions">
                <button className="clear-btn" onClick={onClearCart}>
                  تفريغ السلة
                </button>
                <button className="checkout-btn">إتمام الشراء</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
