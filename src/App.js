import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Lasthour from "./components/Lasthour";
import Lastthreedays from "./components/Lastthreedays";
import Nav from "./components/Nav";
import Today from "./components/Today";
import Yesterday from "./components/Yesterday";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Lasthour />}></Route>
        <Route path="today" element={<Today />}></Route>
        <Route path="lastthreedays" element={<Lastthreedays />}></Route>
        <Route path="yesterday" element={<Yesterday />}></Route>
      </Routes>
    </div>
  );
}

export default App;
