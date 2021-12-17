import { store } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';
import Game from './components/Game';
import WishList from './components/WishList';
import Login from './components/auth/Login';
import "./App.css"


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/wishlist" element={<WishList/>} />
            <Route path="/game/:gameId" element={<Game/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>  
        </ Router>  
      </PersistGate>
    </Provider>
  );
}

export default App;
