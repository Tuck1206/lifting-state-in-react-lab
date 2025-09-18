// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, onRemove }) => {
  return (
    <ul className="burger-stack">
      {stack.map((item) => (
        <li
          key={item.stackId}
          style={{ backgroundColor: item.color }}
        >
          {item.name}
          <button onClick={() => onRemove(item.stackId)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
