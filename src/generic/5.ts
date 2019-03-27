/**
 * 在泛型里使用类类型
 */
function getInstance<T>(c: { new(): T; }): T {
    return new c();
}

/**
 * 更高级的例子
 */
class BeeKeeper {
    hasMask: boolean = true;
}

class ZooKeeper {
    nameTag: string = 'zooKeeper';
}

class Animal {
    hasLife: boolean = true;
}

class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}

/**
 * 约束泛型是animal
 * @param c
 */
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

console.log(createInstance(Lion).keeper.nameTag);  // typechecks!
console.log(createInstance(Bee).keeper.hasMask);   // typechecks!
