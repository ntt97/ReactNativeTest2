import { colors, FONT_SIZE_DEFAULT, WIDTH } from '@constants/vars';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inputHeader: {
    backgroundColor: '#fff',
    width: WIDTH - 40,
    height: 30,
    marginBottom: 30,
    marginTop: -15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  txtInput: {
    color: colors.DARK_GREY,
    fontSize: FONT_SIZE_DEFAULT,
    marginLeft: 10,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 25,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#666',
  },
  body: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  containerItem: {
    flexDirection: 'row',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 100,
  },
  rightItem: {
    height: 120,
    width: WIDTH - 140,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  itemTopRight: {
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#10afe7',
  },
  itemCenterRight: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#777',
    lineHeight: 23,
  },
  itemBottomRight: {
    alignSelf: 'flex-start',
    color: '#999',
    fontStyle: 'italic',
  },
});
