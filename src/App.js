import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }
  function handleChangeName(e) {
    setName(e.target.value);
  }
  return (
    <div className="App" style={{ padding: 10 }}>
      <input value={email} onChange={handleChange} />
      <p>Email : {email}</p>
      <input value={name} onChange={handleChangeName} />
      <p>Name : {name}</p>
    </div>
  );
}

export default App;
