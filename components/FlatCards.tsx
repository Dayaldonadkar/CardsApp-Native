import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.size, styles.red]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.green, styles.size]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.size, styles.yellow]}>
          <Text>yellow</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  size: {
    width: 100,
    height: 100,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  red: {
    backgroundColor: '#FF0000',

    borderRadius: 5,
  },

  blue: {
    backgroundColor: '#0000FF',

    borderRadius: 5,
  },
  yellow: {
    backgroundColor: '#FFFF00',

    borderRadius: 5,
  },
  green: {
    backgroundColor: '#00FF00',

    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});

export default FlatCards;
