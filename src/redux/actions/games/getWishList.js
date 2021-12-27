import { fetchToken } from "../../../helpers/fetch"
import { setLoadWishList, setWishListLoader } from "../../reducers/wishReducer";

export const getWishList = (endpoint) => async (dispatch) => {

  const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;

  dispatch(setWishListLoader(true));
  
  try {

    const res = await fetchToken(url);
    const data = await res.data;

    dispatch(setLoadWishList(data.actualEvents))
    
  } catch (err) {
    console.clear();
    
  } finally{
    setTimeout(() => {
      dispatch(setWishListLoader(false))
    }, 800);
  }

}