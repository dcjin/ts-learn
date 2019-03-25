/**
 * 完整的function type
 *
 * 两处相同
 * - 参数类型声明
 * - 函数返回值
 *
 * 完整的function type，需要两处，即参数声明和返回值
 * 关于参数声明可以声明一个名字，已于理解
 */

const myAddFn: (x: number, y: number) => number = (x: number, y: number): number => {
    return x + y;
};

const myAddFnPlus: (
    baseValue: number,
    increaseValue: number
) => number = (
    x: number,
    y: number
) => {
    return x + y;
};

console.log('myAddFn', myAddFn(3, 4)); // 这里显示的是x，y，意义不明

console.log('myAddFnPlus', myAddFnPlus(3, 4)); // 这里就很明确了嘛
