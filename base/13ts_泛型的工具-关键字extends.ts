/*
 * 泛型的工具
 */
// extends：extends添加泛型约束
{
  interface Lengthwise {
    length: number;
  }

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }
}
