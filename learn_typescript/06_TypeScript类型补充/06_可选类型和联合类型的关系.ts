// 让参数本身时可选的
// 一个参数是可选类型的时候,它类似于表示的是 它的类型 | undefined 的联合类型
function foo(message: string | undefined){
  console.log(message);
  
}

foo(undefined)