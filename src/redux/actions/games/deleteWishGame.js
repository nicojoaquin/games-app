import { fetchToken } from "../../../helpers/fetch"
import { setWishDeleteLoader } from "../../reducers/uiReducer";
import { setDeleteWishList } from "../../reducers/wishReducer";


export const deleteWishGame = (game) => async (dispatch) => {

  dispatch(setWishDeleteLoader(true));

  try {
    const res = await fetchToken(`events/${game._id}`, {}, 'delete')
    const data = await res.data;
    
    if(data.ok) {
      dispatch(setDeleteWishList(game.id))  
    }
    
  } catch (err) {
    console.warn(err);
  } finally {
    dispatch(setWishDeleteLoader(false));
  }
}