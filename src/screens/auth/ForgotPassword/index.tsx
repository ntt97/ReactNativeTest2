import { BG_MODEL, BACK } from '@assets/index';
import Container from '@components/Container';
import CustomButton from '@components/CustomButton';
import CustomInput from '@components/CustomInput';
import { CustomTouchable } from '@components/CustomTouchable';
import ErrorMessage from '@components/ErrorMessage';
import { colors } from '@constants/vars';
import translate from '@localize/index';
import { translateErrorMessage } from '@utils/ErrorKeyMapper';
import CustomText from 'components/CustomText';
import { Formik } from 'formik';
import { forgotPassword, forgotPasswordSubmit } from 'modules/auth/actions';
import NavigationActionsService from 'navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Image, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';
import styles from './styles';

interface Props {
  showConfirmOTP: boolean;
}

const ForgotPassword = (props: Props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showConfirmOTP, setShowConfirmOTP] = useState<boolean>(props.showConfirmOTP);
  const [secureEntryPassword, setSecureEntryPassword] = useState<boolean>(true);
  const newPasswordRef: any = useRef(null);

  useEffect(() => {
    if (loading) {
      NavigationActionsService.showLoading();
    } else {
      NavigationActionsService.hideLoading();
    }
  }, [loading]);

  const validationSchema = object().shape({
    email: string()
      .label(translate('authentication.email'))
      .email(translate('authentication.valid_email'))
      .required(translate('authentication.registered_email')),
  });

  const validationSchemaResetPassword = object().shape({
    otp: string().label(translate('authentication.otp')).required(translate('authentication.otp_required')),
    newPassword: string()
      .label(translate('authentication.password'))
      .required(translate('authentication.password_required'))
      .min(8, translate('authentication.short_password')),
  });

  const renderEmailForm = () => {
    return (
      <Formik initialValues={{ email: '' }} onSubmit={onForgotPassword} validationSchema={validationSchema}>
        {formikProps => (
          <View style={styles.confirmOTPContainer}>
            <CustomText style={styles.headerTitle} text={translate('authentication.forgot_pwd')} />
            <CustomText style={styles.description} text={translate('authentication.enter_email')} />
            <CustomInput
              onChangeText={formikProps.handleChange('email')}
              autoCapitalize="none"
              placeholder={translate('authentication.email_address')}
              returnKeyType="go"
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.inputStyle}
              customInputStyle={styles.customInputStyle}
              value={formikProps.values.email}
              onBlur={formikProps.handleBlur('email')}
              onSubmitEditing={formikProps.handleSubmit}
              placeholderColor={colors.WHITE}
              containerStyle={styles.containerStyle}
            />
            <ErrorMessage errorValue={formikProps.touched.email && formikProps.errors.email} />

            <CustomButton
              disabled={!formikProps.isValid}
              style={styles.buttonContainer}
              textStyle={styles.buttonTitle}
              onPress={formikProps.handleSubmit}
              text={translate('authentication.send_password')}
            />
          </View>
        )}
      </Formik>
    );
  };

  const onPressEyePassword = () => {
    setSecureEntryPassword(!secureEntryPassword);
  };
  //style={styles.confirmOTPContainer}
  const renderConfirmOTP = () => {
    return (
      <Formik
        initialValues={{ otp: '', newPassword: '' }}
        onSubmit={onConfirmOTP}
        validationSchema={validationSchemaResetPassword}
      >
        {formikProps => (
          <View style={styles.confirmOTPContainer}>
            <CustomText style={styles.headerTitle} text={translate('authentication.update_new_password')} />
            <CustomText style={styles.description} text={`${translate('authentication.sent_to')} ${email}.`} />
            <CustomInput
              onChangeText={formikProps.handleChange('otp')}
              autoCapitalize="none"
              placeholder={translate('authentication.otp_code')}
              returnKeyType="next"
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.inputStyle}
              customInputStyle={styles.customInputStyle}
              value={formikProps.values.otp}
              onBlur={formikProps.handleBlur('otp')}
              onSubmitEditing={() => {
                newPasswordRef && newPasswordRef.current.focus();
              }}
              placeholderColor={colors.WHITE}
              containerStyle={styles.containerStyle}
            />
            <ErrorMessage errorValue={formikProps.touched.otp && formikProps.errors.otp} />

            <CustomInput
              onChangeText={formikProps.handleChange('newPassword')}
              onSubmitEditing={formikProps.handleSubmit}
              placeholder={translate('authentication.new_password')}
              returnKeyType="go"
              secureTextEntry={secureEntryPassword}
              customInputStyle={styles.customInputStyle}
              onPressEye={onPressEyePassword}
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.inputStyle}
              value={formikProps.values.newPassword}
              containerStyle={styles.containerStyle}
              onBlur={formikProps.handleBlur('newPassword')}
              inputRef={newPasswordRef}
              rightIconStyle={styles.rightIconStyle}
              placeholderColor={colors.WHITE}
            />
            <ErrorMessage errorValue={formikProps.touched.newPassword && formikProps.errors.newPassword} />

            <CustomButton
              disabled={!formikProps.isValid}
              style={styles.buttonContainer}
              textStyle={styles.buttonTitle}
              onPress={formikProps.handleSubmit}
              text={translate('authentication.update_password')}
            />
          </View>
        )}
      </Formik>
    );
  };

  const onForgotPassword = (values: any) => {
    setEmail(values.email);
    setLoading(true);

    dispatch(
      forgotPassword({
        email: values.email.toLowerCase(),
        onFail: (error: any) => {
          setLoading(false);
          error && Alert.alert(translate('common.title_error'), error.message);
        },
        onSuccess: () => {
          setLoading(false);
          setShowConfirmOTP(true);
        },
      }),
    );
  };

  const onConfirmOTP = (values: any) => {
    setLoading(true);
    dispatch(
      forgotPasswordSubmit({
        email: email.toLowerCase(),
        code: values.otp,
        new_password: values.newPassword,
        onFail: error => {
          setLoading(false);
          Alert.alert(translateErrorMessage(error && error.code, error && error.message));
        },
        onSuccess: () => {
          setLoading(false);
          Alert.alert(
            translate('authentication.alert'),
            translate('authentication.message_success'),
            [{ text: translate('authentication.ok'), onPress: onBack }],
            { cancelable: false },
          );
        },
      }),
    );
  };

  const onBack = () => {
    NavigationActionsService.pop();
  };

  const renderViewBack = () => {
    return (
      <CustomTouchable style={styles.customTouchableBack} onPress={onBack}>
        <Image resizeMode="contain" source={BACK} style={styles.imageBack} />
      </CustomTouchable>
    );
  };

  return (
    <Container image={BG_MODEL}>
      <KeyboardAwareScrollView
        contentInsetAdjustmentBehavior="never"
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>{showConfirmOTP ? renderConfirmOTP() : renderEmailForm()}</View>
      </KeyboardAwareScrollView>
      {renderViewBack()}
    </Container>
  );
};

export default ForgotPassword;
