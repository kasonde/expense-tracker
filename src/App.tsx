import React from "react";
import { Router } from "@reach/router";
import AppIndex from "./routes/app/AppIndex";
import { FaHeart } from "react-icons/fa";
import AddTransaction from "./routes/app/AddTransaction";
import Transaction from "./routes/app/Transaction";

const App = () => {
  return (
    <div className="container mx-auto md:w-1/2 h-screen">
      <Router>
        <AppIndex path="/" default />
        <AddTransaction path="add" />
        <Transaction path="transaction/:id" />
      </Router>
      <footer className="absolute bottom-0 w-full flex justify-center gap-2 items-center p-2">
        <FaHeart />
        <a href="https://github.com/kasonde">Richard</a>
      </footer>
    </div>
  );
};

export default App;
