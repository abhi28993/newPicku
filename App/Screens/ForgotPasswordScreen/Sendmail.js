import React, {Component, useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './ForgotStyle';
import Custombtn from '../../Components/ButtonComponent/ButtonComponent';
import styles from './ForgotStyle';

function Login () {
  const [sendMail,setSendMail] = useState({});
    return (
      <View style={Styles.container}>
        <ScrollView>
          <ImageBackground source={require('../../Assets/Images/golden.png')}>
            <Image
              style={Styles.logo}
              source={require('../../Assets/Images/logo.png')}
            />
          </ImageBackground>
          <View style={styles.uppermain}>
            <View style={styles.lowerMain}>
              <Image
                style={Styles.logotick}
                source={require('../../Assets/Images/tick.png')}
              />
              <Text style={Styles.mainheading}>{StringC.checkYourEmail}</Text>
              <Text style={Styles.subheading}>{StringC.checkMailContent}</Text>
              <Custombtn
                title={StringC.ok}
                onPress={() =>
                  props.navigation.replace(StringC.CHANGE_PASSWORD_SCREEN)
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

export default Login;
