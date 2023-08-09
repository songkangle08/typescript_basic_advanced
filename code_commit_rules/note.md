## 包的作用
- husky: 代码提交插件--- 作用就是在git执行一些操作的时候触发一些钩子，在钩子处执行一些自己需要的命令
- commitizen: 代码提交辅助工具，就是用于命令交互式提交的插件
- cz-customizable： 自定义提交配置，就是.cz-config.js
- lint-staged 用于预提交时要进行代码检查的规范，比如eslint，检测代码的书写规范
  - stylelintrc     检测less规范
  - prettier
    - prettierrc.js  
    - prettierignore  
  - eslint
    - eslintrc.js   eslint的规范
    - eslintignore  忽略eslint检测的工具
- commitlint git提交规范检测