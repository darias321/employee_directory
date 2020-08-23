import React from "react";
import "./App.css";
import Form from "./components/Form";
import DataBody from "./components/DataBody";
import DataTable from "./components/DataTable";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron text-center rounded-0">
          <h1>Employee Directory</h1>
          <Form></Form>
        </div>
        <DataTable />
      </div>
    </div>
  );
}

export default App;
