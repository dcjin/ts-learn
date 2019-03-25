"use strict";
/**
 * 完整的function type
 *
 * 两处相同
 * - 参数类型声明
 * - 函数返回值
 *
 * 完整的function type，需要两处，即参数声明和返回值
 * 关于参数声明可以声明一个名字，已于理解
 */
var myAddFn = function (x, y) {
    return x + y;
};
var myAddFnPlus = function (x, y) {
    return x + y;
};
console.log('myAddFn', myAddFn(3, 4)); // 这里显示的是x，y，意义不明
console.log('myAddFnPlus', myAddFnPlus(3, 4)); // 这里就很明确了嘛
//# sourceMappingURL=2.js.map