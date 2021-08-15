import { WIDTH, colors, FONT_SIZE_DEFAULT, WIDTH_RATIO } from './../../constants/vars';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT_GREY,
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
  wrapperSwiper: {
    height: 210 * WIDTH_RATIO,
  },
  slide1: {
    height: 200 * WIDTH_RATIO,
  },
  slide2: {
    height: 200 * WIDTH_RATIO,
  },
  imageSwiper: {
    height: 200 * WIDTH_RATIO,
  },
  containerCategory: {
    height: (WIDTH / 3) * 2 + 40,
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  rowSmallBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemMenu: {
    width: WIDTH / 3 - 5 * 4,
    height: WIDTH / 3 - 5 * 4,
  },
  imageItem: {
    width: WIDTH / 3 - 5 * 4,
    height: WIDTH / 3 - 5 * 4,
    borderRadius: 20,
  },
  txtItem: {
    color: colors.BLACK,
    marginTop: 3,
  },
  title: {
    fontSize: FONT_SIZE_DEFAULT + 2,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },

  boxContainer: {
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: colors.WHITE,
  },
  containerListFeatured: {
    height: 500,
    borderWidth: 1,
    margin: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  imageFeatured: {
    height: 400,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
