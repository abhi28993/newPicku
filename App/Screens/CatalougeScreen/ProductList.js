import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  Touchable,
  TouchableHighlight,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GlobalStyles} from '../../Assets/Colors/Color';
import * as StringC from '../../Assets/Constant/StringConstant';
import {getProduct} from '../../Services/productService';
import {basePath} from '../../Services/env';

const ProductList = props => {
  const [Products, setProducts] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    getProduct(props.route.params?.catId || '')
      .then(resp => {
        console.log('resp product========', resp.data.data);
        if (resp.data.data && resp.data.data.length) {
          setProducts([...resp.data.data]);
        } else {
          setProducts([]);
        }
      })
      .catch(err => console.log('err while fetching data', err));
    // }
  }, [isFocused]);

  const getImagePath = p => basePath + '/file/load/' + p;
  const EditProduct = item => {
    global.product = Object.assign({}, item);
    props.navigation.navigate(StringC.ADD_PRODUCT_STACK);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.statusContainers}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: getImagePath(item.images[0])}}
              style={styles.image}
            />
          </View>
          <View style={styles.productContainer}>
            <Text style={{fontWeight: '500', color: '#000'}}>{item?.name}</Text>
            <Text style={{fontWeight: '500', color: '#000'}}>
              Rs {item?.Amount}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <Text onPress={EditProduct} style={{height: '50%'}}>
              <Image
                source={require('../../Assets/Icons/pencil.png')}
                style={styles.detailsText}
                resizeMode="contain"
              />
            </Text>
            <Text onPress={EditProduct} style={{height: '50%'}}>
              <Image
                source={require('../../Assets/Icons/delete.png')}
                style={styles.detailsText}
                resizeMode="contain"
              />
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContainers}>
        <Text
          style={{
            color: '#fff',
            flex: 1,
            fontSize: 19,
            fontWeight: 'bold',
            fontStyle: 'normal',
          }}>
          Product
        </Text>
        <Text
          style={{color: '#fff'}}
          onPress={() => {
            props.navigation.navigate(StringC.ADD_PRODUCT_STACK);
            global.product = null;
          }}>
          + Add
        </Text>
      </View>
      <FlatList
        data={Products}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        contentContainerStyle={{flexGrow: 0}}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    margin: '1%',
    padding: '3%',
    borderRadius: 10,
    shadowColor: '#00f',
    elevation: 5,
  },
  title: {
    fontSize: 22,
  },

  cartContainers: {
    width: '100%',
    padding: '4%',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
  },

  textInputStyle: {
    flexDirection: 'row',
    margin: '1%',
    height: 45,
    marginLeft: '4%',
    marginRight: '4%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.primary500,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    shadowOffset: {
      height: 5,
    },
    height: '60%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: '55%',
    borderRadius: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    maxWidth: '40%',
    marginLeft: '30%',
    marginTop: '30%',
  },
  catalougeModal: {
    padding: 10,
    fontSize: 20,
    marginLeft: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  outerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 20,
    marginTop: '5%',
    marginLeft: '5%',
    width: '90%',
    height: 140,
  },
  statusContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    paddingTop: '3%',
    width: '95%',
  },
  orderText: {
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    width: 120,
    height: 120,
  },
  detailsText: {
    width: 45,
    height: 30,
  },
  productContainer: {
    justifyContent: 'center',
    width: '50%',
    paddingLeft: '5%',
  },
  imageContainer: {
    width: '30%',
  },
  iconContainer: {
    justifyContent: 'space-between',
    width: '20%',
    paddingLeft: '8%',
  },
});

export default ProductList;
