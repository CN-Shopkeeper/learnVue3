// const info={
//   name:'sk',
//   age:18
// }

// info.name="skk"

type Method = 'GET' | 'POST';
// 1.规定options的类型
// type Request = {
//   url:string,
//   method: Method
// }
function request(url: string, method: Method){}
const options/*: Request */={
  url:"https://",
  method: "POST"
} as const //3.添加as const
// 2.类型转化
request(options.url,options.method /* as Method */)
export {}