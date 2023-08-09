let a: string = "a";
// ts学习的过程中主要学习ts如何写类型（ts关注的是类型，不是业务逻辑）

// ts类型分类：基础类型、高级类型、内置类型、自定义类型、类型体操

/*
  ts的特点：
    1. ts的目的是什么？从安全的角度考虑使用（考虑我在赋予结果的时候，是否会发生错误）
    2. ts是用来检测类型的，只是在编写代码的时候提示作用，不是在运行的时候发生的（运行的时候和ts无关）
    3. ts在编译代码后类型就消失了，不存在类型了（写的都是空气），最终在生成环境下，可以添加.d.ts来对js文件增加类型说明
*/

// 基础类型
// number、string、boolean、array、tuple、enum、null、undefined、void、never、any、object、symbol、bigint

// number
let num1: number = 10;

// string
let str1: string = "string";

// boolean
let bool1: boolean = false;

// array
let array1: number[] = [1, 2, 3, 4, 5];
let array2: Array<number> = [1, 2, 3, 4, 5];

// tuple
let tuple1: [string, number, string] = ["skl", 18, "西安"];

// enum
{
  // 类型可以进行反举 （值是数字的时候 可以反过来枚举）, 枚举没有值会根据上面的索引来自动累加
  enum Status {
    no = 0,
    yes = 1,
  }
  // 常量枚举不会额外编译成对象,更节约空间
  const enum Color {
    pick,
    blue,
    red,
  }
  console.log(Color.blue, Color.pick, Color.red);
  // 异构枚举 就是枚举中不光有数字 还有字符串. 异构枚举上一个是字符串下一个无法推导
  enum mixE {
    a,
    b = "b",
    c = 1,
  }
}

// null和undefined
// 在严格模式下，null只能赋值给null类型，undefined只能赋值给undefined类型
// 非严格模式下,null和undefined可以赋值给任何类型(null,undefined是任何类型的子类型)
let n: null = null;
let u: undefined = undefined;

// let n1: null = "123";  // 不能将类型“"123"”分配给类型“null”。
// let str2: string = null; // 非严格模式下不报错

// void 代表空类型，这个void一般只表示函数的返回值
// undefined可以赋值给void，都
function fn(): void {}

// symbol
const symbol: symbol = Symbol("abc");

// bigint
const bigint: bigint = BigInt(Number.MAX_SAFE_INTEGER + 1);

export {};
