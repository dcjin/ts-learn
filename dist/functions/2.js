"use strict";
/**
 * 完整的function type
 *
 * 两处相同
 * - 参数类型声明
 * - 函数返回值
 *
 * 我们还可以以参数列表的形式列出所有的参数和返回值
 * 并且给他们取个好听能理解的名字（不会检查是否匹配，只检查类型）
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