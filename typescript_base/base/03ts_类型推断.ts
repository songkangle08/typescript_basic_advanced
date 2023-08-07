{
  let str: string = "this is string";
  let num: number = 1;
  let bool: boolean = true;
}
{
  // 在很多情况下，TypeScript 会根据上下文环境自动推断出变量的类型，无须我们再写明类型注解
  let str = "this is string"; // 等价于let str: string = "this is string";
  let num = 1; // 等价于let num: number = 1;
  let bool = true;
}

{
  const str: string = "this is string"; // const str: string
  const num: number = 1;
  const bool: boolean = true;
}
{
  const str = "this is string"; // const str: "this is string"  不等价于 const str: string = "this is string";
  const num = 1; // num : 1
  const bool = true; // bool : true
}

{
  // 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
  let obj;
  obj = "111";
  obj = 1;
}

/*
  总结：
  1. 在很多情况下，TypeScript 会根据上下文环境自动推断出变量的类型，无须我们再写明类型注解。
  2. 在 TypeScript 中，具有初始化值的变量、有默认值的函数参数、函数返回的类型都可以根据上下文推断出来。
  3. 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
*/
