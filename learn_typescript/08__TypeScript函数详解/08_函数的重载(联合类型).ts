/**
 * 通过联合类型有两个缺点：
 * 1.需要进行很多逻辑判断
 * 2.返回值不能确定
 */

 type AddType = number | string;
 function add(a1: AddType, a2: AddType){
   // return a1+a2;
 }
 
 export {}