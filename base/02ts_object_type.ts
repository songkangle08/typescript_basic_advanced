/*
  "object" "Object" 和 "{}"
  objectc:首字母小写，称为“小object”
  Object:首字母大写，称为“大Object”
  {}:称为“空对象”
*/

// 小object代表的是非原始类值：也就是说我们不能把number，string，boolean，symbol等原始类型赋值给object。在严格模式下，null和undefined类型也不能赋值给object.
{
  let lowerCaseObject: object;
  // lowerCaseObject = 1; // 报错
  // lowerCaseObject = "a"; // 报错
  // lowerCaseObject = true; // 报错
  // lowerCaseObject = Symbol("唯一值");
  lowerCaseObject = null;
  lowerCaseObject = undefined;
  lowerCaseObject = {};
  lowerCaseObject = { a: 1 };
  lowerCaseObject = /^\d$/;
}

// 大Object代表得是拥有toString，hasOwnPrototype方法得类型，所以所有得原始类型，非原始类型都可以赋值给Object。在严格模式下，null和undefined不能赋值给Object。
{
  let upperCaseObject: Object;
  upperCaseObject = 1;
  upperCaseObject = "a";
  upperCaseObject = true;
  upperCaseObject = Symbol("唯一值");
  upperCaseObject = null;
  upperCaseObject = undefined;
  upperCaseObject = {};
  upperCaseObject = { a: 1 };
  upperCaseObject = /^\d$/;
}

{
  type isLowerCaseObjectExtendsUpperCaseObject = object extends Object
    ? true
    : false; // true;
  type isUpperCaseObjectExtendsLowerCaseObject = Object extends object
    ? true
    : false; // true;
  let obj: isLowerCaseObjectExtendsUpperCaseObject = true; // isLowerCaseObjectExtendsUpperCaseObject类型为true
  let lowerCaseObject: object;
  let upperCaseObject: Object;
  lowerCaseObject = upperCaseObject;
  upperCaseObject = lowerCaseObject;
}

/*  
  从上面实例可以看到：
  1. 大Object包含原始类型和非原始类型
  2. 小object仅包含非原始类型
  3. 大Object不仅是小object的父类型，同时大Object也是小Object的子类型。
  4. 在严格模式下，undefined和null都不能赋值给大小Object。
*/

// {}空对象类型和大Object一样，也表示原始类型和非原始类型的集合，并且在严格模式下，null和undefined也不能赋值给{}
{
  let enptyObject: {};
  enptyObject = 1;
  enptyObject = "a";
  enptyObject = true;
  enptyObject = Symbol("唯一值");
  enptyObject = null;
  enptyObject = undefined;
  enptyObject = {};
  enptyObject = { a: 1 };
  enptyObject = /^\d$/;
  // 大Object不仅是{}t的父类型，同时大Object也是{}的子类型。
  let upperCaseObject: Object;
  enptyObject = upperCaseObject;
  upperCaseObject = enptyObject;
}

/*
  {},大Object是比小object更宽泛的类型，{}和大Object可以相互代替。用来表示原始类型（严格模式下null和undefined除外）和非原始类型，而小object则表示非原始类型
*/
