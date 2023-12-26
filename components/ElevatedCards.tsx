import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal>
        <View style={[styles.card]}>
          <Text style={styles.text}>Red</Text>
        </View>

        <View style={[styles.card]}>
          <Text style={styles.text}>Red</Text>
        </View>

        <View style={[styles.card]}>
          <Text style={styles.text}>Red</Text>
        </View>

        <View style={[styles.card]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card]}>
          <Text style={styles.text}>Red</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  card: {
    backgroundColor: '#FF0000',
    height: 100,
    width: 100,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },

  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
