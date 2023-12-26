import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View>
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/p/AF1QipMUtT00A5uu3sRVeV4L7ICd71PHPC06eZJ9BQ4=s680-w680-h510',
            height: 300,
          }}
          style={styles.cardImage}
        />
        <View style={styles.elevated}>
          <Text style={styles.title}>Hawa Mahal</Text>
          <Text style={styles.place}>Pink City</Text>
          <Text style={styles.description}>
            The Hawa Mahal is a palacce in the city of Jaipur,India. Built from
            red and pink sandstone. It is in the edge of the city of palace
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 20,
    paddingBottom: 20,
  },
  headingText: {
    fontSize: 30,
    paddingTop: 30,
    paddingBottom: 10,
    color: 'white',
  },

  elevated: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 8,
    paddingVertical: 20,
  },

  cardImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  title: {
    fontSize: 22,
    paddingVertical: 3,
  },

  place: {
    fontSize: 19,
  },
  description: {
    fontSize: 15,
    paddingVertical: 3,
  },
});
