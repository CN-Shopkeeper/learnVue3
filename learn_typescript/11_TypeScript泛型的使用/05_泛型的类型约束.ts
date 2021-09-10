interface ILength{
  length: number
}

function getLength<T extends ILength>(arg: T){
  return arg.length;
}

// 只要包含length属性，就能传入
getLength("abc");
getLength([12,32]);
getLength({length:100})

export {}


/*
在Java中接口没有这么灵活的用法，并不是只要实现了接口中的方法，而不去implements这个接口，就能起到类型限制的作用
以下代码是编译不通过的
public class HelloWorld {
    public static void main(String []args) {
      HelloWorld hh=	new HelloWorld();
      printLength(hh);
    }
	
	int length=100;
	public int getLength(){
		return this.length;
	}
	
	public static void printLength(ILength i){
		System.out.println(i.getLength());
	}
}
interface ILength{
	int getLength();
}
*/