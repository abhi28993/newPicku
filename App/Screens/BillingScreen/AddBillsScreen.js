import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Modal,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Contacts from 'react-native-contacts';
import RadioButton from '../../Components/RadioButtonComponent/RadioButton';
import {GlobalStyles} from '../../Assets/Colors/Color';
import {useState} from 'react';
import {createAccount} from '../../Services/billsService';

const AddBillsScreen = props => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [contactData, setContactsData] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});
  const handleRadioButtonSelect = option => {
    setSelectedOption(option);
  };
  const changeHandlear = (key, val) => {
    selectedContact[key] = val;
    setSelectedContact({...selectedContact});
  };

  const getPermission = async () => {
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      },
    ).then(res => {
      if (res == 'granted') {
        Contacts.getAll()
          .then(contacts => {
            let data = contacts.map(item => ({
              name: item.displayName,
              mobile: item.phoneNumbers[0]?.number,
            }));
            setContactsData(data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    });
  };

  const create = () => {
    selectedContact.userType = 'customer';
    createAccount(selectedContact)
      .then(resp => console.log('success'))
      .catch(err =>
        console.log('error while create customer', err.response.data),
      );
  };
  return (
    <>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.accessContainer}>
            <TouchableOpacity
              onPress={() => getPermission()}
              style={styles.uploadText}>
              <Image
                source={require('../../Assets/Icons/addCamera.png')}
                style={{width: 100, height: 100}}
              />
              <Text style={styles.invoiceText}>Upload Invoice</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.inputTexts}
            placeholder="Amount"
            onChangeText={e => changeHandlear('amount', e)}
            Value
          />
          <View style={{flexDirection:'row', justifyContent:"center"}}>
            <RadioButton
              label="Amount Send"
              selected={selectedOption === 'send'}
              onSelect={() => handleRadioButtonSelect('send')}
            />
            <RadioButton
              label="Amount Receive"
              selected={selectedOption === 'receive'}
              onSelect={() => handleRadioButtonSelect('receive')}
            />
          </View>

          <View style={styles.offerPriceButton}>
            <TouchableOpacity onPress={create} style={styles.addAmount}>
              <Text style={styles.addAmountText}>Add Amount</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default AddBillsScreen;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  addAmount: {
    backgroundColor: GlobalStyles.colors.red100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  addAmountText: {
    color: '#fff',
    fontWeight:"500"
  },

  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  modalData: {
    backgroundColor: '#fff',
    width: '100%',
    height: '80%',
  },
  modalText: {
    backgroundColor: '#3e04c3',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'flex-end',

    // alignContent:"space-between"
  },
  modalheadingText: {
    color: '#fff',
  },
  closeButton: {
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  uploadText: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  label: {
    marginLeft: '3%',
    marginTop: '10%',
    fontWeight: 'bold',
    color: '#000',
  },
  invoiceText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000',
  },

  inputTexts: {
    borderBottomWidth: 1,
    width: '94%',
    marginLeft: '3%',
    height: 40,
    marginBottom: 40,
  },
  inputText: {
    borderBottomWidth: 1,
    width: '94%',
    marginLeft: '3%',
    height: 40,
  },
  inputTextMob: {
    borderBottomWidth: 1,
    width: '85%',
    marginLeft: '3%',
    height: 40,
  },
  offerPriceButton: {
    width: '40%',
    alignSelf: 'center',
    marginBottom: 40,
    marginTop: '20%',
  },
  contactImage: {
    width: 25,
    height: 25,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
