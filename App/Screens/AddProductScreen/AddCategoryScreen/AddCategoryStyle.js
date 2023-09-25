import {StyleSheet} from 'react-native';
import { GlobalStyles } from '../../../Assets/Colors/Color';


const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  textContainer: {
    fontStyle: 'bold',
  },
  label: {
    marginLeft: '3%',
    marginTop: '10%',
    fontWeight: 'bold',
    color: '#000',
  },
  inputTexts: {
    borderBottomWidth: 1,
    width: '94%',
    marginLeft: '3%',
    height: 40,
    marginBottom: 40,
    marginTop: '5%',
  },
  offerPriceButton: {
    width: '40%',
    alignSelf: 'center',
    marginBottom: 40,
    marginTop: '50%',
  },
  addAmount: {
    backgroundColor: GlobalStyles.colors.red100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  addAmountText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default styles;
