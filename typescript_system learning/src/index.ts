let a: string = "a";
// ts学习的过程中主要学习ts如何写类型（ts关注的是类型，不是业务逻辑）

// ts类型分类：基础类型、高级类型、内置类型、自定义类型、类型体操

/*
  ts的特点：
    1. ts的目的是什么？从安全的角度考虑使用（考虑我在赋予结果的时候，是否会发生错误）
    2. ts是用来检测类型的，只是在编写代码的时候提示作用，不是在运行的时候发生的（运行的时候和ts无关）
    3. ts在编译代码后类型就消失了，不存在类型了（写的都是空气），最终在生成环境下，可以添加.d.ts来对js文件增加类型说明
*/

// 基础类型
// number、string、boolean、array、tuple、enum、null、undefined、void、never、any、object、symbol、bigint

// symbol
const symbol: symbol = Symbol("abc");

// bigint
const bigint: bigint = BigInt(Number.MAX_SAFE_INTEGER + 1);
