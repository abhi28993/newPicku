import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {GlobalStyles} from '../../Assets/Colors/Color';
import * as StringC from '../../Assets/Constant/StringConstant';
import {getCategory} from '../../Services/categoryService';
import {useIsFocused} from '@react-navigation/native';

const CategoryEdit = props => {
  const [Category, setCategories] = useState([]);
  const isFocused = useIsFocused();

  const Load = () => {
    getCategory()
      .then(resp => {
        if (resp.data.data && resp.data.data.length) {
          setCategories([...resp.data.data]);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    Load();
  }, [setCategories, isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemListContainer}>
        <View
          style={{
            justifyContent: 'space-around',
            alignContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={styles.title}>Category</Text>
        </View>
      </View>
      <View style={{alignItems:"center", backgroundColor:GlobalStyles.colors.green100, width:'25%', height:'5%',alignSelf:'center',justifyContent:"center", marginTop:'10%', borderRadius:20}}>
        <Text style={{fontSize:20, color:"#fff"}}>Save</Text>
      </View>
    </SafeAreaView>
  );
};

export default CategoryEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  headerText: {
    color: '#fff',
    flex: 1,
    fontSize: 19,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  itemListContainer: {
    backgroundColor: '#fff',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    marginTop: '2%',
    padding: '3%',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 6,
    justifyContent:"center",
    alignSelf:'center'
  },
  title: {
    fontSize: 22,
    backgroundColor: 'white',
    width: '90%',
  },

  cartContainers: {
    width: '100%',
    padding: '3%',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
  },
  imageContainer: {
    width: '90%',
    height: '19%',
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
  EditContainer: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#c6affc',
  },
  detailContainer: {
    justifyContent: 'center',
    paddingRight: '1%',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.error50,
  },
});
