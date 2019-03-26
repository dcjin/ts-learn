/**
 * 重载
 */
import _ from 'underscore';
// tslint import-name off, should be import underscore from 'underscore'

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
 * 重载其实和正常js没啥区别，
 *
 * 用来确定它的参数类型种类和返回值也行，但你必须按实际js再写一份实际运行的代码
 *
 * 另外IDE会帮助你，check你的输入类型
 *
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
