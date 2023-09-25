

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const ShippedOrder = ({navigation}) => {

  const OrderDetail =()=>navigation.navigate("orderDetail")

  const DATA = [
    {
      id: '001012023',
      name: 'iphone 13',
      timing: 'Today, 10:10 AM',
      image: require('../../Assets/Images/slidetwo.png'),
      paymentMethod: 'COD',
    },
    {
      id: '004012023',
      name: 'iphone 14',
      timing: 'Today, 08:10 AM',
      image: require('../../Assets/Images/slidethree.png'),
      paymentMethod: 'COD',
    },
    {
      id: '101102023',
      name: 'iphone 15',
      timing: 'Today, 01:10 PM',
      image: require('../../Assets/Images/lap.jpg'),
      paymentMethod: 'Online',
    },
    {
      id: '008012023',
      name: 'iphone 16',
      timing: 'Today, 03:10 PM',
      image: require('../../Assets/Images/slideone.png'),
      paymentMethod: 'Online',
    },
    {
      id: '001112023',
      name: 'iphone 17',
      timing: 'Today, 05:50 PM',
      image: require('../../Assets/Images/slidethree.png'),
      paymentMethod: 'COD',
    },
    {
      id: '001212023',
      name: 'iphone 18',
      timing: 'Today, 05:50 PM',
      image: require('../../Assets/Images/slideone.png'),
      paymentMethod: 'COD',
    },
    {
      id: '002512023',
      name: 'iphone 19',
      timing: 'Today, 05:50 PM',
      image: require('../../Assets/Images/slidetwo.png'),
      paymentMethod: 'COD',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.statusContainer}>
          <Text style={styles.orderText}>Order #{item.id}</Text>
          <Text>{item.timing}</Text>
        </View>
        <View style={styles.statusContainers}>
          <View style={styles.statusInnerContainer}>
            <View style={styles.productContainer}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View>
                <Text>{item.name}</Text>
                <Text>{item.timing}</Text>
                <TouchableOpacity style={styles.detailContainer} onPress={OrderDetail}>
                  <Text style={styles.detailsText}> More Details</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text>{item.paymentMethod}</Text>
            </View>
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
        contentContainerStyle={{flexGrow: 0}}
      />
    </View>
  );
};

export default ShippedOrder;

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
    height: '100%',
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
    borderRadius: 2,
    elevation: 1,
    backgroundColor: '#c6affc',
  },
  detailsText: {
    fontWeight: '700',
    color: '#000',
  },
});
