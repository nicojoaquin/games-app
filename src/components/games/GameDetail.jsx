import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWishList } from "../../redux/actions/games/addToWishList";
import { addAlert } from "../assets/alert";
import ButtonsLoader from "../assets/loaders/ButtonsLoader";

const GameDetail = ({
  game,
  title,
  thumbnail,
  game_url,
  screenshots,
  genre,
  release_date,
  description,
  minimum_system_requirements,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wishList } = useSelector((state) => state.wishList);
  const { wishLoader } = useSelector((state) => state.ui);
  const { uid } = useSelector((state) => state.auth);

  const objectToSend = {
    id: game.id,
    title,
    thumbnail,
    played: false,
  };

  const addWishList = () => {
    const exist = wishList.find((wishGame) => wishGame.id === objectToSend.id);
    if (!uid) return navigate("/auth");
    else if (exist) return addAlert("It's already on your wishlist!", "error");
    else dispatch(addToWishList(objectToSend, "events"));
  };

  return (
    <div className="container-fluid text-light">
      <article className="mt-5 pt-5">
        <div className="p-5 d-flex flex-column align-items-center">
          <img
            className="rounded-3 mt-3 mb-5 img-detail"
            src={thumbnail}
            alt={title}
          />
          <div>
            <button
              className="btn btn-primary text-light"
              onClick={addWishList}
            >
              {wishLoader ? <ButtonsLoader /> : "Wishlist"}
            </button>
            <a
              href={game_url}
              target="blank"
              className="btn btn-success text-light ms-3"
            >
              Play game
            </a>
            <button
              className="btn btn-secondary ms-3 text-light"
              onClick={() => navigate(-1)}
            >
              Return
            </button>
          </div>
        </div>
        <div className="d-flex flex-column p-5 text-center">
          <h2 className="fs-3">{title}</h2>
          <hr />
          <h3 className="fs-3">Release date: {release_date}</h3>
          <hr />
          <h4 className="fs-3">Genre: {genre}</h4>
          <hr />
          <h5 className="fs-3 text-center">Game info:</h5>
          <p>{description}</p>
          <br />
          <h5>System requirements: </h5>
          <span>Graphics: {minimum_system_requirements?.graphics}</span>
          <span>Memory: {minimum_system_requirements?.memory}</span>
          <span>OS: {minimum_system_requirements?.os}</span>
          <span>Processor: {minimum_system_requirements?.processor}</span>
          <span>Storage: {minimum_system_requirements?.storage}</span>
        </div>

        <div className="screens-container">
          {screenshots?.map((screen, idx) => (
            <img
              src={screen?.image}
              alt={title + idx}
              key={idx}
              className="rounded-3 screens"
            />
          ))}
        </div>
      </article>
    </div>
  );
};

export default GameDetail;
