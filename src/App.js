import React from "react";
import Home from "./Components/Home";
import "./assets/css/All.css";
import { Redirect } from "react-router";
function App() {
  const path = new URL(window.location.href).pathname;
  if (path !== "/homepage") {
    return <Redirect to="/homepage" />;
  } else {
    return (
      <>
        <Home />
      </>
    );
  }
}

export default App;
