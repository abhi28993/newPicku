import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Styles from './HeaderStyle';
import Icon from 'react-native-vector-icons/Feather';
import {NOTIFICATION_SCREEN} from '../../Assets/Constant/StringConstant';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={this.props.onToggle}>
          <Icon name={this.props.leftIcon} color="#fff" size={25} />
        </TouchableOpacity>
        <Text style={Styles.textMain}>{this.props.mainText}</Text>
        <Icon
          onPress={() => navigation.navigate(NOTIFICATION_SCREEN)}
          name="bell"
          style={Styles.marginRight}
          color="#fff"
          size={25}
        />
      </View>
    );
  }
}

export default Header;
