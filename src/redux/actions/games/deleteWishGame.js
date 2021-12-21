import { fetchToken } from "../../../helpers/fetch"
import { setDeleteWishList } from "../../wishReducer";


export const deleteWishGame = (game) => async (dispatch) => {

  try {
    const res = await fetchToken(`events/${game._id}`, {}, 'delete')
    const data = await res.data;
    
    if(data.ok) {
      dispatch(setDeleteWishList(game.id))  
    }
    
  } catch (err) {
    
  }
}