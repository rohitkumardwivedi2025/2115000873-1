import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Smoothies from "./components/Smoothies";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Smoothies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
