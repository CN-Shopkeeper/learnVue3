// type Direction = "left" | "right" | "top" | "bottom"
enum Direction {
  LEFT = 100,
  RIGHT,
  TOP,
  BOTTOM
}

function turnDirection(direction: Direction){
  console.log(direction);
  
  switch (direction){
    case Direction.LEFT:
      console.log("LEFT");
      break;
    case Direction.RIGHT:
      console.log("RIGHT");
      break;
    case Direction.TOP:
      console.log("TOP");
      break;
    case Direction.BOTTOM:
      console.log("BOTTOM");
      break;
    default:
      const foo: never = direction;
  }
}

turnDirection(Direction.LEFT);