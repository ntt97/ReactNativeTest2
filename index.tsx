import { reduxProvider } from '@store/configureStore';
import { Navigation } from 'react-native-navigation';
import LoadingScreen from './src/components/Loading';
import { APP_SCREEN, HOME_SCREEN, LOADING_SCREEN, LOGIN_SCREEN } from './src/constants/screenKeys';
import AppScreen from './src/App';
import LoginScreen from './src/screens/auth/Login';
import HomeScreen from './src/screens/Home';

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
