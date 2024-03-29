import { fetcnNoToken } from "../../../helpers/fetch";
import { setCheckingLogin, setLogin } from "../../reducers/authReducer";
import { addAlert } from "../../../components/assets/alert";

export const startLogin = (email, password, endpoint) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;

  dispatch(setCheckingLogin(true));

  try {
    const res = await fetcnNoToken(
      url,
      {
        email,
        password,
      },
      "post"
    );

    const data = await res.data;

    localStorage.setItem("token", data.token);
    localStorage.setItem("token-init-date", new Date().getTime());

    dispatch(
      setLogin({
        uid: data.uid,
        name: data.name,
      })
    );
  } catch (err) {
    addAlert(
      err.response?.data?.errors
        ? Object.values(err.response.data.errors)[0].msg
        : err.response?.data?.msg,
      "error"
    );
  } finally {
    dispatch(setCheckingLogin(false));
  }
};
