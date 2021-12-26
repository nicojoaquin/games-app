import { fetcnNoToken } from '../../../helpers/fetch';
import {  setCheckingRegister, setLogin } from '../../reducers/authReducer';
import { addAlert } from '../../../components/assets/alert';

export const startRegister = (email, password, name, endpoint) => async (dispatch) => {

  const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;

  dispatch(setCheckingRegister(true));

  try {

    const res = await fetcnNoToken(url, {
      email,
      password,
      name
    }, 'post')
    
    const data = await res.data;

    if(data.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
  
      dispatch(setLogin({
        uid: data.uid,
        name: data.name
      }));
      
      window.location.reload();
    } 

    
  } catch (err) {
      addAlert(err.response.data.msg, "error")
  } finally {
      dispatch(setCheckingRegister(true));
  }

}