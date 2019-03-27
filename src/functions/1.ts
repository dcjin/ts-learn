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

giveSomethingToSomeone('一个篮球', '小明');

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

saySomethingToSomeone('你打游戏真菜', '小明');
