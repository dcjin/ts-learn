// 测试，这是个普通的单行注释
/**
 * 测试，这是个普通的多行注释
 */
// p1 在指令前加入了语句和声明
// const num = 10; /// <reference path="./hello.ts" />
// /// <reference path="./hello.ts" />
// p2 错误的引用
// /// <reference path="./helloNotExisted.ts" />
hello();
// p3 --noResolve使用
// 命令行相关
// cd ./src/tripleSlashDirectives/index/
// 测试--out --outFile
// tsc ./index.ts ./hello.ts --outFile ./out.js
// p3
// tsc index.ts --noResolve
