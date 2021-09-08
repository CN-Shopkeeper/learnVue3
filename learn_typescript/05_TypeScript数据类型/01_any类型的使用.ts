// 当进行一些类型断言 as any
// 在不想给某些JavaScript添加具体的数据类型时（和Javascript一样）
let message: any = "hello world"

message = 123;
message = true;
message = {

}

// any可以直接执行、获取不存在的属性
// message()
// message.split(" ")

console.log(message);

// const arr: any[]=[];