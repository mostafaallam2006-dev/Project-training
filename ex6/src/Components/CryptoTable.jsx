import CryptoRow from "./CryptoRow";

const CryptoTable = ({
  coins,
  watchlist,
  onToggleWatchlist,
  loading,
  error,
}) => {
  if (loading)
    return <div className="status-msg">جاري تحميل أحدث الأسعار... ⏳</div>;
  if (error) return <div className="status-msg error">{error} ⚠️</div>;
  if (coins.length === 0)
    return <div className="status-msg">لا توجد نتائج مطابقة 🔍</div>;

  return (
    <div className="table-wrapper">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>متابعة</th>
            <th>العملة</th>
            <th>السعر ($)</th>
            <th>التغير (24h)</th>
            <th>القيمة السوقية</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <CryptoRow
              key={coin.id}
              coin={coin}
              isWatchlisted={watchlist.includes(coin.id)}
              onToggleWatchlist={onToggleWatchlist}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
