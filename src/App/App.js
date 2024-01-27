import React from "react";
import "./App.css";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";

function App() {
  return (
    <div className="main-container">
      <Header className="main_header" title="Weather in" />
      <Form />
    </div>
  );
}

export default App;
