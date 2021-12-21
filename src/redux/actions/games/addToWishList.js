import { addAlert } from "../../../components/assets/alert";
import { fetchToken } from "../../../helpers/fetch"
import { setWishList } from "../../wishReducer";

export const addToWishList = (game) => async (dispatch, getState) => {

  const {uid, name} = getState().auth;

  try {
    
    const res = await fetchToken('events', game, 'post');
    const data = await res.data;

    if(data.ok) {
      game.user = {
        uid: uid,
        name: name
      }   
      dispatch(setWishList(game))
      addAlert("Added to wishlist!", "success");
    };

  } catch (err) {
    addAlert(err.response.data.msg, "error");
  }
};