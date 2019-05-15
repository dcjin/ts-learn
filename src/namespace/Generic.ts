// 模拟一个echo方法，假设现在做的事是你输入什么，我给你什么

// 假设写的时候知道，这是给字符串使用
// 快速意味着以后痛苦，你可能需要再写一个number类型的，或者xx类型的
function returnYourGive(somethingYouGive: string): string {
    return somethingYouGive;
}

console.log(returnYourGive('3'));

// 现在我这个方法number类型也想用
function returnYourGivePlus(something: any): any {
    return something;
}

console.log(returnYourGivePlus(3));
console.log(returnYourGivePlus('3'));
