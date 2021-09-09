// 1.函数作为参数时，在参数中如何编写类型
function foo(){}
type FooFnTye = ()=>void;
function bar(fn: FooFnTye){
  fn()
}
bar(foo);

// 2.定义常量时，编写函数类型
type AddFnType = (num1: number,num2:number)=>number 
const add:AddFnType = (num1: number, num2: number)=>{
  return num1+num2;
}


export {}