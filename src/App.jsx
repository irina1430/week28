import React, { useState } from "react";

import "./App.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [changedText, setChangedText] = useState("");

  const handleClick = () => {
    setChangedText(inputText.toUpperCase());
    setInputText("");
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Введите текст"
      />
      <button onClick={handleClick}>Показать</button>

      {changedText && <p className="result">{changedText}</p>}
    </div>
  );
}
