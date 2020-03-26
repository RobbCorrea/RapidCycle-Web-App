import React from "react";
import "./App.scss";
import { DatePicker, Tooltip } from "antd";

function App() {
  const dateTest = (date, dateString) => {
    console.log(date, dateString);
  };
  const text = "Tooltip tag";

  return (
    <>
      <Tooltip placement="leftBottom" title={text}>
        <h1 className="App">
          Rapid Cycle <span>App</span>
        </h1>
      </Tooltip>
      <div>
        <DatePicker onChange={dateTest} />
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
