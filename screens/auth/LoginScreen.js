import { useState, useEffect } from 'react'
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

import * as ImagePicker from 'expo-image-picker'

import validator from 'validator'

const initialState = {
  email: '',
  password: '',
}

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/

const LoginScreen = ({ navigation }) => {
  const [dimensions, setDimensions] = useState(
    Dimensions.get('window').width - 16 * 2,
  )

  const [isEmailFocused, setIsEmailFocused] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 16 * 2
      console.log('width: ', width)
      setDimensions(width)
    }
    const dimensionsHandler = Dimensions.addEventListener('change', onChange)

    return () => {
      dimensionsHandler.remove()
    }
  }, [])

  const hideKeyboard = () => {
    setIsFocused(false)
    Keyboard.dismiss()
  }

  const onHandleSend = () => {
    setIsFocused(false)
    Keyboard.dismiss()
    const isValid = validator.matches(formState.email, reg)
    if (!isValid) {
      return
    }
    setFormState(initialState)
  }

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ alignItems: 'center', flex: 1 }}
      >
        <ImageBackground
          style={styles.bg}
          source={require('../../assets/img/bg.jpg')}
        >
          <View
            style={{
              ...styles.form,
              paddingBottom: isFocused ? 10 : 80,
            }}
          >
            <Text style={styles.title}>Увійти</Text>

            <View
              style={{
                ...styles.inputWrap,
                width: dimensions,
                marginBottom: 16,
              }}
            >
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isEmailFocused ? '#FF6C00' : '#E8E8E8',
                }}
                value={formState.email}
                placeholder="Адреса електронної пошти"
                onFocus={() => {
                  setIsEmailFocused(true)
                  setIsFocused(true)
                }}
                onBlur={() => {
                  setIsEmailFocused(false)
                  setIsFocused(false)
                }}
                onChangeText={(value) =>
                  setFormState((prevState) => {
                    return {
                      ...prevState,
                      email: value,
                    }
                  })
                }
              />
            </View>

            <View
              style={{
                ...styles.inputWrap,
                width: dimensions,
              }}
            >
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isPasswordFocused ? '#FF6C00' : '#E8E8E8',
                }}
                value={formState.password}
                placeholder="Пароль"
                secureTextEntry={!isShowPassword}
                onFocus={() => {
                  setIsPasswordFocused(true)
                  setIsFocused(true)
                }}
                onBlur={() => {
                  setIsPasswordFocused(false)
                  setIsFocused(false)
                }}
                onChangeText={(value) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
              />
              <TouchableOpacity
                style={styles.show}
                onPress={() => setIsShowPassword((prevState) => !prevState)}
              >
                <Text>{isShowPassword ? 'Сховати' : 'Показати'}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{ ...styles.registerBtn, width: dimensions }}
            >
              <Text style={styles.regBtnText} onPress={onHandleSend}>
                Увійти
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginLink}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.loginLinkText}>
                Нема аккаунта? Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
  form: {
    backgroundColor: '#fff',
    position: 'relative',
    alignItems: 'center',
    // paddingBottom: 80,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    color: '#000',
    marginTop: 32,
    marginBottom: 32,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
    fontFamily: 'Roboto-Medium',
  },
  input: {
    height: 50,
    backgroundColor: '#F6F6F6',
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    fontFamily: 'Roboto-Regular',
  },
  inputWrap: {
    position: 'relative',
    background: '#F6F6F6',
    overflow: 'hidden',
    borderRadius: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
    marginBottom: 16,
  },
  show: {
    position: 'absolute',
    right: 16,
  },
  registerBtn: {
    marginTop: 43,
    marginBottom: 16,
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regBtnText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#FFF',
  },
  loginLinkText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B437',
  },
})
