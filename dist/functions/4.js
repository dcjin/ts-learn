"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require('underscore'); // need @types/node
function addAll(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var ret = x;
    for (var i = 0; i < rest.length; i += 1) {
        ret += rest[i];
    }
    console.log(ret);
}
addAll(1, 2, 3, 4, 5, 6);
var sayAll = function (first, second) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var all = [first, second].concat(rest);
    var ret = '';
    _.each(all, function (str) {
        ret += str;
    });
    console.log(ret);
};
sayAll('洪杨', '你', '打球', '很像蔡徐坤');
//# sourceMappingURL=4.js.map