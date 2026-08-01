import Navbar from "./Navbar";
const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <a href="/" className="logo">
        Logo
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
