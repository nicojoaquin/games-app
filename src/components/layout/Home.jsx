import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../redux/reducers/gamesReducer";
import { getGames } from "../../redux/actions/games/getGames";
import { setInput } from "../../redux/reducers/uiReducer";
import Games from "../games/Games";
import { Fade } from "react-awesome-reveal";
import GoUpBtn from "./GoUpBtn";
import GamesLoader from "../assets/loaders/GamesLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { filteredGames, list: games } = useSelector((state) => state.games);
  const { inputValue, loader } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(
      getGames("https://free-to-play-games-database.p.rapidapi.com/api/games")
    );
  }, [dispatch]);

  const handleInput = ({ target }) => {
    dispatch(setInput(target.value));
    dispatch(setSearch(inputValue));
  };

  if (loader) return <GamesLoader />;

  return (
    <main className="container mt-4 position-relative">
      <div className="row p-3">
        <Fade>
          <input
            type="text"
            placeholder="Buscar..."
            className="form-control mb-3"
            onChange={handleInput}
            value={inputValue}
          />
        </Fade>
        {inputValue.length > 0 ? (
          filteredGames.length === 0 ? (
            <h2 className="text-danger text-center mt-3">Game not found</h2>
          ) : (
            filteredGames.map((game) => (
              <Games key={game.id} {...game} game={game} />
            ))
          )
        ) : (
          games.map((game) => <Games key={game.id} {...game} game={game} />)
        )}
      </div>
      <GoUpBtn />
    </main>
  );
};

export default Home;
