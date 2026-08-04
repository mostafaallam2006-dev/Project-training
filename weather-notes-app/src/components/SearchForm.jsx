import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="اكتب اسم المدينة (مثلاً: Cairo, London)..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">بحث عن الطقس 🔍</button>
    </form>
  );
};

export default SearchForm;
