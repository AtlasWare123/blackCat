import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/reading/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/readingList/forest.jpg')}
        score={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/readingList/beach.jpg')}
        score={7}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/readingList/mountain.jpg')}
        score={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
