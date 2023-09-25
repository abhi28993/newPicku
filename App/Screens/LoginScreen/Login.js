import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as StringC from '../../Assets/Constant/StringConstant';
import TextInputComponent from '../../Components/TextInputComponent/TextInputComponent';
import Styles from './LoginStyle';
import Custombtn from '../../Components/ButtonComponent/ButtonComponent';
import {login} from '../../Services/Auth';
import {otpLogin} from '../../redux/action/otp';
import {useDispatch} from 'react-redux';

let isFormValid = false;

const windowHeight = Dimensions.get('window').height;

function Login(props) {
  const [loginUser, setLoginUser] = useState({
    email: '',
    icEye: 'eye-with-line',
    isSubmit: false,
  });

  const dispatch = useDispatch();
  
  afterSubmit = () => {
    setLoginUser({...loginUser, isSubmit: true});
    if (isFormValid) {
      let payload = {
        username: loginUser.email,
      };
      
      login(payload)
        .then(resp => {
          props.otpToken = resp.token;
          dispatch(otpLogin(resp.data.data))
          props.navigation.push(StringC.OTP_SCREEN);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  };
  let validationHandler = key => {
    isFormValid = false;
    if (!loginUser[key] && loginUser.isSubmit)
      return key == 'email'
        ? key.toLowerCase() + '/phone is required'
        : key.toLowerCase() + ' is required';
    else isFormValid = true;
  };

  const setValues = (key, value) => {
    loginUser[key] = value;
    setLoginUser({...loginUser});
  };
  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={{height: windowHeight}}>
          <View style={{height: '30%'}}>
            <ImageBackground
              style={{height: '100%'}}
              source={require('../../Assets/Images/golden.png')}>
              <Image
                style={Styles.logo}
                source={require('../../Assets/Images/logo.png')}
              />
            </ImageBackground>
          </View>
          <View style={Styles.lowerMain}>
            <Text style={Styles.mainheading}>{StringC.loginTitle}</Text>
            <View style={Styles.inputArea}>
              <TextInputComponent
                fieldname={StringC.Email}
                placename={'Email/Phone'}
                iconSize={18}
                leftIconName="account-outline"
                onChngText={text => setValues('email', text)}
                vval={loginUser.email}
                validd={validationHandler('email')}
                borderColor={loginUser.isemailFocused ? 'red' : '#C0C0C0'}
                widthh={loginUser.isemailWidth}
              />
            </View>
            <View style={Styles.btnnext}>
              <Custombtn title={StringC.signIn} onPress={() => afterSubmit()} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Login;
