import { fetchToken } from "../../../helpers/fetch"
import { setUpdateWishList } from "../../wishReducer";


export const updateWishGame = (game) => async (dispatch) => {

  try {
    const update = {played: true}
    const res = await fetchToken(`events/${game._id}`, update , 'put')
    const data = await res.data;
    
    if(data.ok) {
      dispatch(setUpdateWishList(game))  
    }
    
  } catch (err) {
    console.warn(err);
  }
}