import { setGamesList } from "./gamesReducer";
import axios from 'axios'

export const getGames = () => async (dispatch) => {
  
  try{
    const res = await axios.get("https://api.rawg.io/api/games?key=838c6a84d03b4761bb2d7348c41bc18f");
    const {results} = await res.data
    dispatch(setGamesList(results))
  }
  catch (err) {
    console.log(err);
  }

}