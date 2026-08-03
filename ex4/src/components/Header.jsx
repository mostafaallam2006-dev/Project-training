const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Amazon Clone</h1>

      <div className="search-box">
        <input type="text" placeholder="ابحث عن منتج..." />
        <button>🔍</button>
      </div>

      <nav className="header-links">
        <span>الحساب</span>
        <span>الطلبات</span>
        <span>السلة</span>
      </nav>
    </header>
  );
};

export default Header;
