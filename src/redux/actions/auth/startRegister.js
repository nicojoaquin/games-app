import { fetcnNoToken } from '../../../helpers/fetch';
import {  setCheckingRegister, setLogin } from '../../reducers/authReducer';
import { addAlert } from '../../../components/assets/alert';

export const startRegister = (email, password, name, endpoint) => async (dispatch) => {

  dispatch(setCheckingRegister(true));

  try {

    const res = await fetcnNoToken(endpoint, {
      email,
      password,
      name
    }, 'post')
    
    const data = await res.data;

    if(data.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      window.location.reload();

      dispatch(setLogin({
        uid: data.uid,
        name: data.name
      }));
    } 

    
  } catch (err) {
   addAlert(err.response.data.msg, "error")
  } finally {
    dispatch(setCheckingRegister(true));
  }

}