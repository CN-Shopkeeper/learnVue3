function add(a1: number, a2: number): number;
function add(a1: string, a2: string): string;

function add(a1: any, a2: any):any{
  return a1 + a2;
}

const result1 = add(20,30);
const result2 = add("abc","cba");

// 在函数重载中，实现函数是不能被直接调用的
// add({},{});
export {}