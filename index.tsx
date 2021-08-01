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
} from '@constants/screenKeys';
import AppScreen from './src/App';
import LoginScreen from './src/screens/auth/Login';
import HomeScreen from './src/screens/Home';
import NewPageScreen from './src/screens/NewPage';
import NewPostScreen from './src/screens/NewPost';
import ContactScreen from './src/screens/Contact';
import OtherScreen from './src/screens/Other';

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
