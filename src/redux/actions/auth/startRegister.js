import { fetcnNoToken } from '../../../helpers/fetch';
import { setLogin } from '../../authReducer';
import { addAlert } from '../../../components/assets/alert';

export const startRegister = (email, password, name, endpoint) => async (dispatch) => {

  try {

    const res = await fetcnNoToken(endpoint, {
      email,
      password,
      name
    }, 'post')
    
    const data = await res.data;
    console.log(data);
    
    if(data.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(setLogin({
        uid: data.uid,
        name: data.name
      }));
    } 

    
  } catch (err) {
   addAlert(err.response.data.msg, "error")
  }

}