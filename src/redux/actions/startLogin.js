import axios from 'axios'
import { addAlert } from '../../components/assets/alert';
import { setLogin } from '../authReducer';

export const startLogin = (email, password, endpoint) => async (dispatch) => {

  try {

    const res = await axios.post(`${process.env.REACT_APP_API_URL}/${endpoint}`,
    JSON.stringify({
      email,
      password
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
    )
    const data = await res.data;
    console.log(data);
    
    if(data.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
    } 

    dispatch(setLogin({
      uid: data.uid,
      name: data.name
    }))
    
  } catch (err) {
   addAlert(err.response.data.msg, "error")
  }

}