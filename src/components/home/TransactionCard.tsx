import React from "react";

type TransactionCardProps = {
  heading?: string;
  amount?: number;
  headingColor?: string;
};

const TransactionCard = (props: TransactionCardProps) => {
  return (
    <div className="card w-full md:w-1/3 bg-base-100 shadow-xl">
      <div className="card-body">
        <h6
          className={`card-title text-sm uppercase ${props.headingColor ?? ""}`}
        >
          {props.heading ?? "why am i here"}
        </h6>
        <p className="text-3xl font-bold">ZMW {props.amount ?? 0}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
