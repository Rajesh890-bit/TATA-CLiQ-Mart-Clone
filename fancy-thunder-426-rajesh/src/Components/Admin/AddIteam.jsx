import React from "react";

import { useState } from "react";

function AddIteam({ handleAddTodo }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    handleAddTodo(text);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={onClick}>ADD</button>
    </div>
  );
}

export default AddIteam;
