"use strict";
/**
 * 泛型是把类型明确的工作放到使用的时候，创建的时候去明确的特殊类型
 */
function test(arg) {
    return arg;
}
console.log(test('小明'));
console.log(test('你游戏好菜啊'));
/**
 * 比如我们有个方法用来处理各种类型的集合
 * 例如返回这个类型集合的长度
 */
function test2(arg) {
    console.log(arg.length);
    return arg;
}
function test3(arg) {
    console.log(arg.length);
    return arg;
}
var test100 = function (arg) {
    console.log(arg.length);
    return arg;
};
test100([1]);
var test4 = test3;
/**
 * 只要数量和使用方式一致就可以
 *
 * 比如test3需要的是一个T类型的数组
 */
var test5 = test3;
test4([1, 2, 3, 4, 5]);
test5([3, 2, 1]);
//# sourceMappingURL=1.js.map