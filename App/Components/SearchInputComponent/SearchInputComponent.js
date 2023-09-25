import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './SearchInputStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LeftIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TextInputComponent = props => {
  return (
    <View>
      <View style={styles.mainStyle}>
        <LeftIcon
          style={styles.iconstyleleft}
          name={props.leftIconName}
          size={props.iconSize}
          color="#9c9c9c"
        />
        <TextInput
          onChange={props.onChange}
          style={styles.inptStyle}
          placeholderTextColor="#9c9c9c"
          name={props.fieldname}
          placeholder={props.placename}
          onChangeText={props.onChngText}
          value={props.vval}
          secureTextEntry={props.txtentry}
          keyboardType={props.keyboardType}
        />
        {/* <Icon
          style={styles.iconstyle}
          name={props.rightIconName}
          size={props.iconSize}
          onPress={props.iconClick}
        /> */}
      </View>
      <View style={styles.errormain}>
        <Text style={styles.errortext}>{props.validd}</Text>
      </View>
    </View>
  );
};

export default TextInputComponent;
