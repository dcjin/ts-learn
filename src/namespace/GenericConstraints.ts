// 不支持length属性？
function constraints<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// 假设传入的是一个T类型数组，那就支持了
function constraintsPlus<T>(args: T[]): T[] {
    console.log(args.length);
    return args;
}

// 那别的不是数组的，或者length不只是数组的属性呢？
// 泛型约束
interface LengthWise {
    length: number;
}

function constraintsPlusPlus<T extends LengthWise>(args: T): T {
    console.log(args.length); // 这里就不报错了
    return args;
}

// 但是，你得这么传
constraintsPlusPlus({ length: 3, name: 'test' }); // 这里也有点像是给参数做接口化
constraintsPlusPlus(3); // error
