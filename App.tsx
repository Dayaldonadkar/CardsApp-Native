import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
    <ScrollView style={styles.bg}>
      <FlatCards />
      <ElevatedCards />
      <FancyCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'black',
  },
});

export default App;
