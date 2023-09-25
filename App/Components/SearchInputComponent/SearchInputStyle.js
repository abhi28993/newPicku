import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainStyle: {
    flexDirection: 'row',
    margin: '2%',
    height: 45,
    borderRadius: 50,
    marginLeft: '4%',
    marginRight: '4%',
    backgroundColor: '#FEFEFE',
    borderColor: '#DFDFDF',
    borderWidth: 2,
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderColor:"#000"
  },
  cmpmain: {
    margin: 10,
    borderRadius: 10,
    marginLeft: '8%',
    marginRight: '8%',
  },
  inptStyle: {
    flex: 1,
    padding: 10,
    width: '90%',
    fontFamily: 'Poppins-Medium',
  },
  iconstyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingRight: 20,
  },
  iconstyleleft: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
  },
  errormain: {
    paddingLeft: 35,
  },
  errortext: {
    color: 'red',
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
