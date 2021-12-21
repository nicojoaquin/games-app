import React from "react";
import { useNavigate } from "react-router-dom";

const WishListGame = ({ _id, game, id, title, thumbnail, handleSub }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/game/${id}`);
  };

  return (
    <div className="col-lg-3 col-md-4 mb-4">
      <div className="card bg-dark text-light rounded-3 shadow">
        <img className="card-img-top" src={thumbnail} alt={title} />
        <div className="card-body">
          <h2 className="card-title fs-4">{title}</h2>
          <hr />
          <button className="btn btn-primary" onClick={() => handleNavigate()}>
            Details
          </button>
          <button
            className="btn btn-danger ms-3"
            onClick={() => handleSub(game)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListGame;
