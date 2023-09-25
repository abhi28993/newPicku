import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RadioButton from '../../Components/RadioButtonComponent/RadioButton';
import {GlobalStyles} from '../../Assets/Colors/Color';
import {useState} from 'react';

const AddSupplierScreen = (props) => {
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [contactData,setContactsData]=useState([])
  const [selectedContact,setSelectedContact]=useState({})

  const toggleModal = () => {
    getPermission();
    setModalVisible(!isModalVisible);
  };

  const changeHandlear=(key,val)=>{
     selectedContact[key]=val
     setSelectedContact({...selectedContact})
  }

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
            let data = contacts.map(item=>({name:item.displayName,mobile:item.phoneNumbers[0]?.number}))
            setContactsData(data)
          })
          .catch(e => {
            console.log(e);
          });
      }
    });
  };

  const create = ()=>{
    selectedContact.userType='customer'
    createAccount(selectedContact)
    createAccount(selectedContact)
    .then(resp=>{
      alert('Successfully created')
      props.navigation.navigate('supplier')
    })
    .catch(err=>alert(err.response.data.message||'Error while creating customer'))
  }
  return (
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

          <Text style={styles.label}>Supplier Mobile</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={selectedContact.mobile}
              style={styles.inputTextMob}
              onChangeText={e => changeHandlear('mobile', e)}
            />
            <TouchableOpacity
              onPress={() => {
                toggleModal();
              }}>
              <Image
                style={styles.contactImage}
                source={require('../../Assets/Icons/AddContact.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Supplier Name</Text>
          <TextInput
            style={styles.inputText}
            value={selectedContact.name}
            onChangeText={e => changeHandlear('name', e)}
          />

          <Text style={styles.label}>Remarks</Text>
          <TextInput
            style={styles.inputText}
            value={selectedContact.comments}
            onChangeText={e => changeHandlear('comments', e)}
          />

             <View style={styles.offerPriceButton}>
                <Button
                  color={GlobalStyles.colors.red100}
                  title='Create Supplier'
                  onPress={create}
                />
              </View>

          {/* <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {selectedOption === 'send' && (
              <View style={styles.offerPriceButton}>
                <Button
                  color={GlobalStyles.colors.red100}
                  title={'Amount Send ' + (transectionObj.amount || 0)}
                  onPress={save}
                />
              </View>
            )}

            {selectedOption === 'receive' && (
              <View style={styles.offerPriceButton}>
                <Button
                  color={GlobalStyles.colors.green100}
                  title={'Amount Receive ' + (transectionObj.amount || 0)}
                  onPress={save}
                />
              </View>
            )}
          </View> */}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalData}>
              <View style={styles.modalText}>
                <TouchableOpacity
                  onPress={() => {
                    toggleModal();
                  }}
                  style={styles.closeButton}>
                  <Text style={styles.modalheadingText}>Close</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={contactData}
                renderItem={({item, index}) => {
                  return (
                  <TouchableOpacity onPress={()=>{setSelectedContact({...item}); toggleModal()}}>
                    <View 
                      style={{
                        width: '90%',
                        height: 70,
                        alignSelf: 'center',
                        borderWidth: 0.5,
                        borderRadius: 10,
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      
                      <View style={{flexDirection: 'row'}}>
                        <Image />
                        <View>
                          <Text >{item.name}</Text>
                          <Text >{item.mobile}</Text>
                        </View>
                      </View>
                      <View></View>
                    </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
  );
};

export default AddSupplierScreen;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  modalText: {
    backgroundColor: '#3e04c3',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',

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
  inputTextMob: {
    borderBottomWidth: 1,
    width: '85%',
    marginLeft: '3%',
    height: 40,
  },
});
