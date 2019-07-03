"use strict";
/// <reference path="./hello.ts" />
// 错误的引用
// /// <reference path="./helloNotExisted.ts" />
hello();
// p3 --noResolve使用
// 不会调整文件顺序
// 命令行相关
// cd ./src/tripleSlashDirectives/path/
// 测试--out --outFile
// tsc ./index.ts ./hello.ts --outFile ./out.js
// p3
// tsc ./index.ts ./hello.ts --outFile ./out.js --noResolve
//# sourceMappingURL=index.js.map