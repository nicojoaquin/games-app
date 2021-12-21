import { fetchToken } from '../../../helpers/fetch';
import { setChecking, setLogin } from '../../authReducer';

export const startChecking = (endpoint) => async (dispatch) => {

  try {

    const res = await fetchToken(endpoint)
    
    const data = await res.data;
    
    if(data.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(setLogin({
        uid: data.uid,
        name: data.name
      }));
    } 

    
  } catch (err) {
   dispatch(setChecking())
  }

}