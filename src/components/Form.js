import React from "react";

const Form = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            name="text"
            type="text"
            className="form-control"
            placeholder="Enter Employee's Name"
            onChange={props.editText}
          />
        </div>
        <button className="btn btn-primary" type="button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
