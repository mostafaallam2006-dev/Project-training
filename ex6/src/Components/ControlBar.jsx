const ControlBar = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onRefresh,
  loading,
}) => {
  return (
    <div className="control-bar">
      <input
        type="text"
        placeholder="ابحث بالاسم أو الرمز (مثال: BTC, Ethereum)..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="market_cap_desc">أعلى قيمة سوقية</option>
        <option value="price_desc">الأعلى سعراً</option>
        <option value="price_asc">الأقل سعراً</option>
        <option value="change_desc">الأعلى صعوداً (24h)</option>
      </select>

      <button onClick={onRefresh} disabled={loading} className="refresh-btn">
        {loading ? "جاري التحديث..." : "تحديث 🔄"}
      </button>
    </div>
  );
};

export default ControlBar;
