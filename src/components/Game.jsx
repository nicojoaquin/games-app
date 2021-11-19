import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getGame } from '../redux/getGames'
import GameDetail from "./GameDetail"

const Game = () => {

  const dispatch = useDispatch()
  const {game, loader} = useSelector(state => state.games)
  const {gameId} = useParams();

  useEffect(() => {
    dispatch(getGame(`https://api.rawg.io/api/games/${gameId}?key=838c6a84d03b4761bb2d7348c41bc18f`))
  },[dispatch, gameId])


  console.log(game);

  return (
    
    loader ? 
      <h1 className="text-light">Loading...</h1>
    :        
    <GameDetail key={game.id} {...game} />
    
  )
}

export default Game
