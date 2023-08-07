/*
  泛型：是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
*/

// 泛型函数
{
  // 假如让你实现一个函数 identity，函数的参数可以是任何值，返回值就是将参数原样返回，并且其只能接受一个参数，你会怎么做？
  let identity = (arg) => arg;

  // 可以接受任意值
  type idBoolean = (arg: boolean) => boolean;
  type idNumber = (arg: number) => number;
  type idString = (arg: string) => string;
  // type ...
  type identityT = idBoolean | idNumber | idString; // 还有更多
  let fn: identityT = (arg: number) => arg;
}
{
  // 为了解决上面定义类型多的问题，我们使用泛型对上面的代码重构，
  /*
    第一步：传递类型identity<T>,函数名后的<>中的类型
    第二步：链式传递给参数类型和返回类型
  */
  function identity<T>(arg: T): T {
    return arg;
  }
  /*
   其中T代表【Type】，在定义泛型时通常用作第一类型变量名称，但实际上T可以用任何有效名称代替。除了T之外，一下时行间泛型变量代表的意思：
    T (Type): 泛型变量,或者说一个类型占位符
    K（key）：表示对象中的键类型
    V（Value）：表示对象中的值类型
    E（Element）:表示元素类型
  */
  // 看12泛型的过程.png
  // 其实并不是只能定义一个类型的变量，我们可以引入希望定义的**任何数量**的类型变量。比如我们引入一个新的类型变量U。用于扩展我们定于的函数
  function identity1<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
  }
  identity1<number, string>(20, "skl");
  identity1(20, "skl"); // 编译器足够聪明，能够知道我们的参数类型，并将它们赋值给T和U，而不是开发人员显示指定它们。
}

// 泛型的约束
{
  function getSize<T>(arg: T): T {
    console.log(arg.size); // 类型“T”上不存在属性“size”。
    return arg;
  }
  // 报错的原因在于T理论上是可以是任何类型的，不同于any，你不管使用它的什么属性或者方法都会报错（除非这个属性和方法是所有集合共有的）。
  // 直观的想法是限定传个getSize函数的【参数类型】应该有size类型，这样就不报错了。如何去表达这个【类型约束】的点呢？实现这个需求的关键在于使用类型约束。使用extends关键字可以做点这一点。简单老说就是你定义一个类型，然就让T实现这个接口即可
  interface GetSizeT {
    size: number;
  }
  const getSize1 = <T extends GetSizeT>(arg: T): T => {
    console.log(arg.size); // 类型“T”上不存在属性“size”。
    return arg;
  };
  getSize1<any>({ size: 1, name: 1 });
}

// 泛型接口
{
  interface ICreateObj<K, V> {
    name: K;
    age: V;
  }
  let obj: ICreateObj<number, string> = { name: 1, age: "20" };
}

// 泛型的默认参数
{
  interface ICreateObj<K, V = number> {
    name: K;
    age: V;
  }
  let obj: ICreateObj<number, string> = { name: 1, age: "20" };
}

// 泛型类
{
  class Person<T> {
    default: T;
    add: (a: T, b: T) => T;
  }
}
