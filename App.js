import React from 'react';
import {
  View ,
  Text
} from 'react-native';
import { MovieContextProvider } from './movieContext';
import BottomStackNavigator from './pages/bottomStackNavigator';


const App = () => {
  return (
    <MovieContextProvider>
      <BottomStackNavigator/>
    </MovieContextProvider>
  );
};


export default App;