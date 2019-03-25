"use strict";
/**
 * 重载
 */
var _ = require('underscore');
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
/**
 * 老式写法
 * @param x
 */
function magic(x) {
    // if (_.isString(x)) {
    //     // ...
    // }
    if (typeof x === 'string') {
        return suits.indexOf(x);
    }
    if (_.isNumber(x)) {
        return suits[x] || '';
    }
    return '';
}
console.log(magic('clubs'));
console.log(magic(3));
function test(x) {
    if (typeof x === 'string') {
        return suits.indexOf(x);
    }
    if (_.isNumber(x)) {
        return suits[x] || '';
    }
    return '';
}
console.log(test(2));
console.log(test('diamonds'));
//# sourceMappingURL=6.js.map