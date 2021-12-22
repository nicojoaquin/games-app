import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteWishGame } from "../redux/actions/games/deleteWishGame";
import { getWishList } from "../redux/actions/games/getWishList";
import WishListGame from "./WishListGame";

const WishList = () => {
  const { wishList } = useSelector((state) => state.wishList);
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishList(uid));
  }, [dispatch, uid]);

  const handleSub = (game) => dispatch(deleteWishGame(game));

  return (
    <section className="container mt-4">
      <h1 className="text-light text-center mb-3">Wish List</h1>
      <hr className="bg-light" />
      <div className="row p-3">
        {wishList.length === 0 ? (
          !uid ? (
            <h2 className="text-secondary text-center">
              Please, <Link to="/auth">sign in</Link> to see your wishlist
            </h2>
          ) : (
            <h2 className="text-secondary text-center">
              There is no game on your wishlist
            </h2>
          )
        ) : (
          wishList.map((wishGame) => (
            <WishListGame
              key={wishGame.id}
              game={wishGame}
              {...wishGame}
              handleSub={handleSub}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default WishList;
