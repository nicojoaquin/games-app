import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGames } from '../redux/getUsers'
import Games from './Games'

const Home = () => {

  const dispatch = useDispatch()
  const {list: games} = useSelector(state => state.games)
  console.log(games);

  useEffect(() => {
    dispatch(getGames())
  },[dispatch])

  return (
    <main className="container mt-4">
      <div className = "row p-3">
        {
          games.map(game => 
            <Games key = {game.id} {...game} /> 
          )
        }
      </div>
    </main>
  )
}

export default Home
