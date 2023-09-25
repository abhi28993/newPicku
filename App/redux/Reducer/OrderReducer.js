const OrderDetail = (state = '', action) => {
    switch (action.type) {
      case 'ORDERDETAIL': {
        return Object.assign({}, state, action.payload);
      }
      default:
        return state;
    }
  };
  
  export default OrderDetail;
  