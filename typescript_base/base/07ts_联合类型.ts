/*
  联合类型：联合类型表示取值可以为多种类型中的一种，使用|分隔每个类型。
*/
"use strict";
{
  let myFavoriteNumber: string | number;
  myFavoriteNumber = "string";
  myFavoriteNumber = 1;

  const sayHello = (name: string) => {};
  // 如果你在tsconfig.json指定了"strictNullChecks":false, null和undefined是所有类型的子类型，也就是说你可以吧null和undefined赋值给其他类型
  sayHello(null); // 联合类型通常与null或undefined一起使用
  sayHello(undefined);
  // sayHello(1); // 报错
  sayHello("1");
}
{
  let num: 1 | 2 = 1;
  type EventNames = "click" | "scroll" | "mousemove";
  // 上面示例中的1,2,'click'等称为字面量类型，用来约束取值只能是某几个值中的一个。
}
