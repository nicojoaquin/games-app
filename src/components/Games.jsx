import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setWishList } from '../redux/wishReducer'

const Games = ({id, name, background_image, released, metacritic}) => {

  const gameWish = {
    id,
    name,
    background_image,
    released,
    metacritic
  }

  const dispatch= useDispatch()

  const handleButton = () => {
    dispatch(setWishList(gameWish))
  }

  return (
    <div className="col-lg-3 col-md-4 mb-4">
      <div className="card bg-dark text-light h-100 rounded-3 shadow">
        <img className="card-img-top h-50" src={background_image} alt="" />
        <div className="card-body">
          <h2 className="card-title fs-4">{name}</h2>
          <hr />
          <h3 className="card-text fs-5">Release: {released}</h3>
          <hr />
          <h4 className="card-text fs-5">Metacritic: {metacritic}</h4>
          <button className="btn btn-outline-info" onClick={() => handleButton() }>Wishlist</button>
        </div>
      </div>
    </div>
  )
}

export default Games
