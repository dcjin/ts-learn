// @type

/**
 *
 * @type {number}
 */
const age = 16;
/**
 * @type {number | string | boolean}
 */
let something;

something = 1;
something = false;
something = 'string';
something = {}; // error

/**
 * @type {*}
 */
let any;
/**
 * @type {?}
 */
let any2;

/********************************* 华丽分割线 *********************************/

/**
 *
 * @type {Array<number>}
 */
const arr = [];

arr.push(3);
arr.push(false); // error

/**
 *
 * @type {number[]}
 */
const arr2 = [];
/**
 *
 * @type {Array.<number>}
 */
const arr3 = [];


/********************************* 华丽分割线 *********************************/

/**
 *
 * @type {{a: number, b: string}}
 */
const obj1 = {};

obj1.a = false; // error

/**
 *
 * @type {object.<string, number>}
 */
const obj2 = {};
obj2['get'] = 3;

/**
 *
 * @type {Object.<string, number>}
 */
const mapLike = {};

/**
 * @type {Object.<number, string>}
 */
let arrLike;


/********************************* 华丽分割线 *********************************/

/**
 * @type {function}
 */
const fn1 = () => {};

/**
 * @type {function(string, number): void}
 */
const clouseStyle = () => {};

/**
 * @type {(s:string, n: number) => number}
 */
const typeStyle = (s, n) => 3;