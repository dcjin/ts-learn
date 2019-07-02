// declare function hello(): void;
function hello() {
    console.log('hello');
}
// 测试，这是个普通的单行注释
/**
 * 测试，这是个普通的多行注释
 */
// p0 正确的使用
/// <reference path="./hello.ts" />
// p1 在指令前加入了语句和声明
// const num = 10; /// <reference path="./hello.ts" />
// /// <reference path="./hello.ts" />
// p2 错误的引用
// /// <reference path="./helloNotExisted.ts" />
hello();
// p3 --noResolve使用
// 不会调整文件顺序
// 命令行相关
// cd ./src/tripleSlashDirectives/path/
// 测试--out --outFile
// tsc ./path.ts ./hello.ts --outFile ./out.js
// p3
// tsc path.ts --noResolve
