import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import * as StringC from '../../Assets/Constant/StringConstant';
import Styles from './SingleChatStyle';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import LowerHeader from '../../Components/LowerHeaderComponent/LowerHeaderComponent';
import Textarea from 'react-native-textarea';
import Icon from 'react-native-vector-icons/Ionicons';

class SingleChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  // For category list
  renderItem(item) {
    let num = '2%';
    let backClr = '#f5d5d5';
    let backClrMe = '#e9eef2';
    let paddingg =
      item.userId === '1' ? (
        <View style={Styles.messageInner}>
          <View style={Styles.chatWidth} />
          <View style={Styles.timeText}>
            <Text>{item.time}</Text>
            <View
              style={[
                Styles.messagemain,
                {marginLeft: num, backgroundColor: backClrMe},
              ]}>
              <View style={Styles.rowMain}>
                <Text style={Styles.msgMain}>{item.message}</Text>
              </View>
            </View>
          </View>
          <Image style={Styles.dpPic} source={item.profilePic} />
        </View>
      ) : (
        <View style={Styles.messageInner}>
          <Image source={item.profilePic} />
          <View style={Styles.timeText}>
            <View
              style={[
                Styles.messagemain,
                {marginRight: num, backgroundColor: backClr},
              ]}>
              <View style={Styles.rowMain}>
                <Text style={Styles.msgMain}>{item.message}</Text>
              </View>
            </View>
            <Text>{item.time}</Text>
          </View>
        </View>
      );
    return (
      <View style={[Styles.listviewmain]}>
        <View style={Styles.itemMains}>{paddingg}</View>
      </View>
    );
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        <Header
          onToggle={() => this.props.navigation.toggleDrawer()}
          leftIcon={StringC.menuIcon}
          rightIcon={StringC.notifyicon}
          navigation={navigation}
        />
        <View style={Styles.lowermain}>
          <LowerHeader
            subTitle="John"
            lefticon={'arrowleft'}
            leftIcononPress={'Review'}
            navigation={navigation}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            style={Styles.flatListStyleSecond}
            data={[
              {
                id: '1',
                time: '2:30',
                message: StringC.bioLoremm,
                profilePic: require('../../Assets/Images/pic.png'),
                userId: '',
              },
              {
                id: '2',
                time: '2:31',
                message: StringC.bioLoremm,
                userId: '1',
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '3',
                time: '2:32',
                message: StringC.bioLoremm,
                userId: '',
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '4',
                time: '2:33',
                message: StringC.bioLoremm,
                userId: '1',
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '5',
                time: '2:34',
                message: StringC.bioLoremm,
                userId: '',
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '6',
                time: '2:35',
                message: StringC.bioLoremm,
                userId: '1',
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '7',
                time: '2:36',
                message: StringC.bioLoremm,
                userId: '',
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '8',
                time: '2:37',
                message: StringC.bioLoremm,
                userId: '1',
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '9',
                time: '2:36',
                message: StringC.bioLoremm,
                userId: '',
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '10',
                time: '2:37',
                message: StringC.bioLoremm,
                userId: '1',
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '11',
                time: '2:36',
                message: StringC.bioLoremm,
                userId: '',
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '12',
                time: '2:37',
                message: StringC.bioLoremm,
                userId: '1',
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '13',
                time: '2:36',
                message: StringC.bioLoremm,
                userId: '',
                profilePic: require('../../Assets/Images/pic.png'),
              },
              {
                id: '14',
                time: '2:37',
                message: StringC.bioLoremm,
                userId: '1',
                profilePic: require('../../Assets/Images/pic.png'),
              },
            ]}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={item => item.id}
          />
          <View style={Styles.sendArea}>
            <Textarea
              containerStyle={Styles.textareaContainer}
              style={Styles.linkInput}
              onChangeText={this.onChange}
              defaultValue={this.state.text}
              maxLength={300}
              placeholder={StringC.chatTextArea}
              placeholderTextColor={'#828282'}
              underlineColorAndroid={'transparent'}
            />
            <Icon name="send" size={25} color="#000000" />
          </View>
        </View>
      </View>
    );
  }
}

export default SingleChat;
