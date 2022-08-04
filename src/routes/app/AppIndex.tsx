import React from "react";
import TransactionCard from "../../components/home/TransactionCard";
import { FaCog, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppIndex = () => {
  return (
    <div>
      <div className="container px-2 pt-2 flex flex-row justify-end gap-2">
        <Link to="add" className="btn gap-2 btn-primary">
          <FaPlus />
          Add transaction
        </Link>
        <Link to="settings" className="btn btn-circle btn-outline">
          <FaCog />
        </Link>
      </div>
      <div className="container gap-2 flex flex-col md:flex-row">
        <TransactionCard
          amount={0}
          heading="You've got"
          headingColor="text-blue-200"
          key={"total"}
        />
        <div className="flex flex-row gap-2">
          <TransactionCard
            amount={0}
            heading="You've put in"
            headingColor="text-green-200"
            key={"total"}
          />
          <TransactionCard
            amount={0}
            heading="You've put out"
            headingColor="text-red-200"
            key={"total"}
          />
        </div>
      </div>
      <div className="container p-2">
        <div className="section_heading flex flex-row items-center justify-between">
          <p>My Budgets</p>
          <button className="btn btn-outline btn-sm">Add budget</button>
        </div>
      </div>
      <div className="container p-2">
        <div className="section_heading flex flex-row items-center justify-between">
          <p>Spending History</p>
          <button className="btn btn-outline btn-sm">View All</button>
        </div>
      </div>
    </div>
  );
};

export default AppIndex;
