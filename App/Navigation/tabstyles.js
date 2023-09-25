import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  buttomBarIcons: {
    width: 25.8,
    height: 24,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttomBarMenuView: {
    height: 50,
    width: 50,
    borderRadius: 30,
    paddingTop: 13,

  },
  buttomBarMenuIcons: {
    paddingTop: 10,
    width: 70,
    height: 70,
    marginBottom: 30,
    overflow: 'hidden',
    borderRadius: 150 / 2,
  },
  menuText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginLeft: '3%',
  },
  profilePic: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#A82424',
    alignSelf: 'center',
  },
  profileText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '4%',
  },
  itemView: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  drawerBack: {
    backgroundColor: '#2B2D42',
  },
  picMarginTop: {
    marginTop: '5%',
  },
  menuMain: {
    marginLeft: '8%',
    marginTop: '8%',
  },
  bottomMenu: {
    marginTop: '80%',
    marginLeft: '8%',
  },
  crossMain: {
    alignItems: 'flex-end',
    padding: 10,
  },
});
export default styles;
