import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getGame } from "../redux/actions/games/getGames";
import { setInput } from "../redux/uiReducer";
import GameDetail from "./GameDetail";

const Game = () => {
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state.games);
  const { loader } = useSelector((state) => state.ui);
  const { gameId } = useParams();

  useEffect(() => {
    dispatch(
      getGame(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`
      )
    );
    dispatch(setInput(""));
  }, [dispatch, gameId]);

  return loader ? (
    <h1 className="text-light">Loading...</h1>
  ) : (
    <GameDetail key={game.id} {...game} game={game} />
  );
};

export default Game;
