class Person{
  name:string;
  age: number;

  constructor(name:string, age:number){
    this.name=name;
    this.age=age;
  }

  eating(){
    console.log("eating");
  }
}
class Student extends Person{
  
  sno: number

  constructor(name:string, age:number,sno: number){
    super(name,age)
    this.sno=sno;
  }

  eating(){
    super.eating();
    console.log("student eating");
    
  }

  studying(){
    console.log("studying");
  }
}

class Teacher extends Person{
  title: string

  constructor(name:string, age:number,title: string){
    super(name,age)
    this.title=title;
  }

  teaching(){
    console.log("teaching");
  }
}
const stu = new Student("sk",18,108);
console.log(stu);
stu.eating();

export {}