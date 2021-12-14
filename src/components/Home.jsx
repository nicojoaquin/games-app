import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../redux/getGames";
import Games from "./Games";

const Home = () => {
  const dispatch = useDispatch();
  const { list: games } = useSelector((state) => state.games);
  const { loader } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(
      getGames("https://free-to-play-games-database.p.rapidapi.com/api/games")
    );
  }, [dispatch]);

  return (
    <main className="container mt-4">
      <div className="row p-3">
        {loader ? (
          <h1 className="text-light">Loading...</h1>
        ) : (
          games.map((game) => <Games key={game.id} {...game} game={game} />)
        )}
      </div>
    </main>
  );
};

export default Home;
