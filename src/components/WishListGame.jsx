import React from "react";

const WishListGame = ({
  game,
  id,
  title,
  thumbnail,
  played,
  handleNavigate,
  handleSub,
  handleEdit,
}) => {
  return (
    <div className="col-lg-4 col-xl-3 mb-4 gr">
      <div className="card bg-dark text-light rounded-3 shadow wish-card">
        <img className="card-img-top" src={thumbnail} alt={title} />
        <div className="card-body">
          <h2 className="card-title fs-4">{title}</h2>
          <hr />
          <div className="d-flex justify-content-evenly">
            <button
              className="btn btn-primary"
              onClick={() => handleNavigate(id)}
            >
              Details
            </button>
            <button
              className="btn btn-success ms-2 me-2"
              onClick={() => handleEdit(game)}
            >
              Played
            </button>
            <button className="btn btn-danger" onClick={() => handleSub(game)}>
              Delete
            </button>
          </div>
        </div>
        {played && (
          <div className="d-flex justify-content-center align-items-center new-card">
            <div className="d-flex flex-column">
              <h2>Played</h2>
              <button
                className="btn btn-danger mt-3"
                onClick={() => handleSub(game)}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishListGame;
