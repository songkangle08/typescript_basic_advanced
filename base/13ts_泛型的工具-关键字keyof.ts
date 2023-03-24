/*
 * 泛型的工具
 */

// keyof:该操作符用于获取某种类型的所有键，其返回类型是联合类型
{
  interface Person {
    name: string;
    age: number;
  }
  type A1 = keyof Person; // type A1 = 'name' | 'age';
  let a1: A1 = "name";
  let a11: A1 = "age"; // 只能赋值给name | age
  let a12: A1 = "name1";

  type A2 = keyof Person[];
  let a2: A2 = "concat"; // 获取的都是数组的方法和length
  let a21: A2 = "length";
  let a22: A2 = "constructor";
  let a23: A2 = "name";

  type A3 = keyof { [x: string]: Person }; // string | number
  let a3 = "111";
  let a31 = 111; //

  // 在Typescript中支持两种索引签名，数字索引和字符串索引
  interface StringArray {
    // 字符串索引：keyof StringArray => string | number
    [key: string]: string | number;
  }
  let obj: StringArray = { ha: "1", index: 1, key: "1", 1: 1 };
  // 对象的键既可以是数字，也可以使字符串。TS兼容了接口既可以是字符串也可以是数字（设置[key:string]）。

  interface NumberArray {
    // 字符串索引：keyof NumberArray => number
    [key: number]: string;
  }
  // 对象文字可以只指定已知属性，并且“ha”不在类型“NumberArray”中
  let obj1: NumberArray = { ha: "1", index: 1, key: "1", 1: "1" };
  // 为了同时支持两种索引类型，就得要求数字索引的返回值必须是字符串索引返回值的子类。其中的原因就是当使用数值索引时，JavaScript 在执行索引操作时，会先把数值索引先转换为字符串索引。所以 keyof { [x: string]: Person } 的结果会返回 string | number。

  // keyof也支持基本数据类型
  type B1 = keyof boolean; // type B1 = "valueOf"
  type B2 = keyof number; // type B2 = "toString" | "toLocaleString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf"
  type B3 = keyof string;
  type B4 = keyof Symbol;

  // 示例：
  // type B2 = keyof number;
  // 相当于new了一个基本数据类型的类，获取了其原型上的方法的名称
  let b2 = new Number(2);
  console.log(b2); //
}
{
  // keyof的作用：
  // JavaScript 是一种高度动态的语言。有时在静态类型系统中捕获某些操作的语义可能会很棘手。以一个简单的prop 函数为例：
  function prop(obj, key) {
    return obj[key];
  }
  // 该函数接收 obj 和 key 两个参数，并返回对应属性的值。对象上的不同属性，可以具有完全不同的类型，我们甚至不知道 obj 对象长什么样。
  function prop1(obj: object, key: string) {
    return obj[key]; // 元素隐式具有 "any" 类型，因为类型为 "string" 的表达式不能用于索引类型 "{}"。在类型 "{}" 上找不到具有类型为 "string" 的参数的索引签名
  }
  // 暴力解决上述问题
  function prop2(obj: object, key: string) {
    return (obj as any)[key]; // 元素隐式具有 "any" 类型，因为类型为 "string" 的表达式不能用于索引类型 "{}"。在类型 "{}" 上找不到具有类型为 "string" 的参数的索引签名
  }

  /*
    在以上代码中，我们使用了 TypeScript 的泛型和泛型约束。首先定义了 T 类型并使用 extends 关键字约束该类型必须是 object 类型的子类型，然后使用 keyof 操作符获取 T 类型的所有键，其返回类型是联合类型，最后利用 extends 关键字约束 K 类型必须为 keyof T 联合类型的子类型。
  */
  function prop3<T extends object, k extends keyof T>(obj: T, key: k) {
    return obj[key];
  }
  let obj = {
    name: "skl",
    age: 20,
    desc: true,
  };
  prop3(obj, "name");
  prop3(obj, "age");
  prop3(obj, "desc");
  // prop3(obj, "date"); // 类型“"date"”的参数不能赋给类型“"name" | "age" | "desc"”的参数。
}
{
  type A = keyof any; // ==> type A = string | number | symbol
}
