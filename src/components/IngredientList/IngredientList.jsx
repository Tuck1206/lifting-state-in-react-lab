// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient) => (
        <li
          key={ingredient.id}
          style={{ backgroundColor: ingredient.color }}
        >
          {ingredient.name}
          <button onClick={() => onAdd(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
