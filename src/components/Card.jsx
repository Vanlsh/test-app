import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const Card = ({id, url, name, author, openPhoto}) => {
  const onPress = () => {
    openPhoto(id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={{uri: url}} />
      </TouchableOpacity>
      <Text style={styles.pictureName}>
        {'Photo: ' + (name ? name : 'Without name')}
      </Text>
      <Text style={styles.pictureAuthor}>{`Author name: ${author}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  container: {
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 25,
    color: 'dark',
  },
});
