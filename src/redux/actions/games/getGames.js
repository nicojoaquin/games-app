import axios from 'axios'
import { setGame, setGamesList } from "../../reducers/gamesReducer";
import { setLoader } from "../../reducers/uiReducer";

const options = {
  headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': 'dcb19afa2emshd5e6d499778292dp1d7971jsn69c10547df1f'
  }
}

export const getGames = (api) => async (dispatch) => {
    
  try{

    dispatch(setLoader(true))

    const res = await axios.get(api, options);
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

    const res = await axios.get(api, options)
    const data = await res.data

    dispatch(setGame(data))

  } catch (err) {
    console.log(err);
  }
  finally {
    dispatch(setLoader(false))
  }

}