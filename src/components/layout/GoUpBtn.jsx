import React from "react";

const GoUpBtn = () => {
  return (
    <div className="position-fixed go-up">
      <a className="rounded-pill" href="#up">
        <i
          className="bi bi-arrow-up-circle-fill"
          style={{ fontSize: "3rem", color: "white" }}
        ></i>
      </a>
    </div>
  );
};

export default GoUpBtn;
