import { addAlert } from "../../../components/assets/alert";
import { fetchToken } from "../../../helpers/fetch"
import { setWishList } from "../../wishReducer";

export const addToWishList = (game) => async (dispatch) => {

  try {
    
    const res = await fetchToken('events', game, 'post');
    const data = await res.data;

    if(data.ok) {  
      dispatch(setWishList(game))
      addAlert("Added to wishlist!", "success");
    };

  } catch (err) {
    console.warn(err.response.data.msg);
  }
};