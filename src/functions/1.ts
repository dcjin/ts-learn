/**
 * 简单的functions type
 */

/**
 * 函数表达式
 * @param something
 * @param someone
 */
const giveSomethingToSomeone = (something: string, someone: string): void => {
    console.log(`hey ${someone}, ${something}给你`);
};

giveSomethingToSomeone('蔡徐坤的篮球', '洪杨');

/**
 * 函数声明
 * @param something
 * @param someone
 */
function saySomethingToSomeone(
    something: string,
    someone: string
): void {
    console.log(`hey ${someone}, ${something}`);
}

saySomethingToSomeone('你打球就像蔡徐坤', '洪杨');
