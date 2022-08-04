import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppIndex from "./routes/app/AppIndex";
import { FaHeart } from "react-icons/fa";
import AddTransaction from "./routes/app/AddTransaction";
import Transaction from "./routes/app/Transaction";

const App = () => {
  return (
    <div className="container mx-auto md:w-1/2 h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<AppIndex />} path="/" />
          <Route element={<AddTransaction />} path="add" />
          <Route element={<Transaction />} path="transaction/:id" />
        </Routes>
      </BrowserRouter>
      <footer className="absolute bottom-0 w-full flex justify-center gap-2 items-center p-2">
        <FaHeart />
        <a href="https://github.com/kasonde">Richard</a>
      </footer>
    </div>
  );
};

export default App;
