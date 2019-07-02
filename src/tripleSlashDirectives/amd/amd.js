define("hello3", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    /// <amd-module name="hello3" />
    function hello3() {
        console.log('hello3');
    }
    exports.hello3 = hello3;
});
// 命令
// tsc amd.ts --module amd
