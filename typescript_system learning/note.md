# typescript

安装: 全局安装的包只能在命令行中使用  tsc
```
npm install -g typescript
```

生成配置文件
```
tsc --init
```

## 执行TS文件方式
- 通过tsc执行(比较适合临时文件的测试)
  ```
  tsc 文件名.ts
  ```
- 通过vscode插件来执行(比较适合临时文件的测试)
  ```
  1. 安装code-runner插件。如果是js文件，可直接执行，内部采用node + 文件名来执行此文件；如果是ts文件，需要通过ts-node来直接执行
  2. 全局安装ts-node  npm i -g ts-node 
  3. 右键运行code-runner
  ```
- 通过构建工具(webpack、rollup、esbuild)将代码转化成js再去运行(比较适合大型项目)