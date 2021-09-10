import {add, sub} from './utils/math'
import {time, price} from './utils/format'

import axios from "axios"
// npm install @types/lodash -D
import _ from "lodash"

import ditfImage from './img/6702614f139b61410ff75e56f78865d4ca2c2395.png'

console.log(add(20,30),sub(20,30));
console.log(time.format("123"),price.format(123))

console.log(_.join([123,123]));

console.log(_name,_age,_height);
_foo()

console.log(new _Person("sk",123));

$.ajax({

})

axios.get("http://139.155.47.131/users").then(res =>{
  console.log(res.data);
  
})

// :\Microsoft VS Code\resources\app\extensions\node_modules\typescript\lib\lib.dom.d.ts
// document