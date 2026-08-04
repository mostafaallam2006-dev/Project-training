const RecipeCard = ({ recipe, isFavorite, onToggleFavorite }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <button
        className={`fav-btn ${isFavorite ? "active" : ""}`}
        onClick={() => onToggleFavorite(recipe)}
      >
        {isFavorite ? "❤️ في المفضلة" : "🤍 أضف للمفضلة"}
      </button>
    </div>
  );
};

export default RecipeCard;
