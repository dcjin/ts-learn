/**
 * 在泛型约束中使用参数类型
 */
function getProperty<T, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

const x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'c');
// getProperty(x, 'm'); // error
