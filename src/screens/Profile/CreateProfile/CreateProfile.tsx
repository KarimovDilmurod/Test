import React, {useRef} from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import {useAppSelector, useAppDispatch} from 'hooks/redux';
import {getUser} from 'state/user/selectors';
import {styles} from './CreateProfileStyles';
import {IUser} from 'types/data';
import {Formik, FormikProps} from 'formik';
import FormButton from 'components/FormButton/FormButton';
import TextField from 'components/TextField';
import useSmartNavigation from 'hooks/useSmartNavigation';
import R from 'res';
import {createUserAction, clearUserAction} from 'state/user/actions';
import ProfilButton from '../components/ProfilButton/ProfilButton';

export const CreateProfileScreen = () => {
  const dispatch = useAppDispatch();
  const {goBack, navigate} = useSmartNavigation();
  const {user} = useAppSelector(getUser);
  const formRef = useRef<FormikProps<IUser>>(null);

  const initialValues: IUser = {
    lastName: user?.lastName || '',
    firstName: user?.firstName || '',
    email: user?.email || '',
  };

  const onSubmit = async (data: IUser) => {
    await dispatch(createUserAction(data));
    navigate(R.routes.SCREEN_PROFILE);
  };

  const clearProfile = async () => {
    await dispatch(clearUserAction());
    navigate(R.routes.SCREEN_PROFILE);
  };

  return (
    <SafeAreaView style={styles.content}>
      <TouchableOpacity onPress={() => goBack()} style={styles.back}>
        <R.icons.ArrowIcon />
      </TouchableOpacity>

      <View style={styles.container}>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          onSubmit={onSubmit}>
          {({values, setFieldValue}) => (
            <View>
              <TextField
                title="имя"
                placeholder="имя"
                onChangeText={text => setFieldValue('firstName', text)}
                value={values.firstName || ''}
                style={styles.input_text}
                titleStyle={styles.textFieldStyle}
                inputStyle={styles.nameInputSize}
              />

              <TextField
                title="фамилия"
                placeholder="фамилия"
                onChangeText={text => setFieldValue('lastName', text)}
                value={values.lastName || ''}
                style={styles.input_text}
                titleStyle={styles.textFieldStyle}
                inputStyle={styles.nameInputSize}
              />

              <TextField
                title="email"
                placeholder="email"
                onChangeText={text => setFieldValue('email', text)}
                value={values.email || ''}
                style={styles.input_text}
                titleStyle={styles.textFieldStyle}
                inputStyle={styles.nameInputSize}
              />

              <FormButton text="Сохранить" textStyle={styles.btn_text} />

              {user && (
                <ProfilButton
                  style={styles.delete_btn}
                  text="Удалить аккаунт"
                  onPress={clearProfile}
                />
              )}
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
