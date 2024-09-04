import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login.jsx";
import pages from "./pages/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/Lobby" element={<pages.lobby />} />
        <Route path="/Hangman" element={<pages.hangman />} />
        <Route path="/Pairs" element={<pages.pairs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
