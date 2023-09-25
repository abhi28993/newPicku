import React, { useEffect ,useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {createCategory, updateCategory} from '../../../Services/categoryService';
import * as StringC from '../../../Assets/Constant/StringConstant';
import styles from './AddCategoryStyle';

const AddCategory = props => {
  const [catName, setCatName] = useState('');
  const [catId, setCatId] = useState('');
  
  const changeHandlear = e => {
    console.log(e);
    setCatName(e);
  };

  useEffect(() => {
    if (global.catObj && global.catObj._id) {
      props.navigation.setOptions({headerTitle: 'Edit Category'})
      changeHandlear(global.catObj.name);
      setCatId(global.catObj._id)
    }
  },[]);

  // console.log('cat route==================',props.navigation);

  const onSubmit = () => {
    console.log('categort name==========', catName);
    if(catId){
    updateCategory({name: catName,_id:catId})
      .then(resp => {
        props.navigation.navigate(StringC.ADD_CATALOUGE_SCREEN);
        console.log('successfully updated', resp);
      })
      .catch(err => {
        console.log('error while updating catalouge', err);
      });
    }else{
      createCategory({name: catName})
      .then(resp => {
        props.navigation.navigate(StringC.ADD_CATALOUGE_SCREEN);
        console.log('successfully added', resp);
      })
      .catch(err => {
        console.log('error while creating catalouge', err);
      });
    }
  };
  return (
    <View style={styles.conatiner}>
      <Text style={styles.label}>Add Category</Text>

      <TextInput
        style={styles.inputTexts}
        placeholder="catalouge name"
        value={catName}
        name="Add Catalouge"
        onChangeText={changeHandlear}
      />
      <View style={styles.offerPriceButton}>
        <TouchableOpacity style={styles.addAmount} onPress={onSubmit}>
          <Text style={styles.addAmountText}>{catId?'Update':'Add'} Category</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCategory;
