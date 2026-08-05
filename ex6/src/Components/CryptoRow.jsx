const CryptoRow = ({ coin, isWatchlisted, onToggleWatchlist }) => {
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <tr className="crypto-row">
      <td>
        <button
          className={`star-btn ${isWatchlisted ? "active" : ""}`}
          onClick={() => onToggleWatchlist(coin.id)}
        >
          {isWatchlisted ? "★" : "☆"}
        </button>
      </td>
      <td className="coin-info">
        <img src={coin.image} alt={coin.name} />
        <div>
          <span className="coin-name">{coin.name}</span>
          <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>
        </div>
      </td>
      <td className="coin-price">${coin.current_price.toLocaleString()}</td>
      <td className={`coin-change ${isPositive ? "positive" : "negative"}`}>
        {isPositive ? "+" : ""}
        {coin.price_change_percentage_24h?.toFixed(2)}%
      </td>
      <td className="coin-marketcap">${coin.market_cap.toLocaleString()}</td>
    </tr>
  );
};

export default CryptoRow;
