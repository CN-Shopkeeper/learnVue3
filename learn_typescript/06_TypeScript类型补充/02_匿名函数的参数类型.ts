// 在定义一个函数时,通常会加上类型注释
function foo (message: string){

}

const names = ["abc","cba"]

// item根据上下文的环境推导出来的,这个时候可用于不添加类型注解
// 上下文中的函数
names.forEach((item)=>{
  console.log(item.split(""));
  
})