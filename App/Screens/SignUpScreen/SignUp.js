import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Modal,
  Alert,
} from 'react-native';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './SignUpStyle';
import Custombtn from '../../Components/ButtonComponent/ButtonComponent';
import TextInputComponent from '../../Components/TextInputComponent/TextInputComponent';
import {register} from '../../Services/Auth';
import store from '../../redux/Store/store';

let isFormValid = false;
function SignUp(props) {
  // to get the data from the store
  const {loginData} = store.getState();

  const [singUpUser, setSingUpUser] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    isSubmit: false,
    modalVisible: false,
  });

  // after click on signup button check validation and navigate to verify screen
  console.log(loginData, 'hjklllllllll');
  const afterSubmit = event => {
    setSingUpUser({...singUpUser, isSubmit: true});
    if (isFormValid) {
      let payload = {
        firstName: singUpUser.firstName,
        lastName: singUpUser.lastName,
        email: singUpUser.email,
        phone: singUpUser.phone,
      };
      register(payload)
        .then(resp => {
          console.log('my data ', resp);
          setSingUpUser({...singUpUser, modalVisible: true});
        })
        .catch(err => {
          console.log('resp err===', JSON.stringify(err.response.data.message));
          alert(err.response.data.message);
        });
    }
  };
  let validationHandler = key => {
    isFormValid = false;
    if (!singUpUser[key] && singUpUser.isSubmit) {
      return key.toLowerCase() + ' is required';
    } else if (
      key === 'email' &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(singUpUser.email) ===
        false &&
      singUpUser.isSubmit
    )
      return 'invalid email id';
    else isFormValid = true;
  };

  const setValues = (key, value) => {
    singUpUser[key] = value;
    setSingUpUser({...singUpUser});
  };
  // for navigate to next screen
  goToNext = () => {
    setSingUpUser({modalVisible: false});
    props.navigation.replace(StringC.BOTTOM_STACK);
    // props.navigation.replace(StringC.LOGIN_SCREEN);
  };

  return (
    <View style={Styles.container}>
      <Modal
        animationType="fade"
        transparent={singUpUser.modalVisible}
        visible={singUpUser.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible({modalVisible: false});
        }}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <View style={Styles.modalMain}>
              {/* <Image source={require('../../Assets/Images/tick.png')} /> */}
            </View>
            <View style={Styles.customHeight} />
            <Text style={Styles.subheading}>{StringC.signupPopupContent}</Text>
            <View style={Styles.customHeight} />
            <Custombtn title={StringC.done} onPress={() => goToNext()} />
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View style={{height: 230}}>
          <ImageBackground
            style={{height: '100%'}}
            source={require('../../Assets/Images/golden.png')}>
            <Image
              style={Styles.logo}
              source={require('../../Assets/Images/logo.png')}
            />
          </ImageBackground>
        </View>

        <View style={Styles.uppermain}>
          <View style={Styles.lowerMain}>
            <Text style={Styles.mainheading}>{StringC.CreateAccount}</Text>
            <View>
              <TextInputComponent
                fieldname={StringC.firstName}
                placename={StringC.firstName}
                iconSize={18}
                leftIconName="account-outline"
                onChngText={text => setValues('firstName', text)}
                vval={singUpUser.firstName}
                validd={validationHandler('firstName')}
                borderColor={singUpUser.isemailFocused ? 'red' : '#C0C0C0'}
                widthh={singUpUser.isemailWidth}
              />
              {/* {console.log(storeData)} */}
              <TextInputComponent
                fieldname={StringC.lastName}
                placename={StringC.lastName}
                iconSize={18}
                leftIconName="account-outline"
                onChngText={text => setValues('lastName', text)}
                vval={singUpUser.lastName}
                validd={validationHandler('lastName')}
                borderColor={singUpUser.isemailFocused ? 'red' : '#C0C0C0'}
                widthh={singUpUser.isemailWidth}
              />

              <TextInputComponent
                fieldname={StringC.phone}
                // placename={isEditable ? StringC.phone : StringC.phone}
                placename={StringC.phone}
                iconSize={18}
                leftIconName="account-outline"
                onChngText={text => setValues('phone', text)}
                vval={singUpUser.phone}
                validd={validationHandler('phone')}
                borderColor={singUpUser.isemailFocused ? 'red' : '#C0C0C0'}
                widthh={singUpUser.isemailWidth}
                // disabled={isDisabledInput}
              />
              <TextInputComponent
                fieldname={StringC.Email}
                placename={StringC.EmailAddress}
                // placename={
                //   isEditable ? StringC.EmailAddress : StringC.EmailAddress
                // }
                iconSize={18}
                leftIconName="account-outline"
                onChngText={text => setValues('email', text)}
                vval={singUpUser.email}
                validd={validationHandler('email')}
                borderColor={singUpUser.isemailFocused ? 'red' : '#C0C0C0'}
                widthh={singUpUser.isemailWidth}
                // disabled={isDisabledInput}
              />
            
         
            </View>

            <View style={Styles.checkBoxMain}>
              <Text style={Styles.checckBoxText}>
                {singUpUser.checkBoxError ? singUpUser.checkError : ''}
              </Text>
            </View>
            <Custombtn title="Continue" onPress={() => afterSubmit()} />
            <View style={Styles.dontAccountmain}>
            </View>
          </View>
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
}

export default SignUp;
