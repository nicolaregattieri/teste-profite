import React from "react";
import ReactDOM from "react-dom";
import Shelf from "./Shelf";

const App = () => {
  return (
    <div className="App">
      <Shelf />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#shelf"));
