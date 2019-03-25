/**
 * 完整的function type
 *
 * 两处相同
 * - 参数类型声明
 * - 函数返回值
 *
 * 我们还可以以参数列表的形式列出所有的参数和返回值
 * 并且给他们取个好听能理解的名字（不会检查是否匹配，只检查类型）
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
