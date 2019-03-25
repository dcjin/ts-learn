/**
 * 简单的functions type
 */

/*** 函数表达式 ***/
interface Person {
    name: string;
    age: number;
}

const getSomeoneName = (someone: Person): string => {
    return someone.name || '';
};

const hongYang: Person = {
    name: 'cxk',
    age: 18
};

console.log(getSomeoneName(hongYang));

/*** 函数声明 ***/
function saySomethingToSomeone(
    something: string,
    someone: string
): void {
    console.log(`hey ${someone}, ${something}`);
}

saySomethingToSomeone('你打球就像蔡徐坤', '洪杨');
