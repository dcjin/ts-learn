"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 重载
 */
var underscore_1 = __importDefault(require("underscore"));
// tslint import-name off, should be import underscore from 'underscore'
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
    if (underscore_1.default.isNumber(x)) {
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
    if (underscore_1.default.isNumber(x)) {
        return suits[x] || '';
    }
    return '';
}
console.log(test(2));
console.log(test('diamonds'));
//# sourceMappingURL=6.js.map