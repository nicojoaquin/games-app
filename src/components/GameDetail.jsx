import React from 'react'

const GameDetail = ({id, name, background_image, background_image_additional, released, metacritic, description_raw}) => {
  
  // const gameWish = {
  //   id,
  //   name,
  //   background_image,
  //   released,
  //   metacritic
  // }

  return (
    <div className= "container-fluid text-light">
      <article className = "row mt-5 pt-5">
        <div className = "col-lg-4 p-5 text-center">
          <img className="img-detail" src={background_image} alt={name} />
          <br />
          <br />
          <img className="img-detail" src={background_image_additional} alt={name} />
        </div>
        <div className = "col-lg-8 p-5 d-flex flex-column justify-content-evenly text-center">
          <h2 className="fs-3">{name}</h2>
          <hr />
          <h3 className="fs-3">Release: {released}</h3>
          <hr />
          <h4 className="fs-3">Metacritic: {metacritic}</h4>
          <hr />
        </div>
          <h5 className="fs-3 text-center">Game info:</h5>
          <br />
          <br />
          <p className="p-5">{description_raw}</p>
      </article>
    </div>
  )
}

export default GameDetail
