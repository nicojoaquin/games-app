import React from "react";
import { useNavigate } from "react-router-dom";

const Games = ({ id, title, thumbnail }) => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(`/game/${id}`);
  };

  return (
    <div className="col-lg-3 col-md-4 mb-4">
      <div className="card bg-dark text-light rounded-3 shadow">
        <img className="card-img-top" src={thumbnail} alt={title} />
        <div className="card-body">
          <h2 className="card-title fs-4">{title}</h2>
          <hr />
          <button className="btn btn-primary" onClick={() => handleButton()}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Games;
