import React from "react";
import { Form } from "formik";

const AddTransaction = () => {
  return (
    <div className="p-2">
      <div className="form-control">
        <label className="label">Details</label>
      </div>
      <input type="text" className="input input-bordered w-full max-w-xs" />
    </div>
  );
};

export default AddTransaction;
