import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Styles from './LowerHeaderStyle';
import MainIcon from 'react-native-vector-icons/AntDesign';

class Header extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.mainHead}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MainIcon name={this.props.lefticon} size={25} color="#A82424" />
        </TouchableOpacity>
        <Text style={Styles.mainHeading}>{this.props.subTitle}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(this.props.rightIcononPress)}>
          <MainIcon name={this.props.righticon} size={25} color="#A82424" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
