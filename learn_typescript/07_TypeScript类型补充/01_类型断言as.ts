// <img id="sk"/>

// 1.类型断言as
// const el = document.getElementById("sk") as HTMLImageElement;
// el.src = "url地址"

// 2.Person是Student的父类
class Person{

}

class Student extends Person{
  studying(){

  }
}

function sayHello(p: Person){
  (p as Student).studying()
}

const stu = new Student();
sayHello(stu)


// 3.
const message = "Hello World"
const num: number = (message as unknown) as number;