import React from 'react'
import { useSelector } from 'react-redux'
import Games from './Games'

const WishList = () => {

  const {wishlist} = useSelector(state => state.wishList)
  
  return (
    <section className= "container mt-4">
      <h1 className="text-light text-center mb-3">Wish List</h1>
      <hr className="bg-light" />
      <div className = "row p-3">
        {
          wishlist.map(wishGame => 
            <Games key={wishGame.id} {...wishGame} />
          )
        }
      </div>
    </section>
  )
}

export default WishList
