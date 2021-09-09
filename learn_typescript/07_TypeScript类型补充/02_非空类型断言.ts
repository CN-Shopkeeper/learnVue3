// message? -> undefined | string
function printMessageLength(message?: string){
  // 加! 非空类型断言
  console.log(message!.length);
  
}

printMessageLength("hello world")