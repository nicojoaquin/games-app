import React from 'react'
import { useNavigate } from "react-router-dom";

const Games = ({id, name, background_image}) => {

  const navigate = useNavigate()

  const handleButton = () => {
    navigate(`/game/${id}`)
  }

  return (
    <div className="col-lg-3 col-md-4 mb-4">
      <div className="card bg-dark text-light h-100 rounded-3 shadow">
        <img className="card-img-top h-75" src={background_image} alt={name} />
        <div className="card-body">
          <h2 className="card-title fs-4">{name}</h2>
          <hr />
          <button className="btn btn-primary" onClick={() => handleButton() }>Details</button>
        </div>
      </div>
    </div>
  )
}

export default Games
