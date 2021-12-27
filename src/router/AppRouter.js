import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { PrivateRoute } from './PrivateRoute';
import Header from '../components/layout/Header';
import Home from '../components/layout/Home';
import Game from '../components/games/Game';
import WishList from '../components/wishlist/WishList';
import AuthContainer from '../components/auth/AuthContainer';
import { startChecking } from '../redux/actions/auth/startChecking';
import { getWishList } from '../redux/actions/games/getWishList';

const AppRouter = () => {

  const dispatch = useDispatch();
  const { uid } = useSelector( state => state.auth )
  
  useEffect(() => {
    
    dispatch(startChecking('auth/renew'))   
    dispatch(getWishList('events')); 

  }, [dispatch, uid])


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game/:gameId" element={<Game/>} />
        <Route path="/wishlist" element={<WishList/>} />
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
