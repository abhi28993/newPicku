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
import {GlobalStyles} from '../../Assets/Colors/Color';
import {useStore} from 'react-redux';
import store from '../../redux/Store/store';
import {getImagePath, getTimeDisplay} from '../../Services/commonService';
import { updateOrderStatus } from '../../Services/orderService';

const OrderDetail = ({navigation,route}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  console.log('route data ==========',route);
  
  const fetchData = useCallback(() => {
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  
  const orderData = store.getState().OrderDetail;
  const orderStatus={
    Pending:'Accepted',
    Accepted:'Packed',
    Packed:'Shipped',
    Shipped:'Delivered'
  }
  const totalAmount = orderData.products.reduce(
    (a, b) => a + b.qty * b.fprice,
    0,
  );
  console.log('store data ==============', orderData);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const updateStatus=()=>{
    updateOrderStatus({id:orderData._id,status:orderStatus[orderData.status]})
    .then(resp=>console.log('successfully changed',resp.data.data))
    .catch(err=>console.log('error============',err))
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.statusContainers}>
          <View style={styles.statusInnerContainer}>
          <View>
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: getImagePath(item.images[0])}}
                  style={styles.image}
                />
              </View>
            </View>
            <View style={styles.productContainer}>
              {/* <View style={{justifyContent: 'space-around'}}> */}
                <Text style={{color: '#000', fontWeight: '500'}}>
                  {item.name}
                </Text>
                <Text style={{color: '#000', fontWeight: '500'}}>
                  {getTimeDisplay(orderData.createdAt)}
                </Text>
                

              {/* </View> */}
            </View>
            
            <View
              style={{
                justifyContent: 'space-around',
              }}>
                
              <View
                style={{
                  // justifyContent: 'space-around',
                  flexDirection: 'row',
                }}>
                <Text>Qty </Text>
                <Text>: {item.qty}</Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                }}>
                <Text>Rs</Text>
                <Text> {item.fprice}</Text>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'space-around',
              }}>
                
              <View
                style={{
                  // justifyContent: 'space-around',
                  flexDirection: 'row',
                }}>
                <Text>Total </Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                }}>
                <Text> {item.fprice*item.qty}</Text>
              </View>
            </View>
            
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '90%',
          backgroundColor: GlobalStyles.colors.primary700,
          marginLeft: '5%',
          marginTop: '5%',
          height: '30%',
          borderRadius: 20,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              paddingLeft: '5%',
              paddingTop: '5%',
              color: 'white',
              fontSize: 15,
            }}>
            Total Amount
          </Text>
          <Text
            style={{
              paddingRight: '5%',
              paddingTop: '5%',
              color: 'white',
              fontSize: 15,
            }}>
            Rs {totalAmount}
          </Text>
          <Text
            style={{
              padding:5,
              margin:10,
              color: 'white',
              fontSize: 12,
              backgroundColor:'red',
              borderRadius:5
            }} onPress={updateStatus}>
            {orderStatus[orderData.status]}
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            paddingTop: '3%',
            paddingLeft: '5%',
          }}>
          {orderData.name}
        </Text>
        <View >
          <Text
            style={{
              // paddingLeft: '5%',
              paddingTop: '2%',
              color: 'white',
              fontSize: 15,
              borderBottomWidth:1,
              borderBottomColor:'#fff',
              width:'90%',
              marginLeft:'5%'
            }}>
            Address :
          </Text>
          <Text
            style={{
              paddingLeft: '5%',
              paddingTop: '2%',
              color: 'white',
              fontSize: 15,
              width:'40%'
            }}>
            {orderData.address}
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
          }}></View>
      </View>
      <FlatList
        data={orderData.products}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        contentContainerStyle={{ paddingBottom: 40 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  outerContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 20,
    marginTop: '5%',
    marginLeft: '5%',
    width: '90%',

  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '3%',
  },
  statusContainers: {
    justifyContent: 'space-between',
    padding: '3%',
  },
  orderText: {
    fontWeight: 'bold',
    color: '#000',
  },
  statusInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productContainer: {
    flexDirection: 'column',
    height: '100%',
  },
  image: {
    width: 80,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 10,
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
    marginLeft: '5%',
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

export default OrderDetail;
