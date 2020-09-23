import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutation.type.js'
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // console.log(state.products);
      // for (const item of state.products) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item
      //   }
      // }

      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
        resolve('商品数量加1')
      } else {
        payload.count = 1
        payload.isChecked = true
        context.commit(ADD_TO_CART, payload)
        resolve('添加新商品')
      }
    })
  }
}