import React from 'react';
import styles from './styles';
import CustomText from '../CustomText';
import translate from '@localize/index';
import { TextStyle } from 'react-native';

interface Props {
  style?: TextStyle;
  text?: string;
}

const EmptyData = (props: Props) => {
  const { style, text = 'Trống! Hiện tại chưa có bài viết nào cho mục này.' } = props;
  return <CustomText style={[styles.emptyView, style]} text={text} />;
};

export default React.memo(EmptyData);
