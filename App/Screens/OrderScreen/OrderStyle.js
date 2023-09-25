import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00000095',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 30,
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
    height: 120,
    width: 90,
    borderWidth: 2,
  },
  lineView: {
    height: 1,
    backgroundColor: '#DFDFDF',
    marginTop: '2%',
    marginBottom: -20,
  },
  lineViewItem: {
    height: 1,
    backgroundColor: '#DFDFDF',
    marginTop: '3%',
    marginBottom: '3%',
  },
  filterMain: {
    alignItems: 'flex-end',
    marginTop: -15,
  },
  pageMain: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  filterClick: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    color: '#2B2D42',
    fontFamily: 'Poppins-Medium',
  },
  containerr: {
    marginTop: '2%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioText: {
    marginRight: 35,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  radioCircle: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#2B2D42',
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
  modalheader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalHeading: {
    width: '95%',
  },
  postName: {
    color: '#2B2D42',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  postNickName: {
    color: '#2B2D42',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  mainInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  headerMain: {
    width: '80%',
    marginLeft: '4%',
  },
  postTitle: {
    color: '#2B2D42',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    marginTop: '1%',
    marginBottom: '1%',
  },
  iconsMain: {
    flexDirection: 'row',
    marginTop: '3%',
  },
  bottomMain: {
    flexDirection: 'row',
    width: '22%',
  },
  flatCustom: {
    height: '70%',
    marginLeft: '8%',
    marginRight: '8%',
  },
  dpPoc: {
    height: 35,
    width: 35,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#A82424',
  },
  mainText: {
    height: 200,
    width: 320,
  },
  mainTextStyle: {
    color: '#2B2D42',
    fontSize: 12,
    fontFamily: 'Poppins-Light',
  },
});

export default styles;
