type Person = {
  name: string,
  friend?:{
    name: string,
    age?: number
  }
}

const info: Person={
  name: "sk",
  friend:{
    name: "skk"
  }
}

console.log(info.name);
// 短路语法，如果friend为空就直接返回undefined
console.log(info.friend?.name);


export {}