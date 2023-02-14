import { fetcnNoToken } from "../../../helpers/fetch";
import { setCheckingRegister, setLogin } from "../../reducers/authReducer";
import { addAlert } from "../../../components/assets/alert";

export const startRegister =
  (email, password, name, endpoint) => async (dispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;

    dispatch(setCheckingRegister(true));

    try {
      const { data } = await fetcnNoToken(
        url,
        {
          email,
          password,
          name,
        },
        "post"
      );

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
      dispatch(setCheckingRegister(false));
    }
  };
