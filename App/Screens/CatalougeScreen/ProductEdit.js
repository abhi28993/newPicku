import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  Alert,
  Image,
  ImageBackground,
  FlatList,
  Platform,
} from 'react-native';
// import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import {getCategory} from '../../Services/categoryService';
import {useIsFocused} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import {createProduct} from '../../Services/productService';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Modal} from 'react-native';
import {Pressable} from 'react-native';
import {getFiles, uploadFile, uploadImage} from '../../Services/commonService';
import {basePath} from '../../Services/env';

import {GlobalStyles} from '../../Assets/Colors/Color';

const ProductEdit = () => {
    console.log("test edit product")
  const [product, setProduct] = useState({
    name: '',
    catId: '',
    price: '',
    offerPrice: [],
    varients: [],
    description: '',
    images: [],
  });
  const [cat, setCat] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [webImageModal, setwebImageModal] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [modalObj, setModalObj] = useState({});

  const isFocused = useIsFocused();
  useEffect(() => {
    load();
  }, [isFocused, setCat]);

  const accessGallery = () => {
    setwebImageModal(true), setModalVisible(false);
    loadImage();
  };
  const accessModal = (type, index = -1) => {
    setModalVisible(true);
    modalObj.type = type;
    modalObj.index = index;
    setModalObj({...modalObj});
  };

  const load = async () => {
    try {
      let resp = await getCategory();

      if (resp.data && resp.data.data.length) {
        let data = resp.data.data;
        setCat([...data]);
        console.log(data, cat);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandlear = (key, value) => {
    product[key] = value;
    setProduct({...product});
  };

  const errorHandle = () => {
    if (product.name === '') {
      console.log('name is requied');
      return true;
    } else if (product.price === '') {
      console.log('price is requied');
      return true;
    } else if (product.catId === '') {
      console.log('Categories is requied');
      return true;
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    if (errorHandle()) return;
    createProduct(product)
      .then(response => {
        console.log('success', response.data.data);
      })
      .catch(err => {
        console.log('error', err);
      });
    console.log('product data===========>', product);
  };

  const dynamicChangeHandler = (type, index, key, value) => {
    product[type][index][key] = value;
    setProduct({...product});
  };

  const dynamicDelete = (type, index) => {
    product[type].splice(index, 1);
    setProduct({...product});
  };

  const addOffersPrices = () => {
    product.offerPrice.push({price: '', qty: ''});
    setProduct({...product});
  };

  const addVarients = () => {
    product.varients.push({color: '', size: ''});
    setProduct({...product});
  };

  const OpenCamera = async type => {
    setModalVisible(false);
    uploadImage(type)
      .then( resp => {
        console.log('uploaded file==========================',resp );
        selectedImage(resp)
      })
      .catch(err => {
        console.log('err===============', err);
      });
  };

  const loadImage = () => {
    getFiles()
      .then(resp => {
        console.log('file data ==========', resp.data);
        setImageList([...resp.data.data]);
      })
      .catch(err => {
        console.log('error files', JSON.stringify(err));
      });
  };

  const selectedImage = item => {
    if (modalObj.type == 'varient')
      product.varients[modalObj.index].image = item.path;
    if (modalObj.type == 'product') {
      if (modalObj.index >= 0) product.images[modalObj.index] = item.path;
      else product.images.push(item.path);
    }
    setProduct({...product});
  };

  const renderItem = ({item}) => {
    const url = getImagePath(item.path);
    return (
      <View style={styles.imageItem}>
        <TouchableOpacity onPress={() => selectedImage(item)}>
          <Image source={{uri: url}} style={styles.imageItem} />
        </TouchableOpacity>
      </View>
    );
  };

  const getImagePath = p => basePath + '/file/load/' + p;

  return (
    <View style={styles.conatiner}>
      <ScrollView>
        <View style={styles.textContainer}>
          <View style={styles.accessContainer}>
            {product.images
              ? product.images.map((img, i) => (
                  <View key={'prod' + i}>
                    <TouchableOpacity
                      onPress={() => accessModal('product', i)}
                      style={styles.uploadText}>
                      <Image
                        source={{uri: getImagePath(img)}}
                        style={{width: 100, height: 100}}
                      />
                    </TouchableOpacity>
                  </View>
                ))
              : ''}
            <View>
              <TouchableOpacity
                onPress={() => accessModal('product')}
                style={styles.uploadText}>
                <Image
                  source={require('../../Assets/Icons/addCamera.png')}
                  style={{width: 100, height: 100}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.label}>Product Name</Text>
          <TextInput
            style={styles.inputText}
            value={product.name}
            vval={errorHandle}
            name="Add Catalouge"
            onChangeText={e => changeHandlear('name', e)}
          />
          <SelectDropdown
            data={cat}
            defaultButtonText="Product Category"
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            vval={errorHandle}
            dropdownStyle={styles.dropdownStyle} // Style for the dropdown content
            rowStyle={styles.rowStyle} // Style for each dropdown option
            rowTextStyle={styles.rowTextStyle} // Style for the text inside each dropdown option
            onSelect={selectedItem => {
              changeHandlear('catId', selectedItem._id);
            }}
            rowTextForSelection={item => item.name}
            buttonTextAfterSelection={item => item.name}
          />
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.inputTexts}
            placeholder="Price"
            value={product.price}
            vval={errorHandle}
            // name="price"
            onChangeText={e => changeHandlear('price', e)}
          />
          {product.offerPrice.map((offer, index) => {
            return (
              <View
                key={'offer' + index}
                style={{flexDirection: 'row', paddingLeft: 8}}>
                <TextInput
                  style={styles.inputTextDiscount}
                  placeholder="Discount Price"
                  value={offer.price}
                  name="Discount Price"
                  onChangeText={e =>
                    dynamicChangeHandler('offerPrice', index, 'price', e)
                  }
                />
                <TextInput
                  style={styles.inputTextDiscount}
                  placeholder="Product Unit"
                  value={offer.qty}
                  name="Product Unit"
                  onChangeText={e =>
                    dynamicChangeHandler('offerPrice', index, 'qty', e)
                  }
                />
                {/* <Button onPress={() => setModalVisible(true)} title="Test" /> */}
                <Text
                  style={{flex: 1, marginTop: 10, marginLeft: 50}}
                  onPress={() => dynamicDelete('offerPrice', index)}>
                  X
                </Text>
              </View>
            );
          })}
          <View style={styles.offerPriceButton}>
            <Button
              color={GlobalStyles.colors.primary500}
              title="Add Offer prices"
              onPress={addOffersPrices}
            />
          </View>

          {product.varients.map((varient, index) => {
            return (
              <View
                key={'varient' + index}
                style={{flexDirection: 'row', paddingLeft: 8}}>
                <TextInput
                  style={styles.inputTextVarients}
                  placeholder="Color"
                  value={varient.color}
                  name="Color"
                  onChangeText={e =>
                    dynamicChangeHandler('varients', index, 'color', e)
                  }
                />
                <TextInput
                  style={styles.inputTextVarients}
                  placeholder="Size"
                  value={varient.size}
                  name="Size"
                  onChangeText={e =>
                    dynamicChangeHandler('varients', index, 'size', e)
                  }
                />
                <TextInput
                  style={styles.inputTextVarients}
                  placeholder="Price"
                  value={varient.size}
                  name="Price"
                  onChangeText={e =>
                    dynamicChangeHandler('varients', index, 'price', e)
                  }
                />

                <View style={styles.accessContainer}>
                  <TouchableOpacity
                    onPress={() => accessModal('varient', index)}
                    style={styles.uploadText}>
                    {varient.image ? (
                      <Image
                        source={{uri: getImagePath(varient.image)}}
                        style={styles.varientImage}
                      />
                    ) : (
                      <Image
                        source={require('../../Assets/Icons/addCamera.png')}
                        style={{width: 60, height: 60}}
                      />
                    )}
                    {/* Optional: You can also add text below the image */}
                    {/* <Text></Text> */}
                  </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                  <Text onPress={() => dynamicDelete('varients', index)}>
                    X
                  </Text>
                </View>
              </View>
            );
          })}
          <View style={styles.offerPriceButton}>
            <Button
              color={GlobalStyles.colors.primary500}
              title="Add Product Varients"
              onPress={addVarients}
            />
          </View>
          <Text style={styles.label}>Product Details</Text>
          <TextInput
            style={styles.inputTexts}
            value={product.description}
            name="decription"
            onChangeText={e => changeHandlear('description', e)}
          />
        </View>
        <View style={styles.submitButton}>
          <Button
            color={GlobalStyles.colors.primary500}
            title="Add"
            onPress={onSubmit}
          />
        </View>
      </ScrollView>

      <Modal
        visible={webImageModal}
        onRequestClose={() => {
          setwebImageModal(!webImageModal);
        }}
        animationType="slide"
        transparent={false}>
        <View style={styles.modalContainerG}>
          <View style={styles.modalContentG}>
            <View style={styles.modalTextG}>
              <Pressable
                onPress={() => setwebImageModal(!webImageModal)}
                style={styles.closeButtonG}>
                <Text style={styles.closeButtonTextG}>Close</Text>
              </Pressable>
            </View>
            {/* <ScrollView> */}
            <FlatList
              data={imageList}
              renderItem={renderItem}
              numColumns={5}
              keyExtractor={(item, index) => index.toString()}></FlatList>
            {/* </ScrollView> */}
          </View>
        </View>
      </Modal>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={!modalVisible}
        animationType="fade" // You can change the animation type as per your preference
      >
        <View style={styles.modalContainer}>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.modalContents}>
            <ImageBackground
              source={require('../../Assets/Icons/close.png')}
              style={styles.iconContainerClose}
              resizeMode="contain">
              <Text style={styles.closeButton}></Text>
            </ImageBackground>
            {/* <Text style={styles.closeButton}>X</Text> */}
          </Pressable>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => accessGallery()}
              style={styles.accessIconContainer}>
              <Image
                source={require('../../Assets/Icons/cloud.png')}
                style={styles.iconContainer}
                resizeMode="contain"
              />
              {/* Optional: You can also add text below the image */}
              <Text>Cloud</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => OpenCamera('camera')}
              style={styles.accessIconContainer}>
              <Image
                source={require('../../Assets/Icons/camera.png')}
                style={styles.iconContainer}
                resizeMode="contain"
              />
              {/* Optional: You can also add text below the image */}
              <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => OpenCamera('gallery')}
              style={styles.accessIconContainer}>
              <Image
                source={require('../../Assets/Icons/gallery.png')}
                style={styles.iconContainer}
                resizeMode="contain"
              />
              {/* Optional: You can also add text below the image */}
              <Text>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* image library images */}
    </View>
  );
};
export default ProductEdit;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  scrollViewContent: {
    paddingVertical: 20,
    // alignItems: 'center',
  },
  buttonStyle: {
    width: '94%',
    height: 40,
    marginTop: '5%',
    marginBottom: '5%',
    alignSelf: 'center',
    backgroundColor: GlobalStyles.colors.primary500,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  accessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    padding: 10,
    width: 100,
    color: 'white',
    fontSize: 1,
  },
  buttonTextStyle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  dropdownStyle: {
    width: '94%',
    borderRadius: 8,
    marginTop: 8,
    backgroundColor: 'white',
  },
  offButton: {
    height: 10,
    width: 20,
    left: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the modal
  },
  modalContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '80%',
    padding: '5%',
    height: '20%',
  },
  modalContents: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    width: '80%',
    paddingRight: '2%',
  },
  accessIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: '35%',
    width: '100%',
  },
  iconContainerClose: {},
  closeButton: {
    alignSelf: 'flex-end',
    paddingRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  uploadText: {
    alignContent: 'center',
    marginLeft: 10,
  },
  inputText: {
    borderBottomWidth: 1,
    width: '94%',
    marginLeft: '3%',
    height: 40,
  },
  inputTexts: {
    borderBottomWidth: 1,
    width: '94%',
    marginLeft: '3%',
    height: 40,
    marginBottom: 40,
  },
  inputTextDiscount: {
    flex: 1,
    borderBottomWidth: 1,
    width: '94%',
    marginLeft: '3%',
    height: 40,
    marginBottom: 40,
  },
  inputTextVarients: {
    flex: 1,
    borderBottomWidth: 1,
    width: '94%',
    marginLeft: '3%',
    height: 40,
    marginBottom: 40,
  },
  submitButton: {
    flex: 1,
    width: '94%',
    marginLeft: '3%',
    height: 40,
    marginBottom: 40,
  },
  label: {
    marginLeft: '3%',
  },
  offerPriceButton: {
    width: '94%',
    alignSelf: 'center',
    marginBottom: 40,
  },

  modalContainerG: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContentG: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  modalText: {
    backgroundColorG: '#3e04c3',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    // alignContent:"space-between"
  },
  modalheadingTextG: {
    color: '#fff',
    textAlignVertical: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  closeButtonG: {
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonTextG: {
    color: '#fff',
  },
  modalTextG: {
    backgroundColor: '#3e04c3',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    // alignContent:"space-between"
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#f0f0f0',
  },
  imageItem: {
    width: 150,
    height: 150,
    margin: 4,
  },

  varientImage: {
    width: 60,
    height: 60,
    margin: 4,
  },
});
