import { fetchToken } from "../../../helpers/fetch"
import { setWishUpdateLoader } from "../../reducers/uiReducer";
import { setUpdateWishList } from "../../reducers/wishReducer";


export const updateWishGame = (game) => async (dispatch) => {

  const url = `${process.env.REACT_APP_API_URL}/events/${game._id}`;

  dispatch(setWishUpdateLoader(true));

  try {
    const update = {played: true}
    const res = await fetchToken(url, update , 'put')
    const data = await res.data;
    
    if(data.ok) {
      dispatch(setUpdateWishList(game))  
    }
    
  } catch (err) {
    console.warn(err);
    
  } finally {
    dispatch(setWishUpdateLoader(false));
  }
}