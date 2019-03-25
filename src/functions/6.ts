/**
 * 重载
 */
const _ = require('underscore');

const suits = ['hearts', 'spades', 'clubs', 'diamonds'];

/**
 * 老式写法
 * @param x
 */
function magic(x: number|string): number|string {
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

/******** 重载 ********/

/**
 * 从上往下查找匹配的，所以需要把最精确的、最期望的放在第一位
 * @param index
 */
function test(index: number): string;
function test(someone: string): number;
function test(x: number|string): number|string { // 这里不是重载部分
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
