import React, { useState, createRef } from "react";
import { ClearableInput } from "./ClearableInput";
import "./App.css";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <div className="App">
      <h1>Clearable Text Box</h1>
      <div style={{ border: "1px solid red", padding: "1rem" }}>
        <ClearableInput onChange={setText1} text={text1} />
        <ClearableInput onChange={setText2} text={text2} />
        <button>Click Me</button>
      </div>
      <p>Input 1:{text1}</p>
      <p>Input 2:{text2}</p>
    </div>
  );
}

export default App;
