import { useState } from "react";

function Todoinput({ onAdd }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input.trim() !== "") {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter task"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Todoinput;