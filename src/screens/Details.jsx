import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Image, View, StyleSheet} from 'react-native';

export const Details = ({route, navigation}) => {
  const [imgUrl, setImgUrl] = useState('');
  const id = route.params.itemId;
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/${id}?client_id=SR2TVRoOoQ732wJYZGDs0AsNRyrAjWRAC2yCsyVUz6U`,
      )
      .then(res => {
        setImgUrl(res.data.urls.full);
      });
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {imgUrl && <Image style={styles.image} source={{uri: imgUrl}} />}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
