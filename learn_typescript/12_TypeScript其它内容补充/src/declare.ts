// 声明函数
declare module "lodash" {
  export function join(arr: any[]):void
}

// 声明变量、类、函数
declare let _name: string
declare let _age: number
declare let _height: number

declare function _foo():void

declare class _Person{
  name: string;
  age: number;
  constructor(name:string, age:number)
}

// 声明为文件
declare module "*.png" 


// 声明命名空间
declare namespace ${
  export function ajax(settings:any):any
}