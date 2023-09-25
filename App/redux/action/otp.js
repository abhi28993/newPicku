export const otpLogin = (obj) => {

  return {
    type: 'OTPREQUIRED',
    payload: obj,
  };
};

export const loginData = (obj) => {
    return {
      type: 'LOGINDATA',
      payload: obj,
    };
  };
