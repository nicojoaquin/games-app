import { setLogout } from "../../authReducer";

export const startLogout = () => (dispatch) => {

  localStorage.clear();
  dispatch(setLogout());
  window.location.reload();
  
}