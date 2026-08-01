const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: "blue", color: "white" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
