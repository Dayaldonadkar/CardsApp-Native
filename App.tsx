import {SafeAreaView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';

const App = () => {
  return (
    <SafeAreaView>
      <FlatCards />
      <ElevatedCards />
    </SafeAreaView>
  );
};

export default App;
