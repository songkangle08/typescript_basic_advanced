// 默认rollup打包的时候会查找当前目录下rollup.config.js这个文件
/*
  rollup-plugin-typescript2
  用于将TypeScript文件编译成JavaScript文件，并将其打包到Rollup捆绑包中
  功能：
    1. 支持TypeScript的编译和压缩
    2. 自动引入TypeScript代码中使用的外部依赖
    3. 支持Tree-shaking来删除未使用的代码
    4. 可以与其他Rollup插件一起使用，例如rollup-plugin-babel，以在捆绑包中处理JavaScript文件。
*/
import ts from "rollup-plugin-typescript2";
/*
  @rollup/plugin-node-resolve
  用于解析Node.js模块中使用的导入语句，例如require()或import语句。它可以帮助Rollup查找并打包依赖节点模块。
  作用：
    1. Node.js内置模块：例如fs、path、http等。
    2. Node.js模块路径：例如相对路径、绝对路径和模块名。
    3. npm模块：例如lodash、react等
*/
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { fileURLToPath } from "url";
import path from "path";

/*
  __dirname是在commonJS规范中的文件名，esm中没有这个，但是esm中提供了import.meta.url-> file://xxx/xxx/xxx:
  可以使用url模块中的fileURLToPath转化为绝对路径
*/
console.log(111);
console.log(import.meta.url, "import.meta.url");
const __filename = fileURLToPath(import.meta.url); // 当前文件的绝对路径
const __dirname = path.dirname(__filename); // 当前文件夹的决定路径

// rollup采用esm模块来编写文件
export default {
  input: "./src/index.ts", // 项目入口
  output: {
    file: path.resolve(__dirname, "dist/bundle.js"), // 生成的文件在当前目录下的dist目录
    format: "iife", // 指定输出的格式 iife自调用函数 (function({}))()
    sourcemap: true, // 生成map
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts"],
    }), // 第三方包可能是js，也可能是ts
    ts({
      tsconfig: path.resolve(__dirname, "tsconfig.json"), // 指定ts的配置文件用哪个
    }),
  ],
};
