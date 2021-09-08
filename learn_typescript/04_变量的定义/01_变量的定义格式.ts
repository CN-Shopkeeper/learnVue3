// 1.类型注解
// 2.var/let/const
var name: string = "why";
let age: number = 18;
const height: number = 1.88;

// 3.
// string和String的区别
// string：TypeScript中的字符串类型
// String：JavaScript中的字符串包装类型
// 不建议写成String
const message: String = "hello world";

// 4.
// 默认情况下进行赋值时，会将赋值的值的类型，作为前面标识符的类型
// 这个过程称之为类型推导/推断
// foo没有添加类型注解
let foo = "123";
// foo=123;

export {}