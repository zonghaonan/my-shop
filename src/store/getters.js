export default {
  bgStyle(state) {
    return {
      'background-color': state.bgColor
    }
  },
  fontStyle(state) {
    return {
      color: state.fontColor,
      'font-size': '16px'
    }
  },
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  }
}