import {createStore} from 'vuex'

const store = createStore({
  state(){
    return{
      counter:0,
      name: "shopkeeper",
      books:[
        {name:"vuejs",price:20,count:3},
        {name:"webpack",price:240,count:1},
        {name:"react",price:260,count:5},
        {name:"node",price:290,count:6},
      ],
      discount: 0.8
    }
  },
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  getters:{
    totalPrice(state,getters){
      let totalPrice=0;
      for (const book of state.books){
        totalPrice+=book.count*book.price
      }
      return totalPrice * getters.currentDiscount;
    },
    currentDiscount(state){
      return state.discount*0.9;
    },
    totalPriceForCountN(state,getters){
      return function(n){
        let totalPrice=0;
        for (const book of state.books){
          if (book.count>=n){
            totalPrice+=book.count*book.price
          }
        }
        return totalPrice * getters.currentDiscount;
      }
    },
    nameInfo(state){
      return `name: ${state.name}`
    },
    counterInfo(state){
      return `counter: ${state.counter}`
    },
  }
});

export default store;