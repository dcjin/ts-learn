/**
 * 泛型是把类型明确的工作放到使用的时候，创建的时候去明确的特殊类型
 */

function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>('洪杨'));

console.log(identity('你打球很像蔡徐坤你'));

function indentity2<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}