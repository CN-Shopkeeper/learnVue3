// interface IPerson<T1=string ,T2=number>{
interface IPerson<T1,T2>{
  name: T1;
  age: T2;
}

const p : IPerson<string,number>={
  name: "sk",
  age: 18
}

export {}