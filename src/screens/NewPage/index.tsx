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
import { colors, WIDTH_RATIO } from '@constants/vars';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image';

const NewPageScreen = (props: any) => {
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
  const renderItem = () => {
    return (
      <View style={styles.containerItem}>
        <FastImage
          style={styles.image}
          source={{
            uri: 'https://vietadonline.com/images/dangtin/300x300/UPdQ37_qc-real-estate.jpg',
          }}
        />
        <View style={styles.rightItem}>
          <CustomText style={styles.itemTopRight} text="Thống kê tiệm “Nail” ở Mỹ" />
          <CustomText
            numberOfLines={3}
            style={styles.itemCenterRight}
            text="Đế chế nail Việt, tên gọi mà báo giới Mỹ thường nhắc đến khi đề cập đến nghề nail trong cộng đồng người Việt ở Mỹ. Tuy nhiên, những đạo luật gầ.."
          />
          <CustomText style={styles.itemBottomRight} text="(Khoảng 4 tháng trước)" />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.body}>
        <CustomText style={styles.title} text="Chuyên mục: Tin tức ngành nail" />
        {renderItem()}
        {renderItem()}
        {renderItem()}
        {renderItem()}
        {renderItem()}
        {renderItem()}
        {renderItem()}
      </ScrollView>
    </View>
  );
};

export default NewPageScreen;
