import { fetcnNoToken } from '../../../helpers/fetch';
import { setGame, setGamesList } from "../../reducers/gamesReducer";
import { setLoader } from "../../reducers/uiReducer";

const options = {
  headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': 'dcb19afa2emshd5e6d499778292dp1d7971jsn69c10547df1f'
  }
}

export const getGames = (api) => async (dispatch) => {
  
  dispatch(setLoader(true))
  
  try{

    const res = await fetcnNoToken(api, {}, 'get', options);
    const data = await res.data;
    dispatch(setGamesList(data))  

  }
  catch (err) {
    console.warn(err);
  }
  finally {
    
    setTimeout(() => {
      dispatch(setLoader(false));
    }, 400);
  }

}

export const getGame = (api) => async (dispatch) => {

  dispatch(setLoader(true))

  try {

    const res = await fetcnNoToken(api, {}, 'get', options);
    const data = await res.data;

    dispatch(setGame(data))

  } catch (err) {
    console.log(err);
  } finally{
    setTimeout(() => {
      dispatch(setLoader(false));
    }, 800);
  }

}