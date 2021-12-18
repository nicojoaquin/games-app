import { store } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import AppRouter from './router/AppRouter';
import "./App.css"


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <AppRouter /> 
      </PersistGate>
    </Provider>
  );
}

export default App;
