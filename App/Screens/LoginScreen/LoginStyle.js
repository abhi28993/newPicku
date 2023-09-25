import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  },
  logo: {
     margin:"10%",
     height:"50%",
     alignSelf: 'center',
     resizeMode:'contain',
  },
  btnnext:{
    margin:"30%",
    //  height:"70%",
     width:'100%',
     alignSelf: 'center',
     resizeMode:'contain',
  },
  inputArea: {
    marginTop: '1%',
    width:'100%',
    margin:'10%',
    alignSelf: 'center',
  },
  headerMain: {
    height: '30%',
    width: '100%',
  },
  lowerMain: {
    height: '70%',
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#fff',
  },
  mainheading: {
    fontSize: 30,
    color: '#2B2D42',
    // marginTop: '5%',
    margin:'20%',
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  googlebtn: {
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#1d1b2e',
    height: 50,
    width: 150,
  },
  forgotmain: {
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
    marginRight: '6%',
  },
  forgotText: {
    color: 'red',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'right',
  },
  googleImage: {
    height: 25,
    width: 25,
  },
  googleBtntext: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
    marginLeft: 5,
  },
  dontAccountmain: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '4%',
    marginBottom: '10%',
  },
  dontAccountText: {
    color: '#242424',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  signUpText: {
    color: '#A82424',
    fontSize: 16,
    marginLeft: 5,
    fontFamily: 'Poppins-Bold',
  },
  socialTextStyle: {
    fontSize: 20,
    marginTop: '4%',
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  appleGoogleMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '4%',
    marginLeft: 15,
    marginRight: 15,
  },
  btnIcon: {
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
