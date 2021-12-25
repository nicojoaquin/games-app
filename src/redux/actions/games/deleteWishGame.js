import { fetchToken } from "../../../helpers/fetch"
import { setWishDeleteLoader } from "../../reducers/uiReducer";
import { setDeleteWishList } from "../../reducers/wishReducer";


export const deleteWishGame = (game) => async (dispatch) => {

  const url = `${process.env.REACT_APP_API_URL}/events/${game._id}`;

  dispatch(setWishDeleteLoader(true));

  try {
    const res = await fetchToken(url, {}, 'delete')
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