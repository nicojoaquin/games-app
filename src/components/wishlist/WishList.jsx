import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateWishGame } from "../../redux/actions/games/updateWishGame";
import { deleteWishGame } from "../../redux/actions/games/deleteWishGame";
import { setInput } from "../../redux/reducers/uiReducer";
import Games from "../games/Games";
import GamesLoader from "../assets/loaders/GamesLoader";
import { Fade } from "react-awesome-reveal";
import { setGamesList } from "../../redux/reducers/gamesReducer";
import ButtonsLoader from "../assets/loaders/ButtonsLoader";

const WishList = () => {
  const { wishList, wishListLoader } = useSelector((state) => state.wishList);
  const { uid } = useSelector((state) => state.auth);
  const { wishDeleteLoader, wishUpdateLoader } = useSelector(
    (state) => state.ui
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInput(""));
    dispatch(setGamesList([]));
  }, [dispatch, uid]);

  const handleSub = (game) => dispatch(deleteWishGame(game));

  const handleEdit = (game) => dispatch(updateWishGame(game));

  if (wishListLoader) {
    return <GamesLoader />;
  }

  return (
    <Fade>
      <section className="container mt-4">
        <h1 className="text-light text-center mb-3">Wishlist</h1>
        <hr className="bg-light" />
        <div className="row p-3">
          {wishList.length === 0 ? (
            !uid ? (
              <h2 className="text-secondary text-center">
                Please, <Link to="/auth">sign in</Link> to see your wishlist
              </h2>
            ) : (
              <h2 className="text-secondary text-center">
                There is no game on your wishlist, <Link to="/">add some</Link>!
              </h2>
            )
          ) : (
            wishList.map((wishGame) => (
              <Games
                key={wishGame.id}
                {...wishGame}
                wishGame={wishGame}
                handleSub={handleSub}
                wishDeleteLoader={wishDeleteLoader}
                btnClass="justify-content-evenly"
              >
                <>
                  <button
                    className="btn btn-success ms-2 me-2"
                    onClick={() => handleEdit(wishGame)}
                  >
                    {wishUpdateLoader ? <ButtonsLoader /> : "Played"}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleSub(wishGame)}
                  >
                    {wishDeleteLoader ? (
                      !wishGame.played ? (
                        <ButtonsLoader />
                      ) : (
                        "Delete"
                      )
                    ) : (
                      "Delete"
                    )}
                  </button>
                </>
              </Games>
            ))
          )}
        </div>
      </section>
    </Fade>
  );
};

export default WishList;
