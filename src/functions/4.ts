/**
 * 剩余参数
 *
 */

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
    const all = [first, second].concat(rest);
    let ret = '';

    all.forEach((str) => {
        ret += str;
    });

    console.log(ret);
};

sayAll('洪杨', '你', '打球', '很像蔡徐坤');
