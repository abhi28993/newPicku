

const loginData = (state = '', action) => {
    switch (action.type) {
      case 'LOGINDATA': {
        return Object.assign({}, state, action.payload);
      }
      default:
        return state;
    }
  };
  
  export default loginData;
  