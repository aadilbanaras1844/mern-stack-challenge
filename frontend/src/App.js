import React from 'react';
import HomeComponent from './pages/home';
import './assets/theme/index.scss';
import { Provider } from 'react-redux';
import configureStore from './config/configstore';
import { PersistGate } from 'redux-persist/integration/react'

const confStore = configureStore();
function App() {
  return (
    <div className="App">
      {/* <Provider store={store.}>
        <HomeComponent />
      </Provider> */}

      <Provider store={confStore.store}>
        <PersistGate loading={null} persistor={confStore.persistor}>
          <HomeComponent />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
