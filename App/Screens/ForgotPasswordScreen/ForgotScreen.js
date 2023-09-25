import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, Dimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import * as StringC from '../../Assets/Constant/StringConstant';
import TextInputComponent from '../../Components/TextInputComponent/TextInputComponent';
import Styles from './ForgotStyle';
import Custombtn from '../../Components/ButtonComponent/ButtonComponent';
import styles from './ForgotStyle';

const windowHeight = Dimensions.get('window').height;


function ForgotPassword (props) {
  const [forgotUser, setForgotUser]= useState({
      email: '',
      emailValid: false,
      emailError: '',
      gotoNext: true,
      isemailFocused: false,
      isemailWidth: 1,
      customStyle: '',
  });
  // for validate the login details and navigate
  afterSubmit =()=> {
    if (forgotUser.email === '') {
        setForgotUser({
        emailValid: true,
        isemailFocused: true,
        isemailWidth: 2,
        emailError: StringC.emailRequired,
      });
    } else if (
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(forgotUser.email) ===
      false
    ) {
      setForgotUser({
        emailValid: true,
        isemailFocused: true,
        isemailWidth: 2,
        emailError: StringC.validEmail,
      });
    } else {
      setForgotUser({
        emailValid: false,
        isemailFocused: false,
        gotoNext: false,
        isemailWidth: 1,
      });
    }
    if (
      forgotUser.emailValid !== '' &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(forgotUser.email) !==
        false
    ) {
      props.navigation.replace(StringC.SUCCESS_SCREEN);
    }
  }
    return (
      <View style={Styles.container}>
        <ScrollView>
         <View style={{ height: windowHeight }}>
       <View style={{ height: '30%' }}>
       <ImageBackground style={{height:'100%'}} source={require('../../Assets/Images/golden.png')}>
            <Image
              style={Styles.logo}
              source={require('../../Assets/Images/logo.png')}
            />
          </ImageBackground>
       </View>
          <View style={styles.uppermain}>
            <View style={styles.lowerMain}>
              <Text style={Styles.mainheading}>
                {StringC.forgotYourPassword}
              </Text>
              <View style={styles.inputArea}>
                <TextInputComponent
                  fieldname={StringC.Email}
                  placename={StringC.EmailAddress}
                  iconSize={18}
                  leftIconName="account-outline"
                  onChngText={text => setForgotUser({email: text})}
                  vval={forgotUser.email}
                  validd={forgotUser.emailValid ? forgotUser.emailError : ''}
                  borderColor={forgotUser.isemailFocused ? 'red' : '#C0C0C0'}
                  widthh={forgotUser.isemailWidth}
                />
              </View>
              <Custombtn
                title={StringC.recoverAccountBtn}
                onPress={() => afterSubmit()}
              />
              <TouchableOpacity >
              <Text onPress={() =>
                  {props.navigation.replace(StringC.LOGIN_SCREEN)}
                }
                 style={styles.backLogin}>{StringC.backLogin}</Text>
              </TouchableOpacity>
            </View>
          </View>
         </View>
        </ScrollView>
      </View>
    );
}
export default ForgotPassword;
