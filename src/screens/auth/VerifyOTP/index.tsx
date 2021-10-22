import styles from './styles';
import Container from '@components/Container';
import React, { Fragment, useRef } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, Image, Text, TouchableOpacity, Alert, Keyboard } from 'react-native';
import translate from '@localize/index';
import { Formik } from 'formik';
import { string, object } from 'yup';
import FormInput from '@components/Form/FormInput';
import FormButton from '@components/Form/FormButton';
import { LOGIN_SCREEN } from '@constants/screenKeys';
import ErrorMessage from '@components/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { login, resendConfirmationCode, verifyCodeEmail } from 'modules/auth/actions';
import { translateErrorMessage } from 'utils/ErrorKeyMapper';
import NavigationActionsService from 'navigation';
import CustomButton from 'components/CustomButton';
import AuthNav from 'navigation/authNav';
import { BG_MODEL } from '@assets/index';
import ToastComponent from '@components/Toast';
import { RootState } from '@reducers/index';
import { setIsLogin } from 'helpers';
import MainNav from 'navigation/mainNav';

export type Props = {
  values: any;
};

const VerifyOTP = (props: Props) => {
  const dispatch = useDispatch();
  const toastRef: any = useRef(null);
  const isConnected = useSelector<RootState>((state: RootState) => state.networkStatus.isConnected) as boolean;

  const validationSchemaOTP = object().shape({
    otp: string().required(translate('authentication.otp_required')),
  });

  const validationSchemaTOTP = object().shape({
    totp: string().required(translate('authentication.totp_required')),
  });

  const onSubmitOTP = (values: any) => {
    NavigationActionsService.showLoading();
    dispatch(
      verifyCodeEmail({
        email: props.values.email,
        code: values.otp,
        onSuccess: () => {
          onLogin(props.values);
        },
        onFail: error => {
          NavigationActionsService.hideLoading();
          Alert.alert(translateErrorMessage(error && error.code, error && error.message));
        },
      }),
    );
  };

  const onLogin = (values: any) => {
    if (!isConnected) {
      ToastComponent('ERROR', translate('network.status'));
      return;
    }
    Keyboard.dismiss();
    const { email, password } = values;
    dispatch(
      login({
        email: email.toLowerCase(),
        password,
        onSuccess: onLoginSuccess,
        onFail: (error: any) => {
          NavigationActionsService.hideLoading();
          Alert.alert(translate('setting.sign_in_fail'));
          AuthNav();
        },
      }),
    );
  };

  const onLoginSuccess = (response: any) => {
    NavigationActionsService.hideLoading();
    setIsLogin(true);
    MainNav();
  };

  const onSubmitTOTP = (values: any) => {};

  const onResendCode = () => {
    dispatch(
      resendConfirmationCode({
        email: props.values.email,
        onSuccess: () => {
          ToastComponent('SUCCESS', translate('authentication.resend_success'));
        },
        onFail: error => {
          Alert.alert(translateErrorMessage(error && error.code, error && error.message));
        },
      }),
    );
  };

  const onBackToLogin = () => {
    NavigationActionsService.setRootNavigation(LOGIN_SCREEN);
  };

  // Verify via SMS/Email
  const renderVerifyOTP = () => {
    return (
      <View style={styles.subContainer}>
        <Text style={styles.contentTitle}>{translate('authentication.sms_email')}</Text>
        <Formik initialValues={{ otp: '' }} onSubmit={onSubmitOTP} validationSchema={validationSchemaOTP}>
          {formikProps => (
            <Fragment>
              <FormInput
                onChangeText={formikProps.handleChange('otp')}
                autoCapitalize="none"
                returnKeyType="next"
                keyboardType="numeric"
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                value={formikProps.values.otp}
                onBlur={formikProps.handleBlur('otp')}
              />

              <ErrorMessage errorValue={formikProps.touched.otp && formikProps.errors.otp} />

              <View style={styles.resendCodeContainer}>
                <Text style={styles.resendCodeText}>{translate('authentication.not_receive_code')}</Text>
                <TouchableOpacity onPress={onResendCode}>
                  <Text style={styles.resendCodeUnderline}>{translate('authentication.resend_code')}</Text>
                </TouchableOpacity>
              </View>

              <FormButton
                disabled={!formikProps.isValid}
                isLoading={formikProps.isSubmitting}
                onPress={formikProps.handleSubmit}
                buttonStyle={styles.buttonContainer}
                titleStyle={styles.buttonTitle}
                title={translate('authentication.submit')}
              />
            </Fragment>
          )}
        </Formik>
      </View>
    );
  };

  // Verify via Authenticator app
  const renderVerifyTOTP = () => {
    return (
      <View style={styles.subContainer}>
        <Text style={styles.contentTitle}>{translate('authentication.authenticator')}</Text>
        <Formik initialValues={{ totp: '' }} onSubmit={onSubmitTOTP} validationSchema={validationSchemaTOTP}>
          {formikProps => (
            <View style={{ width: '100%' }}>
              <FormInput
                onChangeText={formikProps.handleChange('totp')}
                autoCapitalize="none"
                returnKeyType="next"
                keyboardType="numeric"
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                value={formikProps.values.totp}
                onBlur={formikProps.handleBlur('totp')}
              />

              <ErrorMessage
                style={{ marginLeft: 55 }}
                errorValue={formikProps.touched.totp && formikProps.errors.totp}
              />

              <CustomButton
                disabled={!formikProps.isValid}
                onPress={formikProps.handleSubmit}
                style={styles.buttonContainer}
                textStyle={styles.buttonTitle}
                text={translate('authentication.login_button')}
              />
            </View>
          )}
        </Formik>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAwareScrollView contentInsetAdjustmentBehavior="never" keyboardShouldPersistTaps={'handled'}>
        <View style={styles.container}>
          <Image source={BG_MODEL} style={[styles.companyLogo]} />
          <Text style={styles.headerTitle}>{translate('authentication.2fa')}</Text>
          {renderVerifyOTP()}
          <View style={styles.backToLoginContainer}>
            <Text style={styles.backToLogin} onPress={onBackToLogin}>
              {translate('authentication.back_to_login')}
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default VerifyOTP;
