import React from "react";
import { RouteComponentProps } from "@reach/router";

const AppIndex = (props: RouteComponentProps) => {
  return (
    <div>
      <div className="container px-2 pt-2 flex flex-row justify-end">
        <button>Add transaction</button>
      </div>
      <div className="container p-2 flex flex-col md:flex-row">
        <div className="bg-green-500 w-full md:w-1/3">Total Amount</div>
        <div className="bg-green-500 w-full md:w-1/3">Income Amount</div>
        <div className="bg-green-500 w-full md:w-1/3">Expense Amount</div>
      </div>
    </div>
  );
};

export default AppIndex;
