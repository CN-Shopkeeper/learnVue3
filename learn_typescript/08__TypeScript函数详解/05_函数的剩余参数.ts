function sum(...nums: number[]){
  let sums=0;
  for (let num of nums){
    sums+=num;
  }
  return sums;
}

console.log(sum(1,2,3,4,5))

export {}