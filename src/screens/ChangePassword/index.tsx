import { Alert, KeyboardAvoidingView, ScrollView, View, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { object, ref, string } from 'yup';
import { Navigation } from 'react-native-navigation';
import styles from './styles';
import translate from '@localize/index';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import ErrorMessage from 'components/ErrorMessage';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import NavigationActionsService from 'navigation';
import CustomInput from '@components/CustomInput';
import { colors } from '@constants/vars';
import Header from '@components/Header';

interface Props {
  componentId: string;
}

const ForgotPasswordView = (props: Props) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  const newPasswordRef = useRef<any>(null);
  const confirmPasswordRef = useRef<any>(null);

  const validateSchema = object().shape({
    oldPassword: string().min(8, 'Mật khẩu phải trên 8 ký tự').required('Mật khẩu hiện tại không được trống'),
    newPassword: string().min(8, 'Mật khẩu phải trên 8 ký tự').required('Mật khẩu mới không được trống'),
    confirmPassword: string()
      .min(8, 'Mật khẩu phải trên 8 ký tự')
      .required('Xác nhận mật khẩu không được trống')
      .oneOf([ref('newPassword'), null], 'Mật khẩu mới không trùng khớp '),
  });

  useEffect(() => {
    if (loading) {
      NavigationActionsService.showLoading();
    } else {
      NavigationActionsService.hideLoading();
    }
  }, [loading]);

  const onBack = () => {
    Navigation.pop(props.componentId);
  };

  const onSubmit = (values: any, actions: any) => {
    setLoading(true);
  };

  //RENDERS
  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <CustomText style={styles.title} text={'Thay đổi mật khẩu của bạn'} />
      </View>
    );
  };

  const renderInputForm = () => {
    return (
      <Formik
        initialValues={{ oldPassword: '', newPassword: '', confirmPassword: '' }}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        {formikProps => (
          <View style={styles.formikContent}>
            <CustomInput
              description={'Mật khẩu hiện tại'}
              value={formikProps.values.oldPassword}
              placeholder={'Mật khẩu hiện tại'}
              placeholderColor={colors.GRAY}
              onChangeText={formikProps.handleChange('oldPassword')}
              onSubmitEditing={() => {
                newPasswordRef.current && newPasswordRef.current.focus();
              }}
              onBlur={formikProps.handleBlur('oldPassword')}
              secureTextEntry
              returnKeyType="next"
              customInputStyle={[
                styles.inputContainer,
                { marginBottom: formikProps.touched.oldPassword && formikProps.errors.oldPassword ? 10 : 20 },
              ]}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <ErrorMessage
              style={{ marginLeft: 30 }}
              errorValue={formikProps.touched.oldPassword && formikProps.errors.oldPassword}
            />

            <CustomInput
              inputRef={newPasswordRef}
              description={'Mật khẩu mới'}
              value={formikProps.values.newPassword}
              placeholder={'Mật khẩu mới'}
              placeholderColor={colors.GRAY}
              onChangeText={formikProps.handleChange('newPassword')}
              onSubmitEditing={() => {
                confirmPasswordRef.current && confirmPasswordRef.current.focus();
              }}
              onBlur={formikProps.handleBlur('newPassword')}
              secureTextEntry
              returnKeyType="next"
              customInputStyle={[
                styles.inputContainer,
                { marginBottom: formikProps.touched.newPassword && formikProps.errors.newPassword ? 10 : 20 },
              ]}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <ErrorMessage
              style={{ marginLeft: 30 }}
              errorValue={formikProps.touched.newPassword && formikProps.errors.newPassword}
            />

            <CustomInput
              inputRef={confirmPasswordRef}
              description={'Xác nhận mật khẩu'}
              value={formikProps.values.confirmPassword}
              placeholder={'Xác nhận mật khẩu'}
              placeholderColor={colors.GRAY}
              onChangeText={formikProps.handleChange('confirmPassword')}
              onSubmitEditing={formikProps.handleSubmit}
              onBlur={formikProps.handleBlur('confirmPassword')}
              secureTextEntry
              returnKeyType="next"
              customInputStyle={[
                styles.inputContainer,
                { marginBottom: formikProps.touched.confirmPassword && formikProps.errors.confirmPassword ? 10 : 20 },
              ]}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
            <ErrorMessage
              style={{ marginLeft: 30 }}
              errorValue={formikProps.touched.confirmPassword && formikProps.errors.confirmPassword}
            />

            <View style={{ marginTop: 20 }}>
              <CustomButton
                disabled={!formikProps.isValid || formikProps.isSubmitting}
                onPress={formikProps.handleSubmit}
                textStyle={styles.buttonTitle}
                text={'Đổi mật khẩu'}
              />
            </View>
          </View>
        )}
      </Formik>
    );
  };

  const renderHeader = () => {
    return (
      <Header
        iconVector={'arrow-left'}
        mainText="Đổi mật khẩu"
        noShadow={true}
        leftAction={() => {
          NavigationActionsService.pop();
        }}
      ></Header>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.container}>
          <ScrollView style={styles.container}>
            {renderTitle()}
            {renderInputForm()}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default ForgotPasswordView;
