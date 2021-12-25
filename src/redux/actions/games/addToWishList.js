import { fetchToken } from "../../../helpers/fetch"
import { setWishLoader } from "../../reducers/uiReducer";
import { setWishList } from "../../reducers/wishReducer";
import { addAlert } from "../../../components/assets/alert";

export const addToWishList = (game) => async (dispatch) => {

  dispatch(setWishLoader(true));

  try {
    
    const res = await fetchToken('events', game, 'post');
    const data = await res.data;

    if(data.ok) {  
      dispatch(setWishList(game))
      addAlert("Added to wishlist!", "success");
    };

  } catch (err) {
    console.warn(err.response.data.msg);
  } finally {
    dispatch(setWishLoader(false));
  }
};