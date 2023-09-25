import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
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
  inputArea: {
    marginTop: '8%',
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
    marginTop: '2%',
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  subheading: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '5%',
    textAlign: 'center',
  },
  backLogin: {
    color: '#14213D',
    textAlign: 'center',
    marginTop: '8%',
    fontFamily: 'Poppins-Medium',
  },
  logotick: {
    alignSelf: 'center',
    marginTop: '15%',
    marginBottom: '8%',
  },
});

export default styles;
