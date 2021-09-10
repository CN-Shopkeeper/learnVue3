class Point<T>{
  x: T;
  y: T;
  z: T;

  constructor(x: T, y:T, z:T){
    this.x=x;
    this.y=y;
    this.z=z;
  }
}
const p1 = new Point("123.1","234.1","231.2")
const p2 = new Point<string>("123.1","234.1","231.2")
const p3: Point<string> = new Point("123.1","234.1","231.2")

const name1: string[]=[];
const name2: Array<string> = [];

export {}