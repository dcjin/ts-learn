"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
    }
    Queue.prototype.push = function (item) {
        this.queue.push(item);
    };
    Queue.prototype.pop = function () {
        return this.queue.shift();
    };
    return Queue;
}());
var myQueue = new Queue();
myQueue.push('3');
myQueue.push('4');
console.log(myQueue.pop());
console.log(myQueue.pop().substr(1));
myQueue.push(3);
var myQueue2 = new Queue();
myQueue2.push('3');
//# sourceMappingURL=GenericClass.js.map