import { store } from './store/store'
import { Provider } from 'react-redux'
import Home from './components/Home';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import "./App.css"
import Header from './components/Header';
import WishList from './components/WishList';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/wishlist" element={<WishList/>} />
        </Routes>  
      </ Router>  
    </Provider>
  );
}

export default App;
