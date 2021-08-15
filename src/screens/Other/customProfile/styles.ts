import { colors } from '@constants/vars';
import scale from '@utils/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profile: {
    height: scale.scaleHeight(60),
    width: '100%',
    flexDirection: 'row',
  },
  leftProfile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightProfile: {
    flex: 4,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  avatar: {
    height: scale.scaleHeight(60),
    width: scale.scaleHeight(60),
    borderRadius: scale.scaleHeight(60) / 2,
    borderWidth: 1,
    borderColor: colors.DARK_GREY,
  },
  txtName: {
    fontSize: scale.scaleFont(20),
    fontWeight: 'bold',
  },
  txtJod: {
    fontSize: scale.scaleFont(16),
    color: '#555',
  },
});

export default styles;
