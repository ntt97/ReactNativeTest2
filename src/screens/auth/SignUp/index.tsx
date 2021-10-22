import { Alert, View, Keyboard } from 'react-native';
import React, { useState, useRef } from 'react';
import { object, ref, string } from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import translate from '@localize/index';
import { Formik } from 'formik';
import ErrorMessage from '@components/ErrorMessage';
import { useDispatch } from 'react-redux';
import NavigationActionsService from 'navigation';
import CustomButton from '@components/CustomButton';
import CustomInput from '@components/CustomInput';
import { colors } from '@constants/vars';
import Header from '@components/Header';
import { LOGIN_SCREEN, VERIFY_CODE_SCREEN } from '@constants/screenKeys';

const validateSchema = object().shape({
  first_name: string()
    .trim()
    .required(`${translate('error_validate_field.firstName')} ${translate('error_validate_field.input_is_require')}!`)
    .min(2, `${translate('error_validate_field.firstName')} ${translate('error_validate_field.input_too_short')}!`)
    .max(36, `${translate('profile.first_name')} ${translate('error_validate_field.input_too_long')}!`),
  last_name: string()
    .trim()
    .required(`${translate('error_validate_field.lastName')} ${translate('error_validate_field.input_is_require')}!`)
    .min(2, `${translate('error_validate_field.lastName')} ${translate('error_validate_field.input_too_short')}!`)
    .max(36, `${translate('profile.last_name')} ${translate('error_validate_field.input_too_long')}!`),
  email: string()
    .trim()
    .required(`${translate('error_validate_field.email')} ${translate('error_validate_field.input_is_require')}!`)
    .email(translate('error_validate_field.email_not_valid')),
  password: string()
    .trim()
    .required(`${translate('error_validate_field.password')} ${translate('error_validate_field.input_is_require')}!`)
    .min(8, `${translate('authentication.short_password')}!`),
  confirmPassword: string()
    .trim()
    .required(`${translate('error_validate_field.confirm_pwd')} ${translate('error_validate_field.input_is_require')}!`)
    .min(8, `${translate('authentication.short_confirm_password')}!`)
    .oneOf(
      [ref('password'), null],
      `${translate('error_validate_field.confirm_pwd')} ${translate('error_validate_field.not_match')}!`,
    ),
});

const SignUpScreen = () => {
  const dispatch = useDispatch();

  const [secureEntryPassword, setSecureEntryPassword] = useState<boolean>(true);
  const [secureEntryConfirmPassword, setSecureEntryConfirmPassword] = useState<boolean>(true);
  const [avatar, setAvatar] = useState<string>();
  const [avatarPath, setAvatarPath] = useState<string>();

  const imagePickerRef: any = useRef(null);

  const firstNameRef: any = useRef(null);
  const lastNameRef: any = useRef(null);
  const emailRef: any = useRef(null);
  const passwordRef: any = useRef(null);
  const confirmPasswordRef: any = useRef(null);

  const onSignup = (values: any, actions: any) => {
    NavigationActionsService.showLoading();
    setTimeout(() => {
      onSuccess();
    }, 500);
  };

  const onSuccess = () => {
    NavigationActionsService.hideLoading();
    NavigationActionsService.setRootNavigation(LOGIN_SCREEN);
  };

  const onPressEyePassword = () => {
    setSecureEntryPassword(!secureEntryPassword);
  };

  const onPressEyeConfirmPassword = () => {
    setSecureEntryConfirmPassword(!secureEntryConfirmPassword);
  };

  const onFocusLastName = () => {
    lastNameRef.current && lastNameRef.current.focus();
  };

  const onFocusEmail = () => {
    emailRef.current && emailRef.current.focus();
  };

  const onFocusPassword = () => {
    passwordRef.current && passwordRef.current.focus();
  };

  const onFocusConfirmPassword = () => {
    confirmPasswordRef.current && confirmPasswordRef.current.focus();
  };

  const renderHeader = () => {
    return (
      <Header
        iconVector="arrow-left"
        noShadow={false}
        mainText={'SIGN UP'}
        leftAction={() => NavigationActionsService.pop()}
      />
    );
  };

  const renderInputField = () => {
    return (
      <Formik
        initialValues={{ first_name: '', last_name: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={onSignup}
        validationSchema={validateSchema}
      >
        {formikProps => (
          <View style={styles.formikContent}>
            <CustomInput
              inputRef={firstNameRef}
              description={translate('authentication.first_name')}
              value={formikProps.values.first_name}
              placeholder={translate('authentication.first_name')}
              placeholderColor={colors.GRAY}
              onChangeText={formikProps.handleChange('first_name')}
              onSubmitEditing={onFocusLastName}
              onBlur={formikProps.handleBlur('first_name')}
              autoCapitalize="none"
              returnKeyType="next"
              customInputStyle={[
                styles.inputContainer,
                { marginBottom: formikProps.touched.first_name && formikProps.errors.first_name ? 10 : 20 },
              ]}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <ErrorMessage
              style={{ marginLeft: 35 }}
              errorValue={formikProps.touched.first_name && formikProps.errors.first_name}
            />

            <CustomInput
              inputRef={lastNameRef}
              description={translate('authentication.last_name')}
              value={formikProps.values.last_name}
              placeholder={translate('authentication.last_name')}
              placeholderColor={colors.GRAY}
              onChangeText={formikProps.handleChange('last_name')}
              onSubmitEditing={onFocusEmail}
              onBlur={formikProps.handleBlur('last_name')}
              autoCapitalize="none"
              returnKeyType="next"
              customInputStyle={[
                styles.inputContainer,
                { marginBottom: formikProps.touched.last_name && formikProps.errors.last_name ? 10 : 20 },
              ]}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <ErrorMessage
              style={{ marginLeft: 35 }}
              errorValue={formikProps.touched.last_name && formikProps.errors.last_name}
            />

            <CustomInput
              inputRef={emailRef}
              description={translate('authentication.email')}
              value={formikProps.values.email}
              placeholder={translate('authentication.email')}
              placeholderColor={colors.GRAY}
              onChangeText={formikProps.handleChange('email')}
              onSubmitEditing={onFocusPassword}
              onBlur={formikProps.handleBlur('email')}
              autoCapitalize="none"
              returnKeyType="next"
              keyboardType="email-address"
              customInputStyle={[
                styles.inputContainer,
                { marginBottom: formikProps.touched.email && formikProps.errors.email ? 10 : 20 },
              ]}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <ErrorMessage
              style={{ marginLeft: 35 }}
              errorValue={formikProps.touched.email && formikProps.errors.email}
            />

            <CustomInput
              inputRef={passwordRef}
              description={translate('authentication.password')}
              value={formikProps.values.password}
              placeholder={translate('authentication.password')}
              placeholderColor={colors.GRAY}
              onChangeText={formikProps.handleChange('password')}
              onSubmitEditing={onFocusConfirmPassword}
              onBlur={formikProps.handleBlur('password')}
              onPressEye={onPressEyePassword}
              autoCapitalize="none"
              returnKeyType="next"
              secureTextEntry={secureEntryPassword}
              customInputStyle={[
                styles.inputContainer,
                { marginBottom: formikProps.touched.password && formikProps.errors.password ? 10 : 20 },
              ]}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              rightIconStyle={{ tintColor: colors.BLACK }}
            />
            <ErrorMessage
              style={{ marginLeft: 35 }}
              errorValue={formikProps.touched.password && formikProps.errors.password}
            />

            <CustomInput
              inputRef={confirmPasswordRef}
              description={translate('authentication.confirm_password')}
              placeholder={translate('authentication.confirm_password')}
              placeholderColor={colors.GRAY}
              value={formikProps.values.confirmPassword}
              onChangeText={formikProps.handleChange('confirmPassword')}
              onSubmitEditing={formikProps.handleSubmit}
              onBlur={formikProps.handleBlur('confirmPassword')}
              onPressEye={onPressEyeConfirmPassword}
              returnKeyType="go"
              secureTextEntry={secureEntryConfirmPassword}
              customInputStyle={[
                styles.inputContainer,
                { marginBottom: formikProps.touched.confirmPassword && formikProps.errors.confirmPassword ? 10 : 20 },
              ]}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              rightIconStyle={{ tintColor: colors.BLACK }}
            />
            <ErrorMessage
              style={{ marginLeft: 35 }}
              errorValue={formikProps.touched.confirmPassword && formikProps.errors.confirmPassword}
            />

            <CustomButton
              disabled={!formikProps.isValid || formikProps.isSubmitting}
              onPress={() => {
                Keyboard.dismiss();
                formikProps.handleSubmit();
              }}
              style={styles.buttonContainer}
              textStyle={styles.buttonTitle}
              text={translate('authentication.create_account')}
            />
          </View>
        )}
      </Formik>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      <KeyboardAwareScrollView
        contentInsetAdjustmentBehavior="never"
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* {renderAvatar()} */}
          {renderInputField()}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUpScreen;
