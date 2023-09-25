import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import {Svg, G, Path, Circle, Rect} from 'react-native-svg';
// import IconButtons from '../../Components/UI/IconButton';
import {getStatusWiseOrderCount} from '../../Services/orderService';
// import { Searchbar } from "react-native-paper";
import {GlobalStyles} from "../../Assets/Colors/Color";

const OrderScreen = ({props, navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [statusObj, setStatusObj] = useState({
    Pending: 0,
    Accepted: 0,
    Rejected: 0,
    Packed: 0,
    Shipped: 0,
    Delivered: 0,
  });

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStatusWiseOrderCount()
      .then(resp => {
        console.log('get status========', resp.data.data);
        if (resp.data.data) {
          resp.data.data.forEach(element => {
            statusObj[element.status] = element.count;
          });
          setStatusObj({...statusObj});
          // setLoading(false);
        }
      })
      .catch(err => console.log('==========', err));
  }, [setStatusObj]);

  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }

  const newOrders = (status) => navigation.navigate('new',{status});
  // const acceptedOrders = () => navigation.navigate('Accepted');
  // const rejectedOrders = () => navigation.navigate('Rejected');
  // const packedOrders = () => navigation.navigate('Packed');
  // const shippedOrders = () => navigation.navigate('Shipped');
  // const deliveredOrders = () => navigation.navigate('delivered');

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Text style={styles.headerText}>Orders</Text>
      </View>
      <View style={styles.productCategories}>
        <View style={styles.productCategoriesContainer}>
          <TouchableOpacity
            style={styles.innerTextContainer}
            onPress={()=>newOrders('Pending')}>
             <Image style={styles.orderImageContainer} source={require("../../Assets/Icons/newOrder.png")}  resizeMode='contain'/>
            <Text style={styles.orderText}>New Orders</Text>
            <Text style={styles.orderText}>{statusObj?.Pending}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerTextContainer}
            onPress={()=>newOrders('Accepted')}>
            <Image style={styles.orderImageContainer} source={require("../../Assets/Icons/acceptedOrders.png")}  resizeMode='contain'/>
            <Text style={styles.orderText}>Accepted Orders</Text>
            <Text style={styles.orderText}>{statusObj.Accepted}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productCategoriesContainer}>
          <TouchableOpacity
            style={styles.innerTextContainer}
            onPress={()=>newOrders('Rejected')}>
            <Image style={styles.orderImageContainer} source={require("../../Assets/Icons/cancelOrder.png")}  resizeMode='contain' />
            <Text style={styles.orderText}>Rejected Orders</Text>
            <Text style={styles.orderText}>{statusObj.Rejected}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerTextContainer}
            onPress={()=>newOrders('Packed')}>
           <Image style={styles.orderImageContainer} source={require("../../Assets/Icons/bookingOrder.png")}  resizeMode='contain' />
            <Text style={styles.orderText}>Packed Orders</Text>
            <Text style={styles.orderText}>{statusObj.Packed}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productCategoriesContainer}>
          <TouchableOpacity
            style={styles.innerTextContainer}
            onPress={()=>newOrders('Shipped')}>
           <Image style={styles.orderImageContainer} source={require("../../Assets/Icons/shippedOrders.png")}   resizeMode='contain'/>
            <Text style={styles.orderText}>Shipped Orders</Text>
            <Text style={styles.orderText}>{statusObj.Shipped}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerTextContainer}
            onPress={()=>newOrders('Delivered')}>
           <Image style={styles.orderImageContainer} source={require("../../Assets/Icons/DeliverOrders.png")}  resizeMode='contain'/>
            <Text style={styles.orderText}>Delivered Orders</Text>
            <Text style={styles.orderText}>{statusObj.Delivered}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    marginTop: '5%',
    width: '70%',
    marginLeft: '10%',
    height: '100%',
  },
  cartContainers: {
    width: '100%',
    padding: '5%',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  search: {
    borderRadius: 10,
    height: '40%',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: '#3e04c3',
  },
  orderImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '31%',
    height: '35%',
    // backgroundColor: '#3e04c3',
  },
  orderText:{
    // fontWeight:"bold",
    fontSize: 15,
    color:"#000",
    marginTop:"3%"
  },
  headerText: {
    fontSize: 20,
    color:"#fff"
  },
  outerCart: {
    width: ' 90%',
    height: '36%',
  },
  innerCartContainer: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
    marginLeft: '5%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: '1%',
  },
  innerCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%',
    marginBottom: '2%',
  },
  cartText: {
    marginLeft: '5%',
    marginTop: '3%',
    fontWeight: 'bold',
  },
  svgContainer: {
    marginLeft: '3%',
    width: '10%',
  },
  innerReport: {
    marginRight: '4%',
    fontWeight: 'bold',
  },
  innerReportText: {
    width: '32%',
  },
  innerReportBlur: {
    fontSize: 10,
    color: '#808080',
  },
  productCategories: {
    height: '70%',
    marginTop:"20%"
  },
  productCategoriesText: {
    fontWeight: 'bold',
  },
  productCategoriesContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    justifyContent: 'space-evenly',
    marginTop: '3%',
  },
  innerTextContainer: {
    width: '45%',
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 10,
  },
  popularProducts: {
    width: '90%',
    height: '15%',
    marginLeft: '5%',
    marginTop: '10%',
  },
  popularProductsText: {
    fontWeight: 'bold',
  },
  popularImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainerPopular: {
    height: '90%',
    width: '40%',
    backgroundColor: 'white',
  },
  productCategorystyle: {
    marginTop: '5%',
  },
  // productCategories: {
  //   marginTop: '5%',
  // },
});

export default OrderScreen;
