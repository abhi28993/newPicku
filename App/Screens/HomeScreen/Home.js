import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Styles from './HomeStyle';
import * as StringC from '../../Assets/Constant/StringConstant';
import Header from '../../Components/HeaderComponent/HeaderComponent';
import CustomSearch from '../../Components/SearchInputComponent/SearchInputComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
const PROP = [
  {
    key: 'relevance',
    text: 'Relevance',
  },
  {
    key: 'all',
    text: 'All',
  },
  {
    key: 'anytime',
    text: 'Any time',
  },
  {
    key: 'new',
    text: 'New',
  },
  {
    key: 'top',
    text: 'Top',
  },
  {
    key: 'trending',
    text: 'Trending',
  },
  {
    key: 'best',
    text: 'Best',
  },
];
const OPTIONS = [
  {
    key: 'savePost',
    text: 'Save Post',
    icon: 'bookmark-border',
  },
  {
    key: 'hidePost',
    text: 'Hide Post',
    icon: 'highlight-off',
  },
  {
    key: 'reportTime',
    text: 'Report time',
    icon: 'info-outline',
  },
  {
    key: 'blockUser',
    text: 'Block User',
    icon: 'person-outline',
  },
  {
    key: 'copyLink',
    text: 'Copy Link',
    icon: 'insert-link',
  },
];
class Home extends Component {
  constructor() {
    super();
    this.state = {
      modalVisibleFilter: false,
      modalVisibleOptions: false,
      radioValue: null,
    };
  }
  //for display filter popup
  showFilter() {
    this.setState({modalVisibleFilter: true});
  }
  //for close filter popup
  closeFilter() {
    this.setState({modalVisibleFilter: false});
  }
  //for display posts options popup
  showOptions() {
    this.setState({modalVisibleOptions: true});
  }
  //for close filter popup
  closeOptions() {
    this.setState({modalVisibleOptions: false});
  }
  // for popular channel flatlist
  renderItems(item) {
    let data =
      item.mediakey === '1' ? (
        <Image style={Styles.mainImage} source={item.postdata} />
      ) : (
        <Text style={Styles.mainTextStyle}>{item.postdata}</Text>
      );
    const totalLike = item.like - item.disLike;
    return (
      <View>
        <View>
          <View style={Styles.mainInner}>
            <Image style={Styles.dpPic} source={item.profilePic} />
            <View style={Styles.headerMain}>
              <Text style={Styles.postName}>{item.name}</Text>
              <Text style={Styles.postNickName}>
                {item.nickName}-{item.time}
              </Text>
            </View>
            <Icon
              onPress={() => this.showOptions()}
              color="#2B2D42"
              name="more-vert"
              size={25}
            />
          </View>
          <View>
            <Text style={Styles.postTitle}>{item.title}</Text>
            {data}
          </View>
          <View style={Styles.iconsMain}>
            <View style={Styles.bottomMain}>
              <TouchableOpacity>
                <Image source={require('../../Assets/Icons/up.png')} />
              </TouchableOpacity>
              <Text>{totalLike}</Text>
              <TouchableOpacity>
                <Image source={require('../../Assets/Icons/down.png')} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate(StringC.COMMENT_LIST_SCREEN)
              }
              style={Styles.bottomMain}>
              <Image source={require('../../Assets/Images/comment.png')} />
              <Text>{item.comment}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.bottomMain}>
              <Image source={require('../../Assets/Images/share.png')} />
            </TouchableOpacity>
            {/* <TouchableOpacity style={Styles.bottomMain}>
              <Image source={require('../../Assets/Images/comment.png')} />
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={Styles.lineViewItem} />
      </View>
    );
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={Styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisibleFilter}>
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.modalheader}>
                <View style={Styles.modalHeading}>
                  <Text>{StringC.sortFilterText}</Text>
                </View>
                <Icon
                  onPress={() => this.closeFilter()}
                  color="#000"
                  name="close"
                  size={35}
                />
              </View>
              <View style={Styles.lineView} />
              <View style={Styles.customHeight} />
              <View>
                {PROP.map(res => {
                  return (
                    <View key={res.key}>
                      <TouchableOpacity
                        style={Styles.containerr}
                        onPress={() => {
                          this.setState({
                            radioValue: res.key,
                          });
                        }}>
                        <Text style={Styles.radioText}>{res.text}</Text>
                        <View style={Styles.radioCircle}>
                          {this.state.radioValue === res.key && (
                            <View style={Styles.selectedRb}>
                              <Icon color="#fff" name="check" size={15} />
                            </View>
                          )}
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </Modal>
        {/* <Modal for Options> */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisibleOptions}>
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.modalheaderTwo}>
                <Icon
                  onPress={() => this.closeOptions()}
                  color="#000"
                  name="close"
                  size={20}
                />
              </View>
              <View>
                {OPTIONS.map(res => {
                  return (
                    <View key={res.key}>
                      <TouchableOpacity style={Styles.OptionsContainer}>
                        <Icon name={res.icon} size={25} color="#000" />
                        <View style={Styles.optionPopup} />
                        <Text style={Styles.radioText}>{res.text}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
              <View style={Styles.customHeightOption} />
            </View>
          </View>
        </Modal>
        {/* <ScrollView> */}
        <Header
          onToggle={() => navigation.toggleDrawer()}
          leftIcon={StringC.menuIcon}
          rightIcon={StringC.notifyicon}
          navigation={navigation}
        />
        <CustomSearch
          placename={'Search'}
          iconSize={25}
          rightIconName={'search'}
        />
        <View style={Styles.pageMain}>
          <View style={Styles.filterMain}>
            <TouchableOpacity
              style={Styles.filterClick}
              onPress={() => this.showFilter()}>
              <Text style={Styles.filterText}>{StringC.filter}</Text>
              <Icon color="#000000" name="expand-more" size={25} />
            </TouchableOpacity>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={Styles.flatCustom}
            data={[
              {
                id: '1',
                name: 'Lora Danel',
                postdata: require('../../Assets/Images/lap.jpg'),
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '1',
              },
              {
                id: '2',
                name: 'Lex Friedman',
                postdata: StringC.loremText,
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '2',
              },
              {
                id: '3',
                name: 'Joe Rogan',
                postdata: require('../../Assets/Images/lap.jpg'),
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '1',
              },
              {
                id: '4',
                name: 'Jordan Peterson',
                postdata: StringC.loremText,
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '2',
              },
              {
                id: '5',
                name: 'Breakfast Club',
                postdata: require('../../Assets/Images/lap.jpg'),
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '1',
              },
              {
                id: '6',
                name: 'Lex Friedman',
                postdata: StringC.loremText,
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '2',
              },
              {
                id: '7',
                name: 'Joe Rogan',
                postdata: require('../../Assets/Images/lap.jpg'),
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '1',
              },
              {
                id: '8',
                name: 'Jordan Peterson',
                postdata: StringC.loremText,
                nickName: 'loral24',
                time: '3h',
                profilePic: require('../../Assets/Images/pic.png'),
                title: 'How to Learn Free Education',
                like: '5',
                disLike: '8',
                comment: '3',
                mediakey: '2',
              },
            ]}
            renderItem={({item}) => this.renderItems(item)}
            keyExtractor={item => item.id}
          />
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default Home;
