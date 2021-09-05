import {createStore} from 'vuex';
import home from './modules/home';
import user from './modules/user';
const store = createStore({
  state(){
    return {
      counter: 0
    }
  },
  mutations:{
    increment(state){
      state.counter++
    }
  },
  getters:{
    doubleCounter(state,getters,rootState,rootGetters){
      return state.counter*2;
    }
  },
  modules:{
    home,
    user 
  }
});

export default store;