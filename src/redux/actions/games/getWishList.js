import { fetchToken } from "../../../helpers/fetch"
import { setLoader } from "../../reducers/uiReducer";
import { setLoadWishList } from "../../reducers/wishReducer";

export const getWishList = (uid, endpoint) => async (dispatch) => {

  const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;

  dispatch(setLoader(true));
  
  try {

    const res = await fetchToken(url);
    const data = await res.data;

    const filteredWishList = data.events.filter( game => game.user._id === uid )

    dispatch(setLoadWishList(filteredWishList))
    
  } catch (err) {
    console.warn(err);
  } 

}