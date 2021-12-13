import React from "react";

const GameDetail = ({
  id,
  title,
  thumbnail,
  screenshots,
  genre,
  release_date,
  description,
  minimum_system_requirements,
}) => {
  // const gameWish = {
  //   id,
  //   name,
  //   thumbnail,
  //   released,
  //   metacritic
  // }

  return (
    <div className="container-fluid text-light">
      <article className="mt-5 pt-5">
        <div className="p-5 text-center">
          <img
            className="rounded-3 mt-3 img-detail"
            src={thumbnail}
            alt={title}
          />
        </div>
        <div className="d-flex flex-column p-5 text-center">
          <h2 className="fs-3">{title}</h2>
          <hr />
          <h3 className="fs-3">Release date: {release_date}</h3>
          <hr />
          <h4 className="fs-3">Genre: {genre}</h4>
          <hr />
          <h5 className="fs-3 text-center">Game info:</h5>
          <p>{description}</p>
          <br />
          <h5>System requirements: </h5>
          <span>Graphics: {minimum_system_requirements?.graphics}</span>
          <span>Memory: {minimum_system_requirements?.memory}</span>
          <span>OS: {minimum_system_requirements?.os}</span>
          <span>Processor: {minimum_system_requirements?.processor}</span>
          <span>Storage: {minimum_system_requirements?.storage}</span>
        </div>

        <div className="screens-container">
          {screenshots?.map((screen, idx) => (
            <img
              src={screen?.image}
              alt={title + idx}
              key={idx}
              className="rounded-3 screens"
            />
          ))}
        </div>
      </article>
    </div>
  );
};

export default GameDetail;
