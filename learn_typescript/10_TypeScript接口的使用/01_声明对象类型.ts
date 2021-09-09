// 通过类型别名来声明对象类型
// type InfoType = { name:string, age:number};

// 另外一种声明对象类型：接口interface
interface InfoType{
  name: string;
  age: number;
  // 定义可选属性
  friend?:{
    name:string
  }
}

const info: InfoType = {
  name: "sk",
  age: 18
}