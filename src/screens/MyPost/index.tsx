/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { View } from 'react-native';
import Header from '@components/Header';
import styles from './styles';
import NavigationActionsService from 'navigation';
import EmptyData from '@components/EmptyData';

const MyPostScreen = (props: any) => {
  const renderHeader = () => {
    return (
      <Header
        iconVector={'arrow-left'}
        mainText="Bài viết của bạn"
        noShadow={true}
        leftAction={() => {
          NavigationActionsService.pop();
        }}
      ></Header>
    );
  };
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={{ flex: 1 }}>
        <EmptyData />
      </View>
    </View>
  );
};

export default MyPostScreen;
