import React from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.submitText}>
        <div className="input-group mb-3">
          <input
            name="text"
            type="text"
            className="form-control"
            placeholder="Enter Employee's Name"
            onChange={props.editText}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
