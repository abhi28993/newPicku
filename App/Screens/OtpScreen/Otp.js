import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './OtpStyle';
import Custombtn from '../../Components/ButtonComponent/ButtonComponent';
import {loginVerify} from '../../Services/Auth';
import styles from './OtpStyle';
import store from '../../redux/Store/store';
import {useDispatch} from 'react-redux';
import {loginData} from '../../redux/action/otp';
import AsyncStorage from '@react-native-async-storage/async-storage';

let isFormValid = false;

const windowHeight = Dimensions.get('window').height;

function OtpVerify(props) {
  const pin1Ref = useRef('');
  const pin2Ref = useRef('');
  const pin3Ref = useRef('');
  const pin4Ref = useRef('');
  const pin5Ref = useRef('');
  const pin6Ref = useRef('');

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [pin5, setPin5] = useState('');
  const [pin6, setPin6] = useState('');

  // to get the data from the store
  const storeData = store.getState();
  const dispatch = useDispatch();
  afterSubmit = () => {
    let payload = {
      otp: pin1 + pin2 + pin3 + pin4 + pin5 + pin6,
      token: storeData.otpToken.token,
    };

    loginVerify(payload)
      .then(resp => {
        AsyncStorage.setItem('token',resp.data.data.token)
        .then(resp=>{
          console.log('set token',resp);
        })
        dispatch(loginData(resp.data.data));
        if (resp.data.data.isRegister) {
          props.navigation.replace(StringC.BOTTOM_STACK);
        } else {
          props.navigation.push(StringC.SIGNUP_SCREEN);
        }
      })
      .catch(err => {
        console.log(err.response.data);
      });
    //}
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
            <Text style={Styles.mainheading}>{StringC.otpTitle}</Text>
            <Text style={styles.subTitle}>{StringC.otpSubTitle}</Text>
            <View style={Styles.inputArea}>
              <TextInput
                style={Styles.numberInput}
                ref={pin1Ref}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={e => {
                  setPin1(e);
                  if (e) {
                    pin2Ref.current.focus();
                  }
                }}
                value={pin1}
              />
              <TextInput
                style={Styles.numberInput}
                maxLength={1}
                ref={pin2Ref}
                keyboardType="numeric"
                onChangeText={e => {
                  console.log(e);
                  setPin2(e);
                  e ? pin3Ref.current.focus() : pin1Ref.current.focus();
                }}
              />
              <TextInput
                style={Styles.numberInput}
                maxLength={1}
                ref={pin3Ref}
                keyboardType="numeric"
                onChangeText={e => {
                  setPin3(e);
                  e ? pin4Ref.current.focus() : pin2Ref.current.focus();
                }}
              />
              <TextInput
                style={Styles.numberInput}
                maxLength={1}
                ref={pin4Ref}
                keyboardType="numeric"
                onChangeText={e => {
                  setPin4(e);
                  e ? pin5Ref.current.focus() : pin3Ref.current.focus();
                }}
              />
              <TextInput
                style={Styles.numberInput}
                maxLength={1}
                ref={pin5Ref}
                keyboardType="numeric"
                onChangeText={e => {
                  setPin5(e);
                  e ? pin6Ref.current.focus() : pin4Ref.current.focus();
                }}
              />
              <TextInput
                style={Styles.numberInput}
                ref={pin6Ref}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={e => {
                  setPin6(e);
                  if (!e) pin5Ref.current.focus();
                }}
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

export default OtpVerify;
