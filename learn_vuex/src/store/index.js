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
  modules:{
    home,
    user 
  }
});

export default store;