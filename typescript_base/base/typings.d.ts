declare const ArrayNumber: Array<number>;
/*

  declare var // 声明全局变量
  declare function // 声明全局方法
  declare class // 声明全局类
  declare enum // 声明全局枚举类型
  declare namespace // 声明（含有子属性的）全局对象
  interface 和 type // 声明全局类型

*/

declare type ArrayNumber = number[];

// 普通类型声明;
declare let age: number = 10;
declare function getAge(value: number): number | string {
  console.log(age);
};
declare class Person {
  constructor(name) {
    this.name = name;
  }
}
// 外部枚举;
declare enum Seasons {
  Spring,
  Summer,
  Autumn,
  Winter,
}
/*
  命名空间
  如果一个全局变量有很多子属性，就可以使用namespace
  声明文件里的namespace表示一个全局变量，包含很多个子属性
  在命名空间内部不需要再使用declare
*/
// 模拟 jQuery 的 $
declare namespace $ {
  function ajax(url: string, method: string, data: object): void;
  let userName: string;
  namespace getName {
    function onClick(): void;
  }
}
