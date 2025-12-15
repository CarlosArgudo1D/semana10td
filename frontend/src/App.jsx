import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const agregarItem = () => {
    if (text.trim() === "") return;
    setItems([...items, text]);
    setText("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Mi Mini App React</h1>

      <hr />

      {/* Contador */}
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Sumar</button>

      <hr />

      {/* Lista */}
      <h2>Agregar elementos a una lista</h2>
      <input
        type="text"
        placeholder="Escribe algo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={agregarItem}>Agregar</button>

      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
