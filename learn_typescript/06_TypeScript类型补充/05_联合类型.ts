// number | string 联合类型
function printID(id: number | string){
  // 使用联合类型时需要特别的小心
  if (typeof id ==='string'){
    console.log(id.toUpperCase());
  }else{
    console.log(id);
  }
}

printID(123);
printID("abc");

export {}