import { fetchToken } from "../../../helpers/fetch"
import { setWishUpdateLoader } from "../../reducers/uiReducer";
import { setUpdateWishList } from "../../reducers/wishReducer";


export const updateWishGame = (game) => async (dispatch) => {

  dispatch(setWishUpdateLoader(true));

  try {
    const update = {played: true}
    const res = await fetchToken(`events/${game._id}`, update , 'put')
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