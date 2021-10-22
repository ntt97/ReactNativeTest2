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
import Swiper from 'react-native-swiper';
import { colors, WIDTH_RATIO } from '@constants/vars';
import FastImage from 'react-native-fast-image';

const dataRow1 = [
  {
    uri: 'http://news.tapchivietkieu.info/wp-content/uploads/2020/05/an-toan-nganh-nail.jpg',
    title: 'Tìm thợ nail',
  },
  {
    uri: 'https://vietadonline.com/images/page/page-1608776401-thiet-ke-tiem-nail-1024x683.jpg',
    title: 'Mua bán tiệm nail',
  },
  {
    uri: 'https://kientrucsuvietnam.vn/wp-content/uploads/2021/04/mau-nha-dep-2021-8.jpg',
    title: 'Nhà bán',
  },
];

const dataRow2 = [
  {
    uri: 'https://www.chotot.com/kinhnghiem/wp-content/uploads/2017/07/kinh-nghiem-quan-ly-nha-cho-thue-hinh-anh1.jpg',
    title: 'Nhà cho thuê',
  },
  {
    uri: 'https://sohanews.sohacdn.com/thumb_w/660/160588918557773824/2021/1/17/photo1610851281103-1610851281475967766599.jpg',
    title: 'Xe bán',
  },
  {
    uri: 'http://daotaochungchi.vn/uploads/news/2019_11/adfgtjio.jpg',
    title: 'Rao vặt khác',
  },
];

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

const renderSwiper = () => {
  return (
    <View style={styles.wrapperSwiper}>
      <Swiper style={styles.wrapperSwiper} autoplay>
        <View style={styles.slide1}>
          <FastImage
            style={styles.imageSwiper}
            source={{
              uri: 'https://vietadonline.com/img/uploads/slider/slider-1611688223-slider-1608277212-Banner-Nail%20copy.jpeg',
            }}
          />
        </View>
        <View style={styles.slide1}>
          <FastImage
            style={styles.imageSwiper}
            source={{
              uri: 'https://vietadonline.com/img/uploads/slider/slider-1608277202-Banner-Nail2.jpg',
            }}
          />
        </View>
      </Swiper>
    </View>
  );
};

const renderCategoryRow = (items: any) => {
  return (
    <View style={styles.rowSmallBox}>
      {items.map((item: any) => (
        <View key={item.title} style={styles.itemMenu}>
          <FastImage
            style={styles.imageItem}
            source={{
              uri: item.uri,
            }}
          />
          <CustomText style={styles.txtItem} text={item.title} />
        </View>
      ))}
    </View>
  );
};

const renderCategory = () => {
  return (
    <View style={styles.boxContainer}>
      <CustomText style={styles.title} text={'Khám phá danh mục'} />
      <View style={styles.containerCategory}>
        {renderCategoryRow(dataRow1)}
        {renderCategoryRow(dataRow2)}
      </View>
    </View>
  );
};

const renderListFeatured = () => {
  return (
    <View style={styles.boxContainer}>
      <CustomText style={styles.title} text={'Rao vặt nổi bật'} />
      <View style={styles.containerListFeatured}>
        <FastImage
          style={styles.imageFeatured}
          source={{
            uri: 'https://vietadonline.com/images/dangtin/300x300/UPdQ37_qc-real-estate.jpg',
          }}
        />
      </View>
      <View style={styles.containerListFeatured}>
        <FastImage
          style={styles.imageFeatured}
          source={{
            uri: 'https://vietadonline.com/images/dangtin/300x300/Y6xTrI_anh3.png',
          }}
        />
      </View>
    </View>
  );
};

const HomeScreen = (props: any) => {
  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView>
        {renderSwiper()}
        <View style={{ height: 10 }}></View>
        {renderCategory()}
        <View style={{ height: 10 }}></View>
        {renderListFeatured()}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
