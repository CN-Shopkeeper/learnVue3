class Person{
  protected name: string = ""
  
}
class Student extends Person{
  getName(){
    return this.name;
  }
}
const p = new Person();
export {}