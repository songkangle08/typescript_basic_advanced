/*
 * 泛型的工具
 */
// infer:
// infer可以在extends的条件语句中推断待推断的类型

// infer X 就相当于声明了一个变量，这个变量随后可以使用
// 需要注意的是infer声明的这个变量只能在true分支中使用

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

{
  /*
    实现一个 Reverse 工具类型，用于对元组类型中元素的位置颠倒，并返回该数组。元组的第一个元素会变成最后一个，最后一个元素变成第一个。
    type Reverse<
      T extends Array<any>,
      R extends Array<any> = []
    > = // 你的实现代码

    type R0 = Reverse<[]> // []
    type R1 = Reverse<[1, 2, 3]> // [3, 2, 1]
  */

  // 这里采用递归方式，每次递归都把第一项 First 放在最后，并把递归结果展开：
  type Reverse<T extends Array<any>, R extends Array<any> = []> = T extends [
    infer First,
    ...infer Last
  ]
    ? [...Reverse<Last>, First]
    : R;

  // 第一次执行的时候，把 T 分成第一项 First 和剩余的 Rest，每次递归的时候，把 First 和暂存数组 A 合并，作为递归的第二个参数，即上一步翻转的结果，到最后返回暂存数组 A 即可。

  type R0 = Reverse<[]>; // []
  type R1 = Reverse<[1, 2, 3]>; // [3, 2, 1]
  type R2 = Reverse<[1, 2, 3, 4, 5]>; //  [5, 4, 3, 2, 1]
}
