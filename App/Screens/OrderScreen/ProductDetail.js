import React, {useCallback} from 'react';
import {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const ProductDetail = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const fetchData = useCallback(() => {
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const DATA = [
    {
      id: '002512023',
      name: 'iphone 19',
      timing: 'Today, 05:50 PM',
      image: require('../../Assets/Images/slidetwo.png'),
      paymentMethod: 'COD',
      Qty: 2,
      Amount: "89000.00",
      description:
        ' Iphone 19 !! Hey i am using an Apple product. Iphone 19 this is one of the best product ever',
      customerDetail: {
        cname: 'Vijay gupta',
        address: 'C-112/D LL ',
        location: 'Surya Nagar',
        landmark: 'Guru Dwara',
        phoneNumber: '+91 8076877163',
        city: 'Ghaziabad',
        pinCode: 201011,
        state: 'Uttar Pradesh',
      },
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.outerContainer}>
          <View style={styles.statusContainers}>
            <View style={styles.productContainer}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={{justifyContent: 'center', marginLeft: '30%'}}>
                <Text>{item.name}</Text>
                {/* <Text>{item.Amount}</Text> */}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.outerDetailContainer}>
          <View
            style={{
              padding: '3%',
              borderBottomWidth: 2,
              width: '90%',
              marginLeft: '5%',
            }}>
            <Text style={{fontWeight: '500', color: '#000'}}>
              Payment Method :
            </Text>
            <Text>{item.paymentMethod} </Text>
          </View>
          <View
            style={{
              padding: '3%',
              borderBottomWidth: 2,
              width: '90%',
              marginLeft: '5%',
            }}>
            <Text style={{fontWeight: '500', color: '#000'}}>Address : </Text>
            <Text>{item.customerDetail.cname} </Text>
            <Text>
              {item.customerDetail.address} {item.customerDetail.location}{' '}
            </Text>
            <Text>{item.customerDetail.phoneNumber} </Text>
            <Text>{item.customerDetail.city} </Text>
            <Text>{item.customerDetail.state} </Text>
            <Text>{item.customerDetail.pinCode} </Text>
            <Text style={{fontWeight: '500', color: '#000'}}>
              LandMark: {item.customerDetail.landmark}
            </Text>
          </View>
          <View
            style={{
              padding: '3%',
              width: '90%',
              marginLeft: '5%',
              borderBottomWidth:1
            }}>
            <Text style={{fontWeight: '500', color: '#000'}}>
              Order Summary :
            </Text>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text>Price: </Text>
              <Text>{item.Amount} </Text>
            </View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text>Discount: </Text>
              <Text>0.00 </Text>
            </View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text>Coupon: </Text>
              <Text>0.00 </Text>
            </View>
          </View>
          <View
              style={{justifyContent: 'space-between', flexDirection: 'row',padding: '3%',
              width: '90%',
              marginLeft: '5%',
              marginBottom: '10%',}}>
              <Text>Total: </Text>
              <Text>89000.00 </Text>
            </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  outerContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    elevation: 20,
    marginTop: '5%',
    marginLeft: '5%',
    width: '90%',
  },
  outerDetailContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    elevation: 20,
    marginTop: '5%',
    marginLeft: '5%',
    width: '90%',
  },
  statusContainer: {
    justifyContent: 'space-between',
    shadowColor: '#000',
    padding: '3%',
  },
  statusContainers: {
    padding: '3%',
  },
  orderText: {
    fontWeight: 'bold',
    color: '#000',
  },
  productContainer: {
    flexDirection: 'row',
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  imageContainer: {
    width: 100,
  },
  detailContainer: {
    borderWidth: 1,
    borderRadius: 5,
    elevation: 1,
    backgroundColor: '#c6affc',
    marginTop: '7%',
  },
  detailsText: {
    fontWeight: '700',
    color: '#000',
    borderRadius: 20,
    alignSelf: 'center',
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
  modalText: {
    backgroundColor: '#3e04c3',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    // alignContent:"space-between"
  },
  modalheadingText: {
    color: '#fff',
    textAlignVertical: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  closeButton: {
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  timeContainer: {
    justifyContent: 'flex-start',
    marginHorizontal: '5%',
  },
});
