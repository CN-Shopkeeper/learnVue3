// 1.typeof的类型缩小
type IDtype = number | string
function printID(id: IDtype){
  if (typeof id === 'string'){
    console.log(id.toUpperCase());
    
  }else{
    console.log(id);
    
  }
}

// 平等的类型缩小(=== == != switch)
type Direction = "left" | "right" | "top" |"down"
function printDirection(direction: Direction){
  console.log(direction);
  switch (direction){
    case 'left':
      break;
  }
}

// 3.instanceof
function printTime(time: string | Date){
  if (time instanceof Date){
    console.log(time.toUTCString());
  }else{
    console.log(time);
    
  }
}

// 4.in
type Fish = {
  swimming:()=>void
}

type Dog = {
  running: ()=>void
}

function walk(animal: Fish| Dog){
  if ('swimming' in animal){
    animal.swimming();
  } else{
    animal.running();
  }
}

const fish:Fish ={
  swimming:()=>{
    console.log("swimming");
    
  }
}

walk(fish)