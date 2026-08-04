const WeatherCard = ({ weatherData, loading, error }) => {
  if (loading) {
    return (
      <div className="status-msg loading">جاري جلب بيانات الطقس... ⏳</div>
    );
  }

  if (error) {
    return <div className="status-msg error">{error} ⚠️</div>;
  }

  if (!weatherData) {
    return <div className="status-msg">ابحث عن مدينة لعرض حالة الطقس 🌤️</div>;
  }

  return (
    <div className="weather-card">
      <h2>{weatherData.cityName}</h2>
      <div className="temp">{weatherData.temperature}°C</div>
      <p>سرعة الرياح: {weatherData.windSpeed} كم/ساعة</p>
    </div>
  );
};

export default WeatherCard;
