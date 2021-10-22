import { reduxProvider } from '@store/configureStore';
import { Navigation } from 'react-native-navigation';
import LoadingScreen from './src/components/Loading';
import {
  APP_SCREEN,
  HOME_SCREEN,
  LOADING_SCREEN,
  LOGIN_SCREEN,
  NEW_PAGE_SCREEN,
  NEW_POST_SCREEN,
  CONTACT_SCREEN,
  OTHER_SCREEN,
  MY_PROFILE_SCREEN,
  POST_SAVED_SCREEN,
  PAYMENT_SCREEN,
  MY_POST_SCREEN,
  CHANGE_PASSWORD_SCREEN,
  SIGN_UP_SCREEN,
} from '@constants/screenKeys';
import AppScreen from './src/App';
import LoginScreen from './src/screens/auth/Login';
import HomeScreen from './src/screens/Home';
import NewPageScreen from './src/screens/NewPage';
import NewPostScreen from './src/screens/NewPost';
import ContactScreen from './src/screens/Contact';
import OtherScreen from './src/screens/Other';
import MyProfileScreen from './src/screens/MyProfile';
import PostSavedScreen from './src/screens/PostSaved';
import MyPostScreen from './src/screens/MyPost';
import PaymentScreen from './src/screens/Payment';
import ChangePasswordScreen from './src/screens/ChangePassword';
import SignUpScreen from './src/screens/auth/SignUp';

Navigation.registerComponent(LOADING_SCREEN, () => LoadingScreen);

Navigation.registerComponent(
  APP_SCREEN,
  () => reduxProvider(AppScreen),
  () => AppScreen,
);

Navigation.registerComponent(
  LOGIN_SCREEN,
  () => reduxProvider(LoginScreen),
  () => LoginScreen,
);

Navigation.registerComponent(
  HOME_SCREEN,
  () => reduxProvider(HomeScreen),
  () => HomeScreen,
);
Navigation.registerComponent(
  NEW_PAGE_SCREEN,
  () => reduxProvider(NewPageScreen),
  () => NewPageScreen,
);

Navigation.registerComponent(
  NEW_POST_SCREEN,
  () => reduxProvider(NewPostScreen),
  () => NewPostScreen,
);

Navigation.registerComponent(
  CONTACT_SCREEN,
  () => reduxProvider(ContactScreen),
  () => ContactScreen,
);

Navigation.registerComponent(
  OTHER_SCREEN,
  () => reduxProvider(OtherScreen),
  () => OtherScreen,
);
Navigation.registerComponent(
  MY_PROFILE_SCREEN,
  () => reduxProvider(MyProfileScreen),
  () => MyProfileScreen,
);
Navigation.registerComponent(
  POST_SAVED_SCREEN,
  () => reduxProvider(PostSavedScreen),
  () => PostSavedScreen,
);

Navigation.registerComponent(
  PAYMENT_SCREEN,
  () => reduxProvider(PaymentScreen),
  () => PaymentScreen,
);
Navigation.registerComponent(
  MY_POST_SCREEN,
  () => reduxProvider(MyPostScreen),
  () => MyPostScreen,
);
Navigation.registerComponent(
  CHANGE_PASSWORD_SCREEN,
  () => reduxProvider(ChangePasswordScreen),
  () => ChangePasswordScreen,
);
Navigation.registerComponent(
  SIGN_UP_SCREEN,
  () => reduxProvider(SignUpScreen),
  () => SignUpScreen,
);
Navigation.events().registerAppLaunchedListener(() => {
  renderScreen();
});

const renderScreen = async () => {
  Navigation.setRoot({
    root: {
      stack: {
        options: { topBar: { visible: false, height: 0 } },
        children: [
          {
            component: {
              name: APP_SCREEN,
            },
          },
        ],
      },
    },
  });
};
