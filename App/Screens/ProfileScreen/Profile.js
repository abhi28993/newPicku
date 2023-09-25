import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
  Button,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {GlobalStyles} from '../../Assets/Colors/Color';
// import RNFS from 'react-native-fs';

const ProfileScreen = () => {
  const [avatarSource, setAvatarSource] = useState(null);

  const selectImage = () => {
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={selectImage}>
          <Image
            source={require('../../Assets/Icons/profile.png')}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <Text style={styles.changeProfileText}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.label}>Name</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput style={styles.inputTextMob} />
            </View>
              <Button
                color={GlobalStyles.colors.red100}
                title="Share"
                // onPress={create}
              />
              <Button
                color={GlobalStyles.colors.red100}
                title="Logout"
                // onPress={create}
              />
            </View>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  changeProfileText: {
    marginTop: 10,
    color: 'blue',
  },
  profileContainer: {
    height: '40%',
    paddingTop: '10%',
    backgroundColor: 'red',
    alignItems: 'center',
  },
  dataContainer: {
    height: '50%',
  },
  inputTextVarients: {
    borderBottomWidth: 1,
    width: '80%',
    marginLeft: '3%',
    height: '25%',
    // marginBottom: 40,
  },
  fieldContainer: {
    flexDirection: 'row',
    height: '10%',
    justifyContent: 'space-around',
  },
  nameContainer: {
    marginLeft: '5%',
    width: '10%',
    paddingTop: '10%',
  },
  nameFiled: {
    marginLeft: '5%',
    width: '90%',
    paddingTop: '10%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
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
    marginBottom:'10%'
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

export default ProfileScreen;
