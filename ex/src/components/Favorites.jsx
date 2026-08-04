import RecipeCard from "./RecipeCard";

const RecipeList = ({
  recipes,
  loading,
  error,
  favorites,
  onToggleFavorite,
}) => {
  if (loading)
    return <div className="status-msg">جاري تحميل الوصفات... ⏳</div>;
  if (error) return <div className="status-msg error">{error} ⚠️</div>;
  if (!recipes || recipes.length === 0)
    return <div className="status-msg">لا توجد وصفات للعرض 🍲</div>;

  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => {
        const isFav = favorites.some((fav) => fav.idMeal === recipe.idMeal);
        return (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            isFavorite={isFav}
            onToggleFavorite={onToggleFavorite}
          />
        );
      })}
    </div>
  );
};

export default RecipeList;
