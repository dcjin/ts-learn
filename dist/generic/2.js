"use strict";
/**
 * as a call signature of an object literal type
 *
 * 当做一个对象字面量的调用签名？
 */
function genericTest(props) {
    return props;
}
/**
 * 可以理解为  genericTest2 就像 一个方法接受一个yy类型的xx参数，返回一个yy类型的xx参数
 * 然后值为genericTest
 */
var genericTest2 = genericTest;
genericTest2(999);
var genericTest3 = genericTest;
console.log(genericTest3(1234567));
var someSortCollectionFn = function (props) {
    props.forEach(function (prop) {
        console.log(prop);
    });
    return props;
};
someSortCollectionFn(['小明', '你打游戏', '真的很菜']);
//# sourceMappingURL=2.js.map