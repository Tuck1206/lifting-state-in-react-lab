// src/App.jsx
import { useState } from "react";
import "./App.css";
import IngredientList from "./components/IngredientList/IngredientList";
import BurgerStack from "./components/BurgerStack/BurgerStack";

const App = () => {
  const availableIngredients = [
    { id: 1, name: "Kaiser Bun", color: "saddlebrown" },
    { id: 2, name: "Sesame Bun", color: "sandybrown" },
    { id: 3, name: "Gluten Free Bun", color: "peru" },
    { id: 4, name: "Lettuce Wrap", color: "olivedrab" },
    { id: 5, name: "Beef Patty", color: "#3F250B" },
    { id: 6, name: "Soy Patty", color: "#3F250B" },
    { id: 7, name: "Black Bean Patty", color: "#3F250B" },
    { id: 8, name: "Chicken Patty", color: "burlywood" },
    { id: 9, name: "Lettuce", color: "lawngreen" },
    { id: 10, name: "Tomato", color: "tomato" },
    { id: 11, name: "Bacon", color: "maroon" },
    { id: 12, name: "Onion", color: "lightyellow" },
    { id: 13, name: "Cheddar Cheese", color: "#FDE18B" },
    { id: 14, name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    const stackItem = {
      ...ingredient,
      stackId: Math.random().toString(36).slice(2),
    };
    setStack((prev) => [...prev, stackItem]);
  };

  const removeFromBurger = (stackId) => {
    setStack((prev) => prev.filter((item) => item.stackId !== stackId));
  };

  return (
    <>
      <h1>Burger Stacker</h1>
    <main>
      <section className="burger-builder">
        <IngredientList
          ingredients={availableIngredients}
          onAdd={addToBurger}
        />
        <BurgerStack 
        stack={stack} 
        onRemove={removeFromBurger} />
      </section>
    </main>
  </>
  );
};

export default App;
