import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';


const usrInput = () => {
    return (
      <View style = {styles.backgroundStyle}>
          <Feather name="search" style={styles.iconStyle} />
          <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Search"
        />
      </View>
    );
  };


  const styles = StyleSheet.create({
    backgroundStyle: {
      marginTop: 10,
      backgroundColor: '#F0EEEE',
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      flexDirection: 'row'
    },
    inputStyle: {
      flex: 1,
      fontSize: 18
    },
    iconStyle: {
      fontSize: 35,
      alignSelf: 'center',
      marginHorizontal: 15
    }
  });

  export default usrInput