class Queue<T> {
    queue: T[];
    constructor() {
        this.queue = [];
    }
    push(item: T): void {
        this.queue.push(item);
    }
    pop(): T | undefined {
        return this.queue.shift();
    }
}

const myQueue: Queue<string> = new Queue<string>();

myQueue.push('3');
myQueue.push('4');
console.log(myQueue.pop());
console.log(myQueue.pop().substr(1));

myQueue.push(3);

const myQueue2: Queue<number> = new Queue<number>();

myQueue2.push('3');
