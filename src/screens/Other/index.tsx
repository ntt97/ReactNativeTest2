/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useEffect } from 'react';
import { ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Header from '@components/Header';
import CustomProfile from './customProfile';
import CustomText from '@components/CustomText';
import NavigationActionsService from 'navigation';
import {
  CHANGE_PASSWORD_SCREEN,
  LOGIN_SCREEN,
  MY_POST_SCREEN,
  MY_PROFILE_SCREEN,
  PAYMENT_SCREEN,
  POST_SAVED_SCREEN,
} from '@constants/screenKeys';

const OtherScreen = (props: any) => {
  useEffect(() => {
    NavigationActionsService.initInstance(props.componentId);
  }, []);

  const renderHeader = () => {
    return <Header mainText="Thêm" noShadow={true} leftAction={() => {}}></Header>;
  };

  const goToScreen = (screen: string) => {
    const login = false;
    if (login) {
      NavigationActionsService.push(screen);
    } else {
      NavigationActionsService.push(LOGIN_SCREEN);
    }
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <ImageBackground
        source={{
          uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-hand-drawn-illustration-beautiful-nail-art-poster-background-image_160567.jpg',
        }}
        style={{ flex: 1 }}
      >
        <ScrollView style={styles.body}>
          <TouchableOpacity onPress={() => goToScreen(MY_PROFILE_SCREEN)}>
            <CustomProfile
              uri={
                'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png' ||
                'https://luv.vn/wp-content/uploads/2021/02/anh-hot-girl-toc-ngan-5-1024x682.jpg'
              }
              textJod={' ' || 'Xem trang cá nhân của bạn'}
              textName={'Đăng nhập / Đăng ký' || 'Lucaku'}
            />
          </TouchableOpacity>
          <View style={{ height: 80 }}></View>
          <TouchableOpacity onPress={() => goToScreen(MY_POST_SCREEN)}>
            <CustomText stylesContainer={styles.btn} style={styles.txtTitle} text="Bài viết của bạn" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToScreen(POST_SAVED_SCREEN)}>
            <CustomText stylesContainer={styles.btn} style={styles.txtTitle} text="Tin đã lưu" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToScreen(PAYMENT_SCREEN)}>
            <CustomText stylesContainer={styles.btn} style={styles.txtTitle} text="Thanh toán" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToScreen(CHANGE_PASSWORD_SCREEN)}>
            <CustomText stylesContainer={styles.btn} style={styles.txtTitle} text="Đổi mật khẩu" />
          </TouchableOpacity>
          <TouchableOpacity>
            <CustomText stylesContainer={styles.btn} style={styles.txtTitle} text="Đăng xuất" />
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default OtherScreen;
