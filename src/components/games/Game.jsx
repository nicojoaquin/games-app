import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getGame } from "../../redux/actions/games/getGames";
import { setInput } from "../../redux/reducers/uiReducer";
import GameDetail from "./GameDetail";
import GamesLoader from "../assets/loaders/GamesLoader";
import { Fade } from "react-awesome-reveal";

const Game = () => {
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state.games);
  const { loader } = useSelector((state) => state.ui);
  const { gameId } = useParams();

  useEffect(() => {
    dispatch(setInput(""));
    dispatch(
      getGame(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`
      )
    );
  }, [dispatch, gameId]);

  return loader ? (
    <GamesLoader />
  ) : (
    <Fade>
      <GameDetail key={game.id} {...game} game={game} />
    </Fade>
  );
};

export default Game;
