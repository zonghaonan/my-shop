import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgColor: '#ff8198',
    fontColor: 'black',
    tabColor: '#ff5777',
    cartList: [],
    tabBarActive: 0
  },
  mutations,
  actions,
  getters,
  modules: {}
})