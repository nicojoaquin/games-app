import { fetchToken } from "../../../helpers/fetch"
import { setLoadWishList, setWishListLoader } from "../../reducers/wishReducer";

export const getWishList = (uid, endpoint) => async (dispatch) => {

  const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;

  dispatch(setWishListLoader(true));
  
  try {

    const res = await fetchToken(url);
    const data = await res.data;

    const filteredWishList = data.events.filter( game => game.user._id === uid )

    dispatch(setLoadWishList(filteredWishList))
    
  } catch (err) {
    console.warn(err);
    
  } finally{
    setTimeout(() => {
      dispatch(setWishListLoader(false))
    }, 800);
  }

}