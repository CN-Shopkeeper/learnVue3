import {createStore} from 'vuex'

const store = createStore({
  state(){
    return{
      counter:0,
      name: "shopkeeper"
    }
  },
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  }
});

export default store;