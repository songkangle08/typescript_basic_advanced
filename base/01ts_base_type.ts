// Typescript基础类型

// Boolean类型
{
  const flag1: boolean = true;
  const flag2: boolean = false;
}

// Number类型
{
  const number1: number = 10;
  const number2: number = NaN;
  const number3: number = Infinity; // 正无穷
}

// String类型
{
  const str1: string = "123";
  const str2: string = "abc";
  const str3: string = `哈哈哈`;
}

// enum枚举
{
  // 枚举类型用于定义数值集合，使用枚举我们可以定义一些带名字的常量。使用枚举可以清晰地表达意图或创建一组有区别的用例。如周一到周日，某一类事物

  // 普通枚举 - 初始值默认为0，其余的成员会按顺序自动增长
  enum WeekE {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  // 设置初始值
  enum ColorE {
    Red = 2,
    Pink,
    Blue,
  }

  // 字符串枚举
  enum ProgramingE {
    Html = "html",
    Javascript = "javascript",
    Java = "java",
    Python = "python",
    GoLang = "golang",
  }

  // 常量枚举 - 使用const关键字修饰的枚举，常量枚举与普通枚举的区别是，整个枚举会在编译阶段被删除。
  const enum TypeE {
    Boolean,
    String,
    Number,
  }

  const Type: TypeE[] = [TypeE.Boolean, TypeE.String, TypeE.Number];
  console.log(Type, "Type");
  // var Type = [0 /* TypeE.Boolean */, 1 /* TypeE.String */, 2 /* TypeE.Number */];
  // 可以看到我们的枚举并没有被编译成js代码 只是把color这个数组变量编译出来了
}

// Array类型
{
  // Array的定于
  const arr1: number[] = [1, 2, 3];
  const arr2: Array<number> = [1, 2, 3];
  const arr3: any[] = [1, "boolean", true];
  const arr4: Array<number | string> = [1, "2"]; // 联合类型的数组
  const arr5: Array<{ name: string; age: number }> = [{ age: 18, name: "skl" }];
}

// Tuple类型
{
  // Tuple类型跟数组定义类似，
  // 区别：1. Tuple中的某一项可以定义不同类型的值， 2. Tuple是固定长度的，超出长度会报错  3. 特殊的数组
  const tuple1: [string, number] = ["skl", 20];
  // 需要注意的是，元组类型只能表示一个已知元素数量和类型的数组，长度已指定，越界访问会提示错误。例如，一个数组中可能有多种类型，数量和类型都不确定，那就直接any[]。
}

// undefined和null
{
  // 如果你在tsconfig.json指定了"strictNullChecks":false, null和undefined是所有类型的子类型，也就是说你可以吧null和undefined赋值给其他类型
  let a: undefined = undefined;
  let b: null = null;

  let str1: string = "skl";
  str1 = null;
  str1 = undefined;
  let obj1: {} = null;

  // 如果你在tsconfig.json指定了"strictNullChecks":true,即开启严格模式后,null 和 undefined 只能给它们自己的类型赋值
  let str2: string = "skl";
  str2 = null; // 编译错误
  str2 = undefined; // 编译错误
  let obj2: {} = null; // 编译错误

  // strictNullChecks":true模式下，undefined可以给void赋值
  let v1: void = undefined; // 编译正确
  let v2: void = null; // 编译错误
}

// any类型
{
  // any会跳过类型检查器的检查，任何值都可以赋值给any类型,any也可以赋值给任何类型
  let value: any = 1;
  value = "skl";
  value = [];
  value = {};
  value = true;

  let str: string = "222";
  let value1: any;
  str = value1;
}

// void类型
{
  // void 意思就是无效的, 一般只用在函数上，告诉别人这个函数没有返回值。
  function fn(): void {
    console.log("hello world");
  }
  fn();
}

// never类型
{
  // never 类型表示的是那些永不存在的值的类型。 例如never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型

  // 值会永不存在的两种情况
  // 1. 如果一个函数执行时抛出了异常，那么这个函数永远不存在返回值（因为抛出异常直接中断程序运行，这使程序运行不到返回值的那一步，即具有不可达的终点，也就永不存在返回值了）
  function fn_error(msg: string) {
    throw new Error(msg);
  }
  // 2. 函数种执行无限循环的代码（死循环），使得程序永远无法运行到函数返回值的那一步，永不存在返回值
  function fn_while() {
    while (true) {}
  }
}

// unknown类型
{
  // unknown类型与any类型一样，所以类型都可以分配给unknown
  let value: unknown = 1;
  value = "skl";
  value = false;

  // unknown与any的最大区别使：
  // any：任何类中的值都可以赋值给any，同时any类型的值也可以赋值给任何类型。
  // unknown：任何类型的值都可以赋值给unknown，但是unknown只能赋值给unknown和any
  let value1: unknown;
  let str1: string = "111";
  // str1 = value1; // 编译错误
  let number: any;
  value1 = number;
}
