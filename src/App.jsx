import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div class="header">
        <div class="header-left">
          <a class="active" href="#home">BTN1</a>
          <a href="#contact">BTN2</a>
          <a href="#about">BTN3</a>
          <a href="#about">BTN4</a>
        </div>
        <div class="header-right">
          <a href="#default" class="logo">LOGO</a>
        </div>
      </div>
      <div class="bord">        
        <div class="corp"></div>
      </div>
    </div>
  );
}

export default App;
