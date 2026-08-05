const Navbar = ({ activeTab, onTabChange, watchlistCount }) => {
  return (
    <header className="navbar">
      <h2>متابع العملات الرقمية 🪙</h2>
      <div className="nav-tabs">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => onTabChange("all")}
        >
          جميع العملات
        </button>
        <button
          className={activeTab === "watchlist" ? "active" : ""}
          onClick={() => onTabChange("watchlist")}
        >
          المتابعة ⭐ {watchlistCount > 0 && `(${watchlistCount})`}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
