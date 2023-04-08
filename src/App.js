import React from "react";
import logo from "./logo.svg";
import "./App.css";

import MeuComponente from "./componentes/MeuComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MeuComponente titulo="Ola mundo" />
      </header>
    </div>
  );
}

export default App;
