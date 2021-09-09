class Person{
  readonly name: string = "123"
  readonly friend?: Person
  age?: number
  // 1.只读属性只能在构造器中赋值
  // 2.属性本身不能修改，但是如果是对象，可以修改其属性
  constructor(name: string, friend?: Person){
    this.name = name;
    this.friend=friend;
  }
}

const p =new Person("sk",new Person("skk"));
console.log(p.name);
if (p.friend){
  p.friend.age=18;
}
export {}