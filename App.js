import 'react-native-gesture-handler';
import React from 'react';
// import redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
// import React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigation/AppNavigator';
// For performance optimization for screen
import { enableScreens } from 'react-native-screens';
import parkingReducer from './src/store/reducer/parking';

enableScreens();

const rootReducer = combineReducers({
  parking: parkingReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = props => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;