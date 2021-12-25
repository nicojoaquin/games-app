import { fetchToken } from "../../../helpers/fetch"
import { setLoader } from "../../reducers/uiReducer";
import { setLoadWishList } from "../../reducers/wishReducer";

export const getWishList = (uid) => async (dispatch) => {

  dispatch(setLoader(true));
  
  try {

    const res = await fetchToken('events');
    const data = await res.data;

    const filteredWishList = data.events.filter( game => game.user._id === uid )

    dispatch(setLoadWishList(filteredWishList))
    
  } catch (err) {
    console.warn(err);
  } 

}