import { CustomAvatar } from '@components/CustomAvatar';
import CustomText from '@components/CustomText';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
type Props = {
  textName?: string;
  textJod?: string;
  uri?: string;
};
const CustomProfile = ({ textName, textJod, uri = '.' }: Props) => (
  <View style={styles.profile}>
    <View style={styles.leftProfile}>
      <CustomAvatar style={styles.avatar} uri={uri} />
    </View>
    <View style={styles.rightProfile}>
      <CustomText style={styles.txtName} text={textName ?? ''} />
      <CustomText style={styles.txtJod} text={textJod ?? ''} />
    </View>
  </View>
);

export default CustomProfile;
