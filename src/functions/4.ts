/**
 * 剩余参数
 *
 */
import { UnderscoreStatic } from 'underscore';

const _: UnderscoreStatic = require('underscore'); // need @types/node

function addAll(x: number, ...rest: number[]): void { // Array<number>  tslint
    let ret = x;

    for (let i = 0; i < rest.length; i += 1) {
        ret += rest[i];
    }

    console.log(ret);
}

addAll(1, 2, 3, 4, 5, 6);

const sayAll: (
    first: string,
    second: string,
    ...rest: string[]
) => void = (
    first: string,
    second: string,
    ...rest: string[]
) => {
    const all: string[] = [first, second].concat(rest);
    let ret: string = '';

    _.each(all, (str: string): void => {
        ret += str;
    });

    console.log(ret);
};

sayAll('小明', '你', '打游戏', '真的菜');
