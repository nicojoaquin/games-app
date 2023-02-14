import { fetchToken } from "../../../helpers/fetch";
import { setWishLoader } from "../../reducers/uiReducer";
import { setWishList } from "../../reducers/wishReducer";
import { addAlert } from "../../../components/assets/alert";

export const addToWishList = (game, endpoint) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;

  dispatch(setWishLoader(true));

  try {
    const res = await fetchToken(url, game, "post");
    const data = await res.data;

    dispatch(setWishList(data.game));
    addAlert("Added to wishlist!", "success");
  } catch (err) {
    console.warn(err.response?.data.msg);
  } finally {
    dispatch(setWishLoader(false));
  }
};
