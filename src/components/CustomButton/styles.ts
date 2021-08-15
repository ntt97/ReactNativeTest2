import { StyleSheet } from 'react-native';
import { WIDTH_RATIO, WIDTH } from '@constants/vars';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#dc3545',
    width: WIDTH - 50 * WIDTH_RATIO,
    height: 40 * WIDTH_RATIO,
    borderRadius: 5,
    marginBottom: 10,
  },

  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },

  icon: {
    height: 20,
    width: 20,
  },
});

export default styles;
