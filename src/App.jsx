import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="login">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default App;
