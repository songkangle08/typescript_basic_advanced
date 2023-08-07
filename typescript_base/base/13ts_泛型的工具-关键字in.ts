/*
 * 泛型的工具
 */

// in用来遍历枚举类型: 对联合类型的迭代
// in的右侧一般会跟一个联合类型，使用in操作符可以对该联合类型进行迭代。 其作用类似JS中的for...in或者for...of
// 切记in不要用于 interface，否则会出错
{
  // type Keys = "a" | "b" | "c";
  type Keys = string | number;
  type Obj = {
    [p in Keys]: string;
  };
  interface Obj1 {
    [P in Keys]?: any; // 但切记不要用于 interface，否则会出错
  }

  interface Keys1 {
    a: string;
    b: string;
    c: string;
  }
  type A = keyof Keys1;
  let a1: A = "a";
  // interface Obj1<T> {
  //   [P in keyof T]?: any;
  // }
  // interface中不能使用in关键字
}
