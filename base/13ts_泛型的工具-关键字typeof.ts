/*
 * 泛型的工具
 */
// typeof: 主要用途是在类型上下文中获取变量或者属性的类型
{
  // typeof获取对象类型/对象属性的类型
  interface Person {
    name: string;
    age: number;
  }
  const skl: Person = { name: "skl", age: 10 };
  type Skl = typeof skl; // ==> type Sem = Person
  type Name = typeof skl.name; // ==> type Name = string

  // typeof获取函数对象的类型
  function toArray(x: number): Array<number> {
    return [x];
  }
  type Fn = typeof toArray; // ==> type Fn = (x: number) => Array<number>
}
