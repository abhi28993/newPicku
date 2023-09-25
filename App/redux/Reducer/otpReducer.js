const otpToken = (state = '', action) => {
  switch (action.type) {
    case 'OTPREQUIRED': {
    //   console.log(state);
      return Object.assign({}, state, action.payload);
    }
    default:
      return state;
  }
};

export default otpToken;
