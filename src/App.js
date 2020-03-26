import React from "react";
import "./App.scss";
import { DatePicker } from "antd";

function App() {
  return (
    <>
      <div>
        <h1 className="App">
          {" "}
          Rapid Cycle <span>App</span>
        </h1>
      </div>
      <div>
        <DatePicker />
        <br />
        <DatePicker picker="week" />
        <br />
        <DatePicker picker="month" />
        <br />
        <DatePicker picker="year" />
      </div>
    </>
  );
}

export default App;
