// tuple元组：多中元素的组合
// "why" 18 1.88

// 1.数组的弊端
// const info: any[] = ["why", 18, 1.88];
// 这种方式不安全，可以使用对象（但是对象不简洁）
// const name = info[0];
// console.log[name.length];

// 2.元组的特点
const info: [string,number,number] = ["sk",18,1.88]
console.log(info[0].length);
// console.log(info[1].length);
export {}