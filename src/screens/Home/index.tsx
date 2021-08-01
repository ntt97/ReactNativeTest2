/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import CustomText from '@components/CustomText';
import { View } from 'react-native';
import styles from './styles';

const HomeScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <CustomText>HomeScreen</CustomText>
    </View>
  );
};

export default HomeScreen;
