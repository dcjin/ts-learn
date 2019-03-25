"use strict";
/**
 * 简单的functions type
 */
/**
 * 函数表达式
 * @param something
 * @param someone
 */
var giveSomethingToSomeone = function (something, someone) {
    console.log("hey " + someone + ", " + something + "\u7ED9\u4F60");
};
giveSomethingToSomeone('蔡徐坤的篮球', '洪杨');
/**
 * 函数声明
 * @param something
 * @param someone
 */
function saySomethingToSomeone(something, someone) {
    console.log("hey " + someone + ", " + something);
}
saySomethingToSomeone('你打球就像蔡徐坤', '洪杨');
//# sourceMappingURL=1.js.map