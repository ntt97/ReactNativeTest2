import { handleChangeLanguage } from '@actions/language.action';
import { BG_MODEL, ICON_KEY, ICON_USER } from '@assets/index';
import CustomButton from '@components/CustomButton';
import { SocialButton } from '@components/CustomButtonGradient';
import CustomInput from '@components/CustomInput';
import CustomText from '@components/CustomText';
import { CustomTouchable } from '@components/CustomTouchable';
import ErrorMessage from '@components/ErrorMessage';
import ToastComponent from '@components/Toast';
import { FORGOT_PASSWORD_SCREEN, SIGN_UP_SCREEN, VERIFY_CODE_SCREEN } from '@constants/screenKeys';
import { colors, WIDTH_RATIO } from '@constants/vars';
import translate from '@localize/index';
import { RootState } from '@reducers/index';
import { Formik } from 'formik';
import { setDefaultLanguage, setIsLogin } from 'helpers';
import withLanguageChange from 'hoc/HocLanguage';
import I18n from 'i18n-js';
import NavigationActionsService from 'navigation';
import MainNav from 'navigation/mainNav';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, ImageBackground, Keyboard, Text, TouchableOpacity, View } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

interface Props {
  componentId: string;
}

const validationSchema = object().shape({
  email: string().label('Emai').email('Vui lòng nhập email hợp lệ').required('Vui lòng nhập một email đã đăng ký'),
  password: string().label('Mật khẩu').required('Mật khẩu không được trống').min(8, 'Mật khẩu phải có ít nhất 8 kí tự'),
});

const LoginScreen = (props: Props) => {
  const currentLanguage = useSelector<RootState>((state: RootState) => state.language.currentLanguage);
  const isConnected = useSelector<RootState>((state: RootState) => state.networkStatus.isConnected) as boolean;
  const dispatch = useDispatch();
  const [secureEntry, setSecureEntry] = useState<boolean>(true);
  const [isTappable, setIsTappable] = useState<boolean>(true);

  const passwordRef: any = useRef(null);
  const actionSheet: any = useRef(null);
  const isEN = currentLanguage === 'en';

  useEffect(() => {
    NavigationActionsService.initInstance(props.componentId);
  }, []);

  const onLoginSuccess = (response: any) => {
    NavigationActionsService.hideLoading();
    setIsLogin(true);
    MainNav();
  };

  //ACTIONS
  const onLogin = (values: any) => {
    Keyboard.dismiss();
    if (!isConnected) {
      ToastComponent('ERROR', 'Có lỗi xảy ra');
      return;
    }
    NavigationActionsService.showLoading();
    Keyboard.dismiss();
    const { email, password } = values;
  };

  const onPressEye = () => {
    setSecureEntry(!secureEntry);
  };

  //RENDERS
  const renderHeaderTitle = () => {
    return <CustomText style={styles.headerTitle} text={'Đăng Nhập'} />;
  };

  const focusPassword = () => {
    passwordRef && passwordRef.current.focus();
  };

  const onChangeLanguage = (keyLanguage: string) => {
    setDefaultLanguage(keyLanguage);
    I18n.defaultLocale = keyLanguage;
    I18n.locale = keyLanguage;
    dispatch(handleChangeLanguage(keyLanguage));
  };
  //FACEBOOK
  const loginWithFacebook = async () => {
    if (isTappable) {
      Keyboard.dismiss();
      try {
      } catch (error) {}
    }
  };

  //GOOGLE
  const loginWithGoogle = async () => {
    if (isTappable) {
      Keyboard.dismiss();
      try {
      } catch (error) {}
    }
  };

  //APPLE

  const onSignUp = () => {
    NavigationActionsService.push(SIGN_UP_SCREEN);
  };

  const onForgotPassword = () => {
    actionSheet.current.show();
  };

  const onPressActionSheet = (index: number) => {
    //index 2 is cancel option
    index < 2 && NavigationActionsService.push(FORGOT_PASSWORD_SCREEN, { showConfirmOTP: index == 1 });
  };

  const renderForgotPasswordView = () => {
    return (
      <CustomTouchable style={styles.linkContainer} onPress={onForgotPassword}>
        <CustomText style={[styles.linkTitle, styles.textAlignRight]} text={'Quên mật khẩu?'} />
      </CustomTouchable>
    );
  };

  const renderInputField = () => {
    return (
      <Formik initialValues={{ email: '', password: '' }} onSubmit={onLogin} validationSchema={validationSchema}>
        {formikProps => (
          <View style={styles.formikContainer}>
            <CustomInput
              onChangeText={formikProps.handleChange('email')}
              autoCapitalize="none"
              onSubmitEditing={focusPassword}
              placeholder={'Email'}
              returnKeyType="next"
              keyboardType="email-address"
              customInputStyle={styles.inputContainer}
              inputStyle={styles.inputStyle}
              value={formikProps.values.email}
              onBlur={formikProps.handleBlur('email')}
              rightIcon={ICON_USER}
              placeholderColor={colors.WHITE}
            />
            <ErrorMessage
              errorValue={formikProps.touched.email && formikProps.errors.email && formikProps.errors.email}
            />

            <CustomInput
              onChangeText={formikProps.handleChange('password')}
              onSubmitEditing={formikProps.handleSubmit}
              placeholder={'Mật khẩu'}
              returnKeyType="go"
              secureTextEntry={secureEntry}
              onPressEye={onPressEye}
              customInputStyle={styles.inputContainer}
              inputStyle={styles.inputStyle}
              value={formikProps.values.password}
              onBlur={formikProps.handleBlur('password')}
              inputRef={passwordRef}
              rightIcon={ICON_KEY}
              placeholderColor={colors.WHITE}
            />
            <ErrorMessage
              errorValue={formikProps.touched.password && formikProps.errors.password && formikProps.errors.password}
            />

            {renderForgotPasswordView()}

            <CustomButton
              disabled={!formikProps.isValid}
              onPress={formikProps.handleSubmit}
              style={styles.buttonContainer}
              textStyle={styles.buttonTitle}
              text={'Đăng nhập'}
            />
          </View>
        )}
      </Formik>
    );
  };
  const renderHeader = () => (
    <TouchableOpacity onPress={() => NavigationActionsService.pop()} style={styles.header}>
      <Icon style={{ marginRight: 10 }} name={'arrow-right'} size={23 * WIDTH_RATIO} color={colors.WHITE} />
    </TouchableOpacity>
  );

  const renderSocialButtonsView = () => {
    return (
      <View style={styles.socialButtonsContainer}>
        <SocialButton
          style={[styles.socialButton, { marginRight: 10 }]}
          onPress={loginWithFacebook}
          textStyle={styles.facebookText}
          text="FACEBOOK"
        />
        <SocialButton
          style={styles.socialButton}
          onPress={loginWithGoogle}
          textStyle={styles.googleText}
          text="GOOGLE"
        />
      </View>
    );
  };

  const renderDontHaveAccountView = () => {
    return (
      <View style={{ marginTop: 40 }}>
        <Text style={styles.linkTitle} allowFontScaling={false}>
          {'Chưa có tài khoản?'}
          <Text onPress={onSignUp} style={[styles.linkTitle, { fontWeight: '700' }]} allowFontScaling={false}>
            {' Đăng ký ngay!'}
          </Text>
        </Text>
      </View>
    );
  };

  const renderActionSheet = () => {
    return (
      <ActionSheet
        ref={actionSheet}
        title={'Quên mật khẩu?'}
        options={['Gửi cho tôi mã OTP', 'Tôi có mã OTP', 'Huỷ']}
        cancelButtonIndex={2}
        onPress={onPressActionSheet}
      />
    );
  };

  return (
    <ImageBackground style={{ flex: 1 }} source={BG_MODEL}>
      <SafeAreaView>
        <KeyboardAwareScrollView
          contentInsetAdjustmentBehavior="never"
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}
        >
          {renderHeader()}
          <View style={styles.content}>
            {renderHeaderTitle()}
            {renderInputField()}
            <CustomText style={styles.or} text={'Đăng nhập bằng tài khoản mạng xã hội của bạn'} />
            {renderSocialButtonsView()}
            {renderDontHaveAccountView()}
            {renderActionSheet()}
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default withLanguageChange(LoginScreen);
