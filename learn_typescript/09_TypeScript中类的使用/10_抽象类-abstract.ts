function makeArea(shape: Shape){
  return shape.getArea();
}

abstract class Shape{
  abstract getArea();
}

class Rectangle extends Shape{
  private width: number;
  private height: number;

  constructor(width: number, height: number){
    super()
    this.height=height;
    this.width=width;
  }

  getArea(){
    return this.width * this.height;
  }
}

class Circle extends Shape{
  private r: number;

  constructor(r: number){
    super()
    this.r= r;
  }

  getArea(){
    return this.r * this.r *3.14;
  }
}

console.log(new Rectangle(1,2).getArea());


export {}