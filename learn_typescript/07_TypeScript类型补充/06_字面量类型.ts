// 本身字符串也可以作为类型，叫做字面量类型
// const message: "hello world"
// const message = "hello world";
let message ="hello world"

// let num: 123=123;
// num=321;

// 字面量类型的意义就是必须结合联合类型
type Alignment = 'left' | 'right' | 'center';
let align: Alignment ='left';
align = 'right'