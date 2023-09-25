import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuLogoStyle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  menuContainer: {
    marginTop: 30,
    marginLeft: 25,
  },
  titleMessageContainer: {
    marginTop: 60,
    marginLeft: 25,
  },
  titleMessageStyle: {
    fontSize: 30,
    color: '#0B83E3',
    fontWeight: '700',
    lineHeight: 38,
  },
  iconFontStyle: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  iconNameStyle: {
    fontSize: 16,
    marginLeft: 10,
    lineHeight: 26,
    fontWeight: '500',
    color: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  scrollViewContainer: {
    marginLeft: 20,
    marginRight: 25,
  },
  logoContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  logoStyle: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
  },
  welcomeFontStyle: {
    color: '#fff',
    marginTop: 10,
    fontWeight: '500',
    fontSize: 15,
  },
  userFontStyle: {
    color: '#fed330',
    fontWeight: '500',
    fontSize: 15,
  },
  lineSepStyle: {
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    height: 1,
    marginBottom: 20,
  },
});

export default styles;
