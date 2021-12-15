import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteWishList } from "../redux/wishReducer";
import WishListGame from "./WishListGame";

const WishList = () => {
  const { list } = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  const handleSub = (id) => dispatch(setDeleteWishList(id));

  return (
    <section className="container mt-4">
      <h1 className="text-light text-center mb-3">Wish List</h1>
      <hr className="bg-light" />
      <div className="row p-3">
        {list.length === 0 ? (
          <h2 className="text-secondary text-center">
            There is no game on your wishlist
          </h2>
        ) : (
          list.map((wishGame) => (
            <WishListGame
              key={wishGame.id}
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
