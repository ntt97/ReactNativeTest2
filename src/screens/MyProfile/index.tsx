/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import Header from '@components/Header';
import styles from './styles';
import NavigationActionsService from 'navigation';
import { Formik } from 'formik';
import CustomInput from '@components/CustomInput';
import ErrorMessage from '@components/ErrorMessage';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { Avatar } from 'react-native-elements';
import { colors, WIDTH_RATIO } from '@constants/vars';
import CustomButton from '@components/CustomButton';
import DocumentPickerImage from '@components/ImagePicker';
import PickerSelect from '@components/PickerSelect';
import CustomText from '@components/CustomText';

const validationSchema = object().shape({});
export const leaveType: any[] = [
  {
    value: 1,
    label: 'CAUSAL LEAVE',
  },
  {
    value: 2,
    label: 'Type X',
  },
  {
    value: 3,
    label: 'Type Y',
  },
];

const MyProfileScreen = (props: any) => {
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const dispatch = useDispatch();

  const imagePickerRef = useRef<any>(null);
  const displayNameRef = useRef<any>(null);
  const phoneRef = useRef<any>(null);
  const addressRef = useRef<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {}, []);

  const renderHeader = () => {
    return (
      <Header
        iconVector={'arrow-left'}
        mainText="Thông tin tài khoản"
        noShadow={true}
        leftAction={() => {
          NavigationActionsService.pop();
        }}
      ></Header>
    );
  };

  const onSubmit = (values: any) => {
    setLoading(true);
  };
  const onRequired = () => {
    setLoading(false);
  };

  const renderAvatar = () => {
    return (
      <Avatar
        rounded
        source={{ uri: 'https://luv.vn/wp-content/uploads/2021/02/anh-hot-girl-toc-ngan-5-1024x682.jpg' }}
        size="large"
        onPress={() => canEdit && onChangeAvatar}
      />
    );
  };

  const onChangeAvatar = () => {
    imagePickerRef.current.show();
  };

  const renderInputForm = () => {
    const display_name = 'Nguyễn Thanh Tố';
    const phone = '0358983660';
    const email = 'nthanhtodev97@gmail.com';
    const states = '';
    const city = '';
    const address = '';

    return (
      <Formik
        initialValues={{
          displayName: display_name ?? '',
          phone: phone ?? '',
          email: email ?? '',
          states: states,
          city: city,
          address: address,
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {formikProps => (
          <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>{renderAvatar()}</View>
            <View style={styles.formikContent}>
              <CustomInput
                disabled={canEdit}
                editable={false}
                description={'Email'}
                onChangeText={formikProps.handleChange('email')}
                autoCapitalize="none"
                returnKeyType="next"
                keyboardType="email-address"
                customInputStyle={[
                  styles.inputContainer,
                  { marginBottom: formikProps.touched.email && formikProps.errors.email ? 10 : 20 },
                ]}
                inputContainerStyle={[styles.inputContainerStyle]}
                inputStyle={styles.inputStyle}
                value={formikProps.values.email}
                onBlur={formikProps.handleBlur('email')}
                onSubmitEditing={() => {
                  displayNameRef.current && displayNameRef.current.focus();
                }}
              />
              <ErrorMessage
                style={{ marginLeft: 30 }}
                errorValue={formikProps.touched.email && formikProps.errors.email}
              />

              <CustomInput
                editable={canEdit}
                description={'Họ và tên'}
                onChangeText={formikProps.handleChange('displayName')}
                autoCapitalize="none"
                returnKeyType="next"
                customInputStyle={[
                  styles.inputContainer,
                  { marginBottom: formikProps.touched.displayName && formikProps.errors.displayName ? 10 : 20 },
                ]}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                value={formikProps.values.displayName}
                onBlur={formikProps.handleBlur('displayName')}
                onSubmitEditing={() => {
                  phoneRef.current && phoneRef.current.focus();
                }}
                inputRef={displayNameRef}
              />
              <ErrorMessage
                style={{ marginLeft: 30 }}
                errorValue={formikProps.touched.displayName && formikProps.errors.displayName}
              />

              <CustomInput
                editable={canEdit}
                description={'Số điện thoại'}
                onChangeText={formikProps.handleChange('phone')}
                autoCapitalize="none"
                keyboardType="phone-pad"
                maxLength={11}
                returnKeyType="next"
                customInputStyle={styles.inputContainer}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                value={formikProps.values.phone}
                onBlur={formikProps.handleBlur('phone')}
                onSubmitEditing={() => {
                  addressRef.current && addressRef.current.focus();
                }}
                inputRef={phoneRef}
              />
              <ErrorMessage
                style={{ marginLeft: 30 }}
                errorValue={formikProps.touched.phone && formikProps.errors.phone}
              />

              <CustomInput
                editable={canEdit}
                description={'Địa chỉ'}
                onChangeText={formikProps.handleChange('address')}
                autoCapitalize="none"
                returnKeyType="next"
                keyboardType="numeric"
                customInputStyle={[
                  styles.inputContainer,
                  { marginBottom: formikProps.touched.address && formikProps.errors.address ? 10 : 20 },
                ]}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                value={formikProps.values.address}
                onBlur={formikProps.handleBlur('address')}
                inputRef={displayNameRef}
              />
              <ErrorMessage
                style={{ marginLeft: 30 }}
                errorValue={formikProps.touched.address && formikProps.errors.address}
              />
              <View
                style={[
                  styles.inputContainer,
                  { marginBottom: formikProps.touched.address && formikProps.errors.address ? 10 : 20 },
                ]}
              >
                <CustomText style={[styles.description]} text={'States'} />
                <PickerSelect
                  disabled={!canEdit}
                  inputAndroid={{ marginHorizontal: 10 }}
                  inputIOS={{ marginHorizontal: 10 }}
                  onValueChange={value => () => {}}
                  items={leaveType}
                />
              </View>
              <View style={{ height: 30 }}></View>
              <ErrorMessage
                style={{ marginLeft: 30 }}
                errorValue={formikProps.touched.address && formikProps.errors.address}
              />
              <View
                style={[
                  styles.inputContainer,
                  { marginBottom: formikProps.touched.address && formikProps.errors.address ? 10 : 20 },
                ]}
              >
                <CustomText style={[styles.description]} text={'City'} />
                <PickerSelect
                  disabled={!canEdit}
                  inputAndroid={{ marginHorizontal: 10 }}
                  inputIOS={{ marginHorizontal: 10 }}
                  onValueChange={value => () => {}}
                  items={leaveType}
                />
              </View>
              <ErrorMessage
                style={{ marginLeft: 30 }}
                errorValue={formikProps.touched.address && formikProps.errors.address}
              />
              <View style={{ height: 30 }}></View>
            </View>

            <View style={{ marginBottom: 16 * WIDTH_RATIO }}>
              {!canEdit && (
                <CustomButton textStyle={styles.buttonTitle} onPress={() => setCanEdit(true)} text={'Sửa thông tin'} />
              )}
              {canEdit && (
                <>
                  <CustomButton textStyle={styles.buttonTitle} onPress={formikProps.handleSubmit} text={'Cập nhật'} />
                  <CustomButton
                    onPress={() => setCanEdit(false)}
                    text={'Huỷ bỏ'}
                    style={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.DARK_GREY }}
                    textStyle={{ color: colors.ICON_COLOR }}
                  />
                </>
              )}
            </View>

            <View style={{ marginHorizontal: 30 }}>
              <View style={{}}>
                <CustomText
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#666666',
                    alignSelf: 'flex-start',
                    marginBottom: 20,
                  }}
                  text="TRẠNG THÁI HOẠT ĐỘNG"
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <CustomText
                  stylesContainer={{ flex: 1 }}
                  style={{ color: '#666666', alignSelf: 'flex-start', flex: 1 }}
                  text="Gói thành viên:"
                />
                <CustomText
                  stylesContainer={{ flex: 1 }}
                  style={{ color: '#666666', alignSelf: 'flex-start', flex: 1 }}
                  text="Gói thành viên mới"
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <CustomText
                  stylesContainer={{ flex: 1 }}
                  style={{ color: '#666666', alignSelf: 'flex-start' }}
                  text="Số bài còn lại:"
                />
                <CustomText
                  stylesContainer={{ flex: 1 }}
                  style={{ color: '#666666', alignSelf: 'flex-start' }}
                  text="5"
                />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <CustomText
                  stylesContainer={{ flex: 1 }}
                  style={{ color: '#666666', alignSelf: 'flex-start' }}
                  text="Ngày bắt đầu:"
                />
                <CustomText
                  stylesContainer={{ flex: 1 }}
                  style={{ color: '#666666', alignSelf: 'flex-start' }}
                  text="18/07/2021 - 17:08"
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <CustomText
                  stylesContainer={{ flex: 1 }}
                  style={{ color: '#666666', alignSelf: 'flex-start' }}
                  text="Ngày kết thúc:"
                />
                <CustomText
                  stylesContainer={{ flex: 1 }}
                  style={{ color: '#666666', alignSelf: 'flex-start' }}
                  text="21/07/2021 - 17:08"
                />
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>
    );
  };

  const renderPicker = () => <DocumentPickerImage ref={imagePickerRef} onCompleted={onCompletedPicker} />;

  const onCompletedPicker = (response: any) => {
    // const photo: any = getPhotoFromImageResponse(response);
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <KeyboardAvoidingView style={styles.container}>
        {renderInputForm()}
        {renderPicker()}
      </KeyboardAvoidingView>
    </View>
  );
};

export default MyProfileScreen;
