// 类型的参数化
// 在定义函数时，不决定函数的参数类型，让调用者决定参数的类型
function sum<Type extends number | string>(num1: Type, num2: Type): Type{
  return num1 + num2;
}

// 1.调用方式一：明确的传入类型
sum<number>(20,40);
sum<string>("abc","vbn");

// 2.调用方式二：类型推导
sum(20,30)