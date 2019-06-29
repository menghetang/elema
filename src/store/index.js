import Vue from 'vue'
import Vuex from 'vuex'
//导入状态
import state from './stste'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

// store存储器用来存储组件之间共享的数据以及共同调用的方法
const store = new Vuex.Store({
    state,
    //修改状态方法：类似于组件methods方法
    mutations,
    // getters 类似于组件中的计算属性，用来处理state
    getters,
    // actions 类似于 mutations 用来创建方法，只不过不处理状态值，调用mutations中的方法；actions可以处理异步操作，mutations不行
    actions,
    plugins: [createPersistedState()],
  })
  //导出存储的store对象，给main.js使用
  export default store;