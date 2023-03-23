/*
  接口与类型别名的区别:
*/
/*
  1. 定义：
  interface：Typescript的核心原则之一是对值所具有的结构进行检查，而接口的作用就是为这些值和你的代码及第三方库定义数据模型.
  type：类型别名，就是给类型取了一个新的名字。取别名不会新建一个类型。
  
  interface只能定义对象的数据结构，type侧重于直接定义类型
*/

// 2. 两者都可以用来描述对象或者函数的类型。但是语法不同。
{
  interface Point {
    x: number;
    y: number;
  }

  interface SetPoint {
    (x: number, y: number): void;
  }

  let add: SetPoint = (x: number, y: string) => {};
  // function add1:<SetPoint>(x: number, y: string) {}  这种不知道如何写

  type PointType = {
    x: number;
    y: number;
  };

  type SetPointType = (x: number, y: number) => void;
  let addType: SetPoint = (x: number, y: string) => {};
}

// 3. 类型别名还可以用于其他类型，如基本类型，联合类型，元组。这些是接口办不到的
{
  type Name = string;

  type partialPointX = { x: number };
  type partialPointY = { x: number };
  type partialPoint = partialPointX | partialPointY;

  type Tuple = [number, string];

  let div = document.getElementById("div");
  type B = typeof div;
}

// 4. 接口类型可以定义多次，类型别名不可以.接口定义多次会自动合并。
{
  interface Point {
    x: number;
  }
  interface Point {
    y: number;
  }
  // 上面两次定义相当于下面依次
  interface Point {
    x: number;
    y: number;
  }
  type PointType = {
    x: number;
  };
  // 标识符“PointType”重复
  type PointType = {
    y: number;
  };
}

// 5. 扩展方式不同
/*
  两者的扩展方式不同，但并不排斥。接口可以扩展类型别名，类型别名也可以或者接口
  接口的扩展就是继承，通过extends来实现。
  类型别名的扩展就是交叉类型，通过&类实现
*/
{
  interface PointX {
    x: number;
  }
  type PointY = {
    y: number;
  };

  type Point1 = PointX & { y: number };
  interface Point2 extends PointY {
    x: number;
  }
}

/*
  接口与类型别名的区别:
    1. 定义：接口主要是定义对象的数据结构,类型别名侧重于直接定义类型
    2. 两者都可以用来描述对象或者函数的类型。但是语法不同。
    3. 类型别名还可以用于其他类型，如基本类型，联合类型，元组。这些是接口办不到的.
    4. 接口类型可以定义多次，类型别名不可以.接口定义多次会自动合并。
    5.  两者的扩展方式不同，但并不排斥。接口可以扩展类型别名，类型别名也可以或者接口
      接口的扩展就是继承，通过extends来实现。
      类型别名的扩展就是交叉类型，通过&类实现
*/
