import { Provider } from 'react-redux';
import { store, persistor } from './src/store/storeConfig';
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator from './src/navigator/navigator';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          {/* <Stack.Navigator>
            <Stack.Screen
              name='HomeAnother'
              component={HomeScreen}
              options={{ title: 'Home Another' }}
            />
            <Stack.Screen
              name='Home'
              component={AppContainer}
              options={{ title: 'Home' }}
            />
            <Stack.Screen name='Login' component={LoginScreen} />
          </Stack.Navigator> */}
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


