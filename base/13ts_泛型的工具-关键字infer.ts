/*
 * 泛型的工具
 */
// infer:
// infer可以在extends的条件语句中推断待推断的类型

{
  // Ts内置方法：Parameters
  type Parameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
  ) => any
    ? P
    : never;

  type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer P
    ? P
    : any;
}
/*
 * infer 满足的四个特点：
 * 只能出现在有条件类型的 extends 子语句中；
 * 出现 infer 声明，会引入一个待推断的类型变量；
 * 推断的类型变量可以在有条件类型的 true 分支中被引用；
 * 允许出现多个同类型变量的 infer
 */

{
  // infer的作用不止是推断返回值，还可以解包
  // 假如想在获取数组里的元素类型，在不会infer之前我是这样做的
  type Ids = number[];
  type Names = string[];

  type Unpacked<T> = T extends Names ? string : T extends Ids ? number : T;

  type idType = Unpacked<Ids>; // idType 类型为 number
  type nameType = Unpacked<Names>; // nameType 类型为string

  // 用infer解包
  type Unpacked1<T> = T extends (infer R)[] ? R : T;

  type idType1 = Unpacked<Ids>; // idType 类型为 number
  type nameType1 = Unpacked<Names>; // nameType 类型为string
  // 这里T extends (infer R)[] ? R : T的意思是，如果T是某个待推断类型的数组，则返回推断的类型，否则返回T
}
