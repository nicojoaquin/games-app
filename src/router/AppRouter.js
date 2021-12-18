import { useEffect } from 'react';
import { useDispatch } from "react-redux";
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

const AppRouter = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(startChecking('auth/renew'))
    
  }, [dispatch])

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
