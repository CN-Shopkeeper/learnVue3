function foo(){
  return "abc"
}

function bar(){
  return 234;
}

// unknown只能赋值给any和unknown类型
// any可以赋值给任意类型
let flag = true;
// let result: any;
let result: unknown;
if (flag){
  result = foo()
}else{
  result= bar()
}

console.log(result);

// let messaage: string =result;

export {}