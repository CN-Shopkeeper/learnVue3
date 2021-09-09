// interface 可以重复定义
interface IFoo {
  name: string
}

interface IFoo {
  age: number
}

const foo: IFoo = {
  name: "sk",
  age: 18 
}

// document.getElementById("app") as HTMLDivElement
// window.addEventListener

// interface Window {
//   age: number
// }
// window.age =19;


// type 不能定义同名的
// type IBar = {
//   name: string;
// }
// type IBar = {
//   age: number;
// }

