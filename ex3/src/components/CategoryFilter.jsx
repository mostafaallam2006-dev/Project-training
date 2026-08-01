/* eslint-disable no-unused-vars */
import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={selectedCategory === cat ? "active" : ""}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
