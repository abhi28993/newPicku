import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './ButtonStyle';
import Icon from 'react-native-vector-icons/Entypo';

const ButtonComponent = props => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={props.onPress}>
      <Icon
        name={props.iconName}
        color="#fff"
        size={25}
        style={styles.iconStyle}
      />
      <Text style={styles.textContainer}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
