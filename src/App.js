import React from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="text-center jumbotron rounded-0">
          <h1>Employee Directory</h1>
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default App;
