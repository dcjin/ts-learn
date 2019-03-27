"use strict";
/**
 * 泛型类
 */
var GenericAdd = /** @class */ (function () {
    function GenericAdd(firstValue) {
        this.firstValue = firstValue;
    }
    return GenericAdd;
}());
var testGenericAddFn = new GenericAdd(3);
var TideGenericFn = /** @class */ (function () {
    function TideGenericFn() {
    }
    TideGenericFn.prototype.getTotalLength = function (propA, propB) {
        return propA.length + propB.length;
    };
    return TideGenericFn;
}());
var testTideGenericFn = new TideGenericFn();
// console.log(testTideGenericFn.getTotalLength(3, 4));
console.log(testTideGenericFn.getTotalLength('str', 'test'));
console.log(testTideGenericFn.getTotalLength({ length: 3 }, { length: 9 }));
//# sourceMappingURL=3.js.map