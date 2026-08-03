import CartItem from "./CartItem";
const CartItems = ({ cart }) => {
  return (
    <div>
      <h1>سلة التسوق</h1>
      <h3>Cart {cart.length}</h3>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} cart={item} />
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
