import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { PrivateRoute } from './PrivateRoute';
import Home from '../components/Home';
import Header from '../components/Header';
import Game from '../components/Game';
import WishList from '../components/WishList';
import AuthContainer from '../components/auth/AuthContainer';
import { startChecking } from '../redux/actions/auth/startChecking';
import { getWishList } from '../redux/actions/games/getWishList';

const AppRouter = () => {

  const dispatch = useDispatch();
  const { uid } = useSelector( state => state.auth )
  
  useEffect(() => {
    
    dispatch(startChecking('auth/renew'))   
    dispatch(getWishList(uid)); 

  }, [dispatch, uid])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/game/:gameId" element={<Game/>} />
        <Route path="/auth" element={
          <PrivateRoute>
            <AuthContainer />
          </PrivateRoute>
        } />
      </Routes>  
    </ Router> 
  )
}

export default AppRouter
