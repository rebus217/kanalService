import React, { useState, useEffect } from "react";
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/storeConfig';
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigator/navigator';

export default function App() {



  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


