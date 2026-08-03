const CartItem = ({ cart }) => {
  return (
    <div>
      <li key={cart.id}>
        <img src={cart.img} alt={cart.title} width="200" height="200" />
        <h3>{cart.title}</h3>

        <p> {Number(cart.price).toLocaleString("en-EG")} جنيه</p>
        <p>
          {" "}
          <span style={{ textDecoration: "line-through", color: "red" }}>
            {Number(cart.insteadOf).toLocaleString("en-EG")}
          </span>{" "}
          جنيه
        </p>
      </li>
    </div>
  );
};

export default CartItem;
