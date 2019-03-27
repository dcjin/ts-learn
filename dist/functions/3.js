"use strict";
/**
 * 可选参数 和 默认参数
 *
 * 简单讲：就是期望的参数个数和实际传入的个数是需要一致的
 */
/**
 * 正常类型
 * @param firstName
 * @param lastName
 */
function buildName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
// buildName('小明'); // error, miss
// buildName('小', '明', '你真菜'); // error, too many
buildName('小', '明');
/**
 * 可续参数类型1，默认型
 * @param firstName
 * @param lastName
 */
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'yang'; }
    console.log(firstName + " " + lastName);
}
buildName2('小');
buildName2('小', undefined);
// buildName2('小', null); // error, 惰性求职只对undefined有效
// buildName('小', '明', '你真菜'); // error, too many
buildName2('小', '明');
/**
 * 可选类型3，默认型2
 * @param firstName
 * @param lastName
 */
function buildName3(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
buildName3('小');
//# sourceMappingURL=3.js.map