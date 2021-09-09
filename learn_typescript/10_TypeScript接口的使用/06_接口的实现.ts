interface ISwim {
  swimming: ()=>void
}

interface IEat {
  eating: ()=>void
}

class Animal {

}

class Fish extends Animal implements ISwim,IEat{
  swimming(){
    console.log("fish swimming");
  }
  eating(){

  }
}

class Person implements ISwim{
  swimming(){
    console.log("People Swimming");
  }
}
// 编写一些公共的API：面向接口的编程
function swimAction(swimable: ISwim){
  swimable.swimming();
}

swimAction(new Fish());
swimAction(new Person());