import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import WithoutNav from "./components/shared/WithoutNav";
import ListaCafe from "./components/ListaCafe";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <main className="App">
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/login" element={<Login />} />
            <Route path="/cafes" element={<ListaCafe />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
