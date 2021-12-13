import { setGame, setGamesList, setLoader } from "./gamesReducer";
import axios from 'axios'

export const getGames = (api) => async (dispatch) => {
  
  try{
    dispatch(setLoader(true))
    const res = await axios.get(api);
    const data = await res.data;

    dispatch(setGamesList(data))
    
  }
  catch (err) {
    console.warn(err);
  }
  finally {
    dispatch(setLoader(false))
  }
}

export const getGame = (api) => async (dispatch) => {
  
  try {
    dispatch(setLoader(true))
    const res = await axios.get(api)
    const data = await res.data
    dispatch(setGame(data))
  } catch (err) {
    console.log(err);
  }
  finally {
    dispatch(setLoader(false))
  }

}