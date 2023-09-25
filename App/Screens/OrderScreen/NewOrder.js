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
import { getOrders } from '../../Services/orderService';
import { useEffect } from 'react';
import { basePath } from '../../Services/env';
import { getTimeDisplay } from '../../Services/commonService';
import { order } from '../../redux/action/order';
import { useDispatch } from 'react-redux';

const NewOrder = ({navigation,route}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [orderList,setOrderList] = useState([]);
  const dispatch = useDispatch();
  const fetchData = useCallback(() => {
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(()=>{
    getOrderList()
  },[])

  const getOrderList=()=>{
    navigation.setOptions({headerTitle: (route.params.status=='Pending'?'New':route.params.status)+' Orders'})
    getOrders(route.params.status).then(resp=>{
      setOrderList(resp.data.data)
    }).catch(err=>console.log(err))
  }

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };


  const getImagePath = p => basePath + '/file/load/' + p;
  const orderDetail = (item) => {
    dispatch(order(item))
    navigation.navigate('orderDetail')
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.outerContainer} onPress={()=>orderDetail(item)}>
        <View style={styles.statusContainer}>
          <Text style={styles.orderText}>Order #{item.orderId}</Text>
          <Text>{item.timing}</Text>
        </View>
        <View style={styles.statusContainers}>
          <View style={styles.statusInnerContainer}>
            <View style={styles.productContainer}>
              <View style={styles.imageContainer}>
                <Image source={{uri:getImagePath(item.products[0]?.images[0])}} style={styles.image} />
              </View>
              <View>
                <Text>{item.name}</Text>
                <Text>{getTimeDisplay(item.createdAt)}</Text>
                <View
                  style={styles.detailContainer}>
                  <Text style={styles.detailsText}> More Details</Text>
                </View>
              </View>
            </View>
            <View>
              <Text>{item.paymentMethod}</Text>
              
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={orderList}
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

export default NewOrder;

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
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    padding: '3%',
  },
  statusContainers: {
    justifyContent: 'space-between',
    shadowColor: '#000',
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
    flexDirection: 'row',
    height: 70,
    justifyContent:"space-between",
  },
  image: {
    width: 80,
    height: 70,
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
    alignSelf:"center"
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
