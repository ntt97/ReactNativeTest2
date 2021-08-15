/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { ImageBackground, ScrollView, View } from 'react-native';
import styles from './styles';
import Header from '@components/Header';
import CustomProfile from './customProfile';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';

const OtherScreen = (props: any) => {
  const renderHeader = () => {
    return <Header stylesHeaderText={styles.txtInput} mainText="Thêm" noShadow={true} leftAction={() => {}}></Header>;
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
          <CustomProfile
            uri="https://luv.vn/wp-content/uploads/2021/02/anh-hot-girl-toc-ngan-5-1024x682.jpg"
            textJod="Xem trang cá nhân của bạn"
            textName="Lucaku"
          />
          <View style={{ height: 80 }}></View>
          <CustomText stylesContainer={styles.btn} style={styles.txtTitle} text="Bài viết của bạn" />
          <CustomText stylesContainer={styles.btn} style={styles.txtTitle} text="Tin đã lưu" />
          <CustomText stylesContainer={styles.btn} style={styles.txtTitle} text="Thanh toán" />
          <CustomText stylesContainer={styles.btn} style={styles.txtTitle} text="Đổi mật khẩu" />
          <CustomText stylesContainer={styles.btn} style={styles.txtTitle} text="Đăng xuất" />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default OtherScreen;
