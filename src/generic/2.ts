/**
 * as a call signature of an object literal type
 *
 * 当做一个对象字面量的调用签名？
 */
function genericTest<T>(props: T): T {
    return props;
}

/**
 * 可以理解为  genericTest2 就像 一个方法接受一个yy类型的xx参数，返回一个yy类型的xx参数
 * 然后值为genericTest
 */
const genericTest2: {
    <L>(props: L): L
} = genericTest;

genericTest2(999);

/**
 * 升级成interface，比较好理解
 * 定义一个yy和xx
 */

interface GenericTypeTest {
    <T>(props: T): T;
}

const genericTest3: GenericTypeTest = genericTest;

console.log(genericTest3(1234567));

/**
 * 将泛型提级，升级成为接口的一个参数
 *
 * 即这个接口的成员都是以这样的类型接受的参数（简称，我都知道）
 *
 * 这样做不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分？？？
 *
 * 当使用这个接口时，还得传入泛型类型，锁定了之后代码里使用的类型
 *
 * 需要理解何时使用泛型函数，何时使用泛型接口
 */
interface SortCollectionSomething<T> {
    (arrayLikeObject: T[]): T[];
}

const someSortCollectionFn: SortCollectionSomething<string> = <T>(props: T[]): T[] => {
    props.forEach((prop: T): void => {
        console.log(prop);
    });

    return props;
};

someSortCollectionFn(['小明', '你打游戏', '真的很菜']);
