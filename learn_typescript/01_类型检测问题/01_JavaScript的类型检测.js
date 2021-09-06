// 当前foo函数，在被其他地方调用时，没有做任何参数校验
// 1> 没有对类型进行校验
// 2> 没有对是否传入参数进行校验
function foo(message){
  console.log(message.length);
}

foo("hello world");
foo("你好啊");

foo();

// 永远执行不到
console.log("渲染界面")