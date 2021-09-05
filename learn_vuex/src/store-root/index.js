import {createStore} from 'vuex'
import { INCREMENT_N } from './mutation-types';
import axios from 'axios'
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
      discount: 0.8,
      users:[]
    }
  },
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    [INCREMENT_N](state,payload){
      state.counter+=payload
    },
    addUserData(state,payload){
      state.users=payload
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
  },
  actions:{
    incrementAction(context,payload){
      console.log(payload)
      setTimeout(() => {
        context.commit("increment")
      }, 1000);
    },
    decrementAction(context){
      console.log(context)
      context.commit("decrement")
    },
    getHomeUserData(context){
      axios.get("http://139.155.47.131/users").then(
        res=>{
          context.commit("addUserData",res.data)
        }
      )
    },
    getHomeUserData2(context){
      return new Promise((resolve,reject)=>{
        axios.get("http://139.155.47.131/users").then(
          res=>{
            context.commit("addUserData",res.data)
            resolve("success")
          }
        ).catch(err =>{
          reject(err)
        })
      })
    },
  }
});

export default store;