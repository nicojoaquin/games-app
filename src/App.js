import { store } from './store/store'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter';
import "./App.css"


function App() {
  return (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
  );
}

export default App;
