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

const NewPageScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <CustomText>NewPageScreen</CustomText>
    </View>
  );
};

export default NewPageScreen;
