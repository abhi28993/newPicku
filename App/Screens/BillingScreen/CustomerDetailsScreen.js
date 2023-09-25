import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  TextInput,
  Button,
  Platform,
} from 'react-native';
// import {  } from 'react-native-gesture-handler';
import CustomSearch from '../../Components/SearchInputComponent/SearchInputComponent';
import {GlobalStyles} from '../../Assets/Colors/Color';
import RadioButton from '../../Components/RadioButtonComponent/RadioButton';
import ModalComponent from '../../Components/ModalComponent/ModalComponent';
import {Contacts} from 'react-native-contacts';
import * as StringC from '../../Assets/Constant/StringConstant';
import {createTransection, getTransection} from '../../Services/billsService';

const CustomerDetailScreen = props => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [transectionObj, setTransectionObj] = useState({});
  const [account, setAccount] = useState({});
  const [transections, setTransections] = useState([]);

  useEffect(() => {
    console.log('global.account============',global.account);
    if (global.account) {
      setAccount(global.account);
      props.navigation.setOptions({headerTitle: 'dddddddd'});
      load()
    }
  }, []);

  const handleRadioButtonSelect = option => {
    setSelectedOption(option);
  };

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };
  const DATA = [
    {
      id: 851,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
    {
      id: 8511,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
    {
      id: 951,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
    {
      id: 8151,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
    {
      id: 8391,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
    {
      id: 881,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
    {
      id: 831,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
    {
      id: 821,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
    {
      id: 811,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
    {
      id: 852,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
    {
      id: 853,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
    {
      id: 855,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
    {
      id: 859,
      date: '10 Aug 2023',
      image: require('../../Assets/Images/slidetwo.png'),
      name: 'Abhishek Kumar',
      transaction: 5,
      netAmountSend: 2000,
      netAmountReceive: 2000,
      time: '10 minutes ago',
    },
  ];

  const changeHandlear = (key, val) => {
    transectionObj[key] = val;
    setTransectionObj({...transectionObj});
  };

  const load = () => {
    console.log('account detai;s',account);
    getTransection(account._id,'send',0)
      .then(resp => {
        console.log('success=======', resp.data.data,account._id);
        setTransectionObj(resp.data.data)
      })
      .catch(err => {
        console.log('error ==========',err.response);
        alert(err.response?.data?.message||'Error while fetching data')
      });
  };

  const save = () => {
    transectionObj.type = selectedOption;
    createTransection(transectionObj)
      .then(resp => {
        alert('Successfully added')
        console.log('success=======', resp);
      })
      .catch(err => {
        console.log('err transection==', JSON.stringify(err.data));
      });
  };

  const getTimeDisplay = timestamp => {
    const now = Date.now();
    const diff = now - timestamp;
    const seconds = Math.floor(diff / 1000);

    if (seconds < 5) {
      return 'Just now';
    } else if (seconds < 60) {
      return seconds + ' seconds ago';
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return minutes + ' minutes ago';
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return hours + ' hours ago';
    } else {
      const days = Math.floor(seconds / 86400);
      return days + ' days ago';
    }
  };

  // customer registration time from backend
  const timestamp = '1685202331561';
  // console.log(getTimeDisplay(timestamp));
  const Transaction = [
    {
      name: 'Bharti Yadav',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          borderWidth: 3,
          borderColor: '#fff',
          borderRadius: 10,
          backgroundColor: '#f0f0f5',
          shadowColor: '#000',
        }}>
        <View style={styles.customerListContainer}>
          <View style={styles.firstContainer}>
            <Text style={styles.textDate}>{item.date}</Text>
            <Text style={styles.texttime}>{item.time}</Text>
            {/* <View style={{height:50,width:40}}>

            </View> */}
          </View>
          <View style={styles.transaction}>
            <View style={styles.textContainer}>
              <Text style={styles.sendTextTransaction}>
                ₹{item.netAmountSend}
              </Text>
            </View>
            <View style={styles.textContainers}>
              <Text style={styles.receiveTextTransaction}>
                ₹{item.netAmountReceive}
              </Text>
            </View>
          </View>
        </View>
        {/* <View style={{backgroundColor:"#fff",height:3,width:'94%',marginLeft:'3%', borderRadius:10}}> */}

        {/* </View> */}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.containers}>
      <View style={styles.CustomerName}>
        <Text style={styles.customerText}>Customer Name</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.transactionContainer}>
          <TouchableOpacity style={styles.sendContainer}>
            <Text style={styles.sendText}>Send</Text>
            <Text style={styles.sendText}>0.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.receiveContainer}>
            <Text style={styles.receiveText}>Receive</Text>
            <Text style={styles.receiveText}>0.0</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.headContainer}>
            <Text style={styles.firstHeadContainer}>Entries</Text>
            <Text style={styles.secondContainer}>Send</Text>
            <Text style={styles.thirdContainer}>Receive</Text>
          </View>
        </View>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.FlatList}></FlatList>
      </View>
      <View style={styles.buttonOuterContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            props.navigation.navigate(StringC.CUSTOMER_BILLS_STACK);
          }}>
          <Text style={styles.sendTextPopup}>+</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: '2%',
  },
  FlatList: {
    padding: 5,
    paddingTop: 0,
  },

  containers: {
    flex: 1,
    backgroundColor: '#3e04c3',
  },
  CustomerName: {
    height: '5%',
    alignItems: 'flex-start',
    marginTop: '3%',
    marginLeft: '5%',
  },
  customerText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 20,
  },

  transactionContainer: {
    flexDirection: 'row',
    width: '96%',
    height: '10%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: '2%',
    marginTop: '2%',
    marginBottom: '5%',
  },
  sendContainer: {
    backgroundColor: GlobalStyles.colors.red100,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: '49.5%',
    justifyContent: 'space-evenly',
  },
  receiveContainer: {
    backgroundColor: GlobalStyles.colors.green100,
    width: '49.5%',
    justifyContent: 'space-evenly',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  sendText: {
    color: 'white',
    textAlign: 'center',
  },
  receiveText: {
    color: 'white',
    textAlign: 'center',
  },
  customerListContainer: {
    width: '100%',
    flexDirection: 'row',
    // marginLeft: '3%',
    // height: 50,
    padding: 5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    // borderBottomWidth:5,
    borderColor: '#fff',
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  firstContainer: {
    marginLeft: '2%',
    width: '38%',
  },
  firstHeadContainer: {
    color: '#000',
    marginLeft: '8%',
    width: '32%',
    fontWeight: '500',
  },
  secondContainer: {
    color: '#000',
    marginLeft: '8%',
    width: '25%',
    fontWeight: '500',
  },
  thirdContainer: {
    color: '#000',
    width: '25%',
    fontWeight: '500',
  },
  headContainer: {
    marginBottom: '5%',
    width: '94%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  customerDetails: {
    flexDirection: 'row',
    width: '85%',
    margin: '2%',
  },
  transaction: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    marginTop: '2%',
  },
  textContainer: {
    marginTop: '2%',
    marginLeft: '5%',
    width: '30%',
    color: GlobalStyles.colors.red100,
  },
  sendTextTransaction: {
    color: GlobalStyles.colors.red100,
  },
  textContainers: {
    marginTop: '2%',
    marginLeft: '10%',
    width: '35%',
  },
  receiveTextTransaction: {
    color: GlobalStyles.colors.green100,
  },
  textName: {
    fontWeight: '600',
    color: '#000',
  },
  textDate: {
    fontSize: 12,
    color: '#000',
  },
  textTime: {
    fontSize: 12,
    color: '#000',
  },
  buttonContainer: {
    borderWidth: 2,
    // width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 50,
    width: 50,
    backgroundColor: '#5721d4',
    shadowColor: '#000',
  },
  sendTextPopup: {
    fontSize: 25,
    color: '#fff',
  },
  buttonOuterContainer: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 30,
    right: 15,
  },
});

export default CustomerDetailScreen;
