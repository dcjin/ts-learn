"use strict";
/**
 * 在泛型约束中使用参数类型
 */
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'c');
// getProperty(x, 'm'); // error
//# sourceMappingURL=4.js.map