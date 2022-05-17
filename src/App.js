import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login/Login";
import Nav from "./Component/Login/Nav";
import Home from "./Component/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={
            <>
              <Nav />
              <Home />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
