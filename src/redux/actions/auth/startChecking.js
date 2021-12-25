import { fetchToken } from '../../../helpers/fetch';
import { setLogin } from '../../reducers/authReducer';

export const startChecking = (endpoint) => async (dispatch) => {

  const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;

  try {

    const res = await fetchToken(url)
    
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
   console.warn(err);
  } 

}