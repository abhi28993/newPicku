import React from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RadioButton from '../RadioButtonComponent/RadioButton';
import { useState } from 'react';
import { GlobalStyles } from '../../Assets/Colors/Color';
// import CameraModal from '../CameraComponent/CameraComponent';

const ModalComponent = props => {

    console.log("Modal component");
    
    const [selectedOption, setSelectedOption] = useState(null);
    const [transectionObj, setTransectionObj] = useState({});
    const [modalVisible, setModalVisible] = useState(true);
  
    const handleRadioButtonSelect = option => {
      setSelectedOption(option);
    };
  return (
    <View>
      <Modal visible={props.visible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalText}>
              <TouchableOpacity
                onPress={props.toggleModals}
                style={styles.closeButton}>
                <Text style={styles.modalheadingText}>Close</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.accessContainer}>
              <View>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={styles.uploadText}>
                  <Image
                    source={require('../../Assets/Icons/addCamera.png')}
                    style={{width: 100, height: 100}}
                  />
                  <Text style={styles.invoiceText}>Upload Invoice</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.label}>Supplier Name</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={e => changeHandlear('name', e)}
            />

            <Text style={styles.label}>Supplier Mobile</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={e => changeHandlear('mobile', e)}
            />

            <Text style={styles.label}>Amount</Text>
            <TextInput
              style={styles.inputTexts}
              placeholder="Amount"
              onChangeText={e => changeHandlear('amount', e)}
              Value
            />

            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}></View>
              <View style={{flex: 1}}>
                <RadioButton
                  label="Amount Send"
                  selected={selectedOption === 'send'}
                  onSelect={() => handleRadioButtonSelect('send')}
                />
              </View>
              <View style={{flex: 1}}>
                <RadioButton
                  label="Amount Receive"
                  selected={selectedOption === 'receive'}
                  onSelect={() => handleRadioButtonSelect('receive')}
                />
              </View>
            </View>

            <Text style={styles.label}>Remarks</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={e => changeHandlear('comments', e)}
            />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
            </View>
          </View>
        </View>
      </Modal>
      {/* <CameraModal visible={modalVisible}  /> */}
    </View>
  );
};

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
    marginTop: '5%',
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
});

export default ModalComponent;
