/*
  交叉类型：交叉类型是将多个类型合并为一个类型，这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性，使用&定义交叉类型。
*/
{
  type Useless = string & number; // 相当于==> type Useless = never
  // 显然，我们仅仅把原始类型，字面量类型，函数类型等原子类型合并成交叉类型，是没有任何用处的。
}

// 交叉类型真正的用武之地就是将多个接口类型合并成一个类型，从而实现等同接口继承的效果，也就是所谓的合并接口类型。
{
  type IntersectionType = { id: number; name: string } & { age: number };
  let intersection: IntersectionType = { id: 1, name: "11", age: 1 };
  // 我们通过交叉类型，使得Interscetion同时拥有了id，name，age所有属性，这里我们可以试着将合并接口类型理解为球并集
  // let intersection1: IntersectionType = { id: 1, name: "11" }; // 报错
}
