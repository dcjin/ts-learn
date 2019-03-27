/**
 * 泛型是把类型明确的工作放到使用的时候，创建的时候去明确的特殊类型
 */

function test<T>(arg: T): T {
    return arg;
}

console.log(test<string>('小明'));

console.log(test('你游戏好菜啊'));

/**
 * 比如我们有个方法用来处理各种类型的集合
 * 例如返回这个类型集合的长度
 */

function test2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

function test3<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

const test100 = <T>(arg: T[]): T[] => {
    console.log(arg.length);
    return arg;
};

test100([1]);

const test4: <T>(arg: T[]) => T[] = test3;
/**
 * 只要数量和使用方式一致就可以
 *
 * 比如test3需要的是一个T类型的数组
 */
const test5: <SOME_TYPE>(props: SOME_TYPE[]) => SOME_TYPE[] = test3;

test4([1, 2, 3, 4, 5]);
test5([3, 2, 1]);
