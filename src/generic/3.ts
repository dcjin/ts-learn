/**
 * 泛型类
 */

class GenericAdd<T> {
    firstValue: T;

    constructor(firstValue: T) {
        this.firstValue = firstValue;
    }

    // add(x: T, y: T): T {
    //     return x + y;
    // }
}

const testGenericAddFn: GenericAdd<number> = new GenericAdd<number>(3);

// console.log(testGenericAddFn.add(3, 4));

/**
 * 泛型约束
 */

interface LengthWise {
    length: number;
}

class TideGenericFn<U extends LengthWise> {
    getTotalLength(propA: U, propB: U): number {
        return propA.length + propB.length;
    }
}

const testTideGenericFn = new TideGenericFn();

// console.log(testTideGenericFn.getTotalLength(3, 4));
console.log(testTideGenericFn.getTotalLength('str', 'test'));
console.log(testTideGenericFn.getTotalLength({ length: 3 }, { length: 9 }));
