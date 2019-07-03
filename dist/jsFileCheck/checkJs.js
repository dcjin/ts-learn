"use strict";
// @ts-check
var CheckJS = /** @class */ (function () {
    function CheckJS() {
        this.numberA = 0;
        this.stringA = '';
    }
    CheckJS.prototype.test = function () {
        this.numberA = '3'; // @ts-ignore
        this.stringA = 1;
    };
    return CheckJS;
}());
//# sourceMappingURL=checkJs.js.map