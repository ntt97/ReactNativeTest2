/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import CustomText from '@components/CustomText';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import Header from '@components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, WIDTH_RATIO } from '@constants/vars';
import FastImage from 'react-native-fast-image';
import CustomInput from '@components/CustomInput';
import CustomButton from '@components/CustomButton';

const ContactScreen = (props: any) => {
  const renderHeader = () => {
    return (
      <Header noShadow={true} leftAction={() => {}}>
        <View style={styles.inputHeader}>
          <Icon name={'search'} size={16 * WIDTH_RATIO} color={colors.DARK_GREY} />
          <CustomText style={styles.txtInput} text="Tìm rao vặt ... " />
        </View>
      </Header>
    );
  };
  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.body}>
        <FastImage
          style={styles.image}
          source={{
            uri: 'https://sackim.com/wp-content/uploads/2018/07/voi-nhung-cong-cu-rat-huu-ich-ban-da-co-the-in-truc-tiep-ngay-tren-google-map.jpg',
          }}
        />
        <View style={styles.formContainer}>
          <CustomText
            stylesContainer={styles.containerTitle}
            style={styles.title}
            text="Quảng Cáo - Rao Vặt - Chuyên Nghiệp - Uy Tín"
          ></CustomText>
          <View style={styles.boxRow}>
            <Icon name={'home'} size={16 * WIDTH_RATIO} color={colors.DARK_GREY} />
            <CustomText style={styles.txtDefault} text="Trụ sở chính: 5600 Spring Mountain Road Las Vegas NV 89146" />
          </View>

          <View style={styles.box}>
            <View style={styles.row}>
              <Icon name={'phone'} size={16 * WIDTH_RATIO} color={colors.DARK_GREY} />
              <CustomText style={styles.txtDefault} text="Hotline: 1.702.389.5729  " />
            </View>
            <View style={styles.row}>
              <Icon name={'envelope'} size={16 * WIDTH_RATIO} color={colors.DARK_GREY} />
              <CustomText style={styles.txtDefault} text="Email: infovietadonline@gmail.com " />
            </View>
            <View style={styles.row}>
              <Icon name={'globe'} size={16 * WIDTH_RATIO} color={colors.DARK_GREY} />
              <CustomText style={styles.txtDefault} text="Website: www.vietadonline.com " />
            </View>
          </View>
          <CustomInput
            onChangeText={() => {}}
            autoCapitalize="none"
            placeholder={'Họ và tên(*)'}
            placeholderColor="#555"
            returnKeyType="next"
            keyboardType="email-address"
            customInputStyle={styles.inputContainer}
            inputStyle={styles.inputStyle}
            value={''}
          />
          <CustomInput
            onChangeText={() => {}}
            autoCapitalize="none"
            placeholder={'Email(*)'}
            placeholderColor="#555"
            returnKeyType="next"
            keyboardType="email-address"
            customInputStyle={styles.inputContainer}
            inputStyle={styles.inputStyle}
            value={''}
          />
          <CustomInput
            onChangeText={() => {}}
            autoCapitalize="none"
            placeholder={'Số điện thoại(*)'}
            placeholderColor="#555"
            returnKeyType="next"
            keyboardType="email-address"
            customInputStyle={styles.inputContainer}
            inputStyle={styles.inputStyle}
            value={''}
          />
          <CustomInput
            onChangeText={() => {}}
            autoCapitalize="none"
            placeholder={'Nội dung(*)'}
            placeholderColor="#555"
            returnKeyType="next"
            keyboardType="email-address"
            customInputStyle={[styles.inputContainer, { height: 70 }]}
            inputStyle={styles.inputStyle}
            value={''}
            multiline={true}
          />
          <CustomButton style={{ backgroundColor: '#dc3545' }} text=" Gửi Tin" />
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactScreen;
