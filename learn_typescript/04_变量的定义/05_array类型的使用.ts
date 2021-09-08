// 数组中元素类型不固定
// typescript数组中最好存放相同类型数据
// 类型注解：type annotation
const names1: Array<string>= []; // 不推荐这么写，在jsx中尖括号是有冲突的
const names2: string[] = [];  // 推荐

names1.push("123")
// names1.push(123);