"use strict";
/**
 * typescript vs this
 *
 */
var ret = {
    colors: [
        'white', 'block', 'yellow'
    ],
    createGetARandomColor: function () {
        return function () {
            // console.log(this.colors[Math.floor(Math.random() * this.colors.length)]);
        };
    }
};
var fn = ret.createGetARandomColor();
fn();
/****** 割 *******/
var ret2 = {
    colors: [
        'white', 'block', 'yellow'
    ],
    /**
     * es6中箭头函数里的this指针来自于创建这个箭头函数的环境
     */
    createGetARandomColor: function () {
        var _this = this;
        return function () {
            console.log(_this.colors[Math.floor(Math.random() * _this.colors.length)]);
        };
    }
};
ret2.createGetARandomColor()();
/**
 * 显示声明this指针
 */
var ret3 = {
    colors: [
        'white', 'block', 'yellow'
    ],
    /**
     * 显示声明createGetARandom必须是在Test对象上调用的
     */
    createGetARandomColor: function () {
        var _this = this;
        return function () {
            console.log(_this.colors[Math.floor(Math.random() * _this.colors.length)]);
        };
    }
};
/****** 割 *******/
// callback
//# sourceMappingURL=5.js.map