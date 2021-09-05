const homeModule = {
  namespaced:true,
  state(){
    return {
      counter: 100
    }
  },
  getters:{
    doubleHomeCounter(state,getters,rootState,rootGetters){
      return state.counter*2;
    }
  },
  mutations:{
    increment(state){
      state.counter++;
    }
  },
  actions:{
    // incrementAction(context){
    //   context.commit("increment")
    // },
    incrementAction({commit, dispatch, state, getters, rootState, rootGetters}){
      commit("increment")
      commit("increment",null,{root: true})
    }
  }
}

export default homeModule