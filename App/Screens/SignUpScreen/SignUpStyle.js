import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    height:'100%'
  },
  uppermain: {
    backgroundColor: '#000',
    height: '100%',
  },
  logo: {
    margin:"10%",
    height:"50%",
    alignSelf: 'center',
    resizeMode:'contain',
  },
  lowerMain: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#fff',
  },
  mainheading: {
    fontSize: 30,
    color: '#2B2D42',
    marginTop: '5%',
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  subheading: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },

  dontAccountmain: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '8%',
    marginBottom: '10%',
  },
  dontAccountText: {
    color: '#242424',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  signUpText: {
    fontFamily: 'Poppins-Bold',
    color: '#f9364c',
    fontSize: 16,
    marginLeft: 5,
  },

  checkbox: {
    alignSelf: 'center',
  },
  checkBoxMain: {
    paddingLeft: 35,
    marginBottom: 15,
  },
  checckBoxText: {
    color: 'red',
    fontFamily: 'Poppins-Medium',
  },
  forgotmain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '4%',
  },
  forgotText: {
    fontFamily: 'Poppins-Medium',
    color: '#A82424',
    fontSize: 13,
    alignSelf: 'center',
    marginLeft: 5,
  },
  agreetext: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 11,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
    backgroundColor: '#00000095',
  },
  modalView: {
    margin: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  customHeight: {
    height: '10%',
  },
  modalMain: {
    borderColor: 'green',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 90,
    width: 90,
    borderWidth: 2,
  },
});

export default styles;
