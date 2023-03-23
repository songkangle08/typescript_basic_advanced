/*
  接口：在面向对象语言中，接口（interfaces）是一个很重要的概念，他是对行为的抽象，而具体如何行动需要由（classes）去实现（implement）
  typescript中的接口是一个非常灵活的概念，除了用于【对类的一部分行为进行抽象】以外，也常用于对【对象的形状】进行描述
*/

{
  interface PersonT {
    name: string;
    age: number;
  }
  let person: PersonT = {
    name: "skl",
    age: 20,
  };
}

// 可选 | 只读属性
{
  interface PersonT {
    readonly name: string;
    age?: number;
  }
  let person: PersonT = {
    name: "skl",
  };
  // person.name = "11"; //无法分配到 "name" ，因为它是只读属性

  // Typescript提供了ReadonlyArray<T>类型，与Array<T>相似，只是把所有可变方法去掉了，因此确保数组创建后再也不能被修改
  let a: number[] = [1, 2, 3, 4, 5];
  let ro: ReadonlyArray<number> = a;
  ro.push(6);
}

// 任意属性
{
  // 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集。
  interface PersonT {
    name: string;
    age?: number;
    [key: string]: string;
  }
}

// 类型断言
{
  interface PersonT {
    name: string;
    age?: number;
  }
  let p: PersonT = {
    name: "skl",
    age: 20,
    money: 100000000000,
  } as PersonT; // 类型断言
}

// 索引签名
{
  interface PersonT {
    name: string;
    age?: number;
    [key: string]: any; // 索引签名
  }
  let p: PersonT = {
    name: "skl",
    age: 20,
    money: 100000000000,
  };
}

// 绕开额外属性检查方式：定义一个中间对象变量
{
  interface LabeledValue {
    label: string;
  }
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  let myObj = { size: 10, label: "Size 10 Object" }; //定义一个变量来接口要传递的值，然后就可以绕开多余的类型检查，简称：鸭式辨型法
  printLabel(myObj); // OK
}
{
  interface LabeledValue {
    label: string;
  }
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  printLabel({ size: 10, label: "Size 10 Object" }); // Error
}

// 使用extends实现继承其他接口
{
  interface PointX {
    x: number;
  }
  interface PointY {
    y: number;
  }
  interface Point extends PointX, PointY {
    z: number;
  }
  let point: Point = { x: 1, y: 1, z: 1 }; // 相当于type Point = PointX & PointY & { z: number };

  type PointType = PointX & PointY & { z: number };
  let pointType: PointType = { x: 1, y: 1, z: 1 };
}
