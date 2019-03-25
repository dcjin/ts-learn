"use strict";
/**
 * 简单的functions type
 */
var getSomeoneName = function (someone) {
    return someone.name || '';
};
var hongYang = {
    name: 'cxk',
    age: 18
};
console.log(getSomeoneName(hongYang));
/*** 函数声明 ***/
function saySomethingToSomeone(something, someone) {
    console.log("hey " + someone + ", " + something);
}
saySomethingToSomeone('你打球就像蔡徐坤', '洪杨');
//# sourceMappingURL=1.js.map