import { ICON_BARS, ICON_CONTACT, ICON_HOME, ICON_NEW_PAGE, ICON_POST } from '@assets/index';
import { isIOS } from '@constants/platform';
import {
  CONTACT_SCREEN,
  HOME_SCREEN,
  NEW_PAGE_SCREEN,
  NEW_POST_SCREEN,
  OTHER_SCREEN,
  ROOT,
} from '@constants/screenKeys';
import { colors, WIDTH_RATIO } from '@constants/vars';
import { ImageRequireSource } from 'react-native';
import { Layout, Navigation } from 'react-native-navigation';

const testIDs = {
  TAB_BAR: {
    HOME: 'TAB_BAR.HOME',
    NEW_PAGE: 'TAB_BAR.NEW_PAGE',
    NEW_POST: 'TAB_BAR.NEW_POST',
    CONTACT: 'TAB_BAR.CONTACT',
    OTHER: 'TAB_BAR.OTHER',
  },
};

const initTab = (
  id: string,
  label: string,
  icon: ImageRequireSource,
  tabbarVisible = true,
  testID: string,
): Layout => ({
  stack: {
    id: `TAB-${id}`,
    children: [
      {
        component: {
          id,
          name: id,
          options: {
            topBar: {
              visible: false,
            },
            bottomTabs: {
              visible: tabbarVisible,
              drawBehind: false,
              animate: true,
              backgroundColor: colors.WHITE,
            },
          },
        },
      },
    ],
    options: {
      bottomTab: {
        text: label,
        icon,
        iconColor: colors.GRAY700,
        textColor: colors.GRAY700,
        selectedIconColor: colors.PRIMARY,
        selectedTextColor: colors.PRIMARY,
        testID,
        iconInsets: { top: 5, bottom: -5 },
      },
      topBar: {
        testID: 'navigation-header',
      },
      layout: {
        backgroundColor: colors.WHITE,
      },
    },
  },
});

const MainNav = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: HOME_SCREEN,
          },
        },
        options: {
          sideMenu: {
            left: isIOS ? {} : { width: 270 * WIDTH_RATIO },
          },
          layout: {
            orientation: ['portrait'],
          },
        },
        center: {
          bottomTabs: {
            id: ROOT,
            children: [
              initTab(HOME_SCREEN, 'Trang chủ', ICON_HOME, true, testIDs.TAB_BAR.HOME),
              initTab(NEW_PAGE_SCREEN, 'Tin tức', ICON_NEW_PAGE, true, testIDs.TAB_BAR.NEW_PAGE),
              initTab(NEW_POST_SCREEN, 'Đăng bài', ICON_POST, true, testIDs.TAB_BAR.NEW_POST),
              initTab(CONTACT_SCREEN, 'Liên hệ', ICON_CONTACT, true, testIDs.TAB_BAR.CONTACT),
              initTab(OTHER_SCREEN, 'Thêm', ICON_BARS, true, testIDs.TAB_BAR.OTHER),
            ],
            options: {
              bottomTabs: {
                drawBehind: false,
                currentTabIndex: 0,
                titleDisplayMode: 'alwaysShow',
              },
              sideMenu: {
                left: {
                  enabled: false,
                },
              },
            },
          },
        },
      },
    },
  });
};
export default MainNav;
