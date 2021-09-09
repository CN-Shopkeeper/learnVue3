interface IPerson{
  name: string;
  age:number;
  height: number;
}

const info = {
  name: "sk",
  age: 18,
  height: 1.88,
  address: "yc"
}

// 编译不通过
// const p: IPerson = {
//   name: "sk",
//   age: 18,
//   height: 1.88,
//   address: "yc"
// }
// 编译通过，并且赋值成功
// freshness擦除
const p: IPerson =  info;

function printInfo(person: IPerson){
  console.log(person);
}

// 报错
// printInfo({
//   name: "sk",
//   age: 18,
//   height: 1.88,
//   address: "yc"
// })

printInfo(info);