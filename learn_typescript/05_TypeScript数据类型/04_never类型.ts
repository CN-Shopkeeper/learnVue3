// 永远都不会有返回值
function foo(): never{
  while(true){

  }
}

function bar(): never{
  throw new Error()
}


function handleMessage(message: string | number | boolean){
  switch(typeof message){
    case 'string':
      console.log("string处理方式处理message")
      break;
    case 'number':
      console.log("number处理方式处理message")
      break;
    case 'boolean':
      console.log("boolean处理方式处理message")
      break;
    default:
      // 如果不增加对boolean的处理，这一行就会报错
      const check: never = message
  }
}

handleMessage(123);
handleMessage("abc");

// 新增
handleMessage(true)