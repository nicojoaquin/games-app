import { fetchToken } from "../../../helpers/fetch"
import { setLoader } from "../../uiReducer";
import { setLoadWishList } from "../../wishReducer";

export const getWishList = () => async (dispatch, getState) => {
  
  const {uid} = getState().auth;

  dispatch(setLoader(true));
  try {
    const res = await fetchToken('events');
    const data = await res.data;
    const filteredGames = data.events.filter( game => game.user._id === uid);
    dispatch(setLoadWishList(filteredGames))
  } catch (err) {
    console.warn(err.response);
  } finally {
    dispatch(setLoader(false));
  }
}