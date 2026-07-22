import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/create" element={<AddUser />} />
      </Routes>
    </>
  );
}

export default App;
