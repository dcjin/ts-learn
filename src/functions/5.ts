/**
 * typescript vs this
 *
 */

const ret = {
    colors: [
        'white', 'block', 'yellow'
    ],
    createGetARandomColor() {
        return function () {
            // console.log(this.colors[Math.floor(Math.random() * this.colors.length)]);
        };
    }
};

const fn = ret.createGetARandomColor();

fn();

/****** 割 *******/

const ret2 = {
    colors: [
        'white', 'block', 'yellow'
    ],
    /**
     * es6中箭头函数里的this指针来自于创建这个箭头函数的环境
     */
    createGetARandomColor() {
        return () => {
            console.log(this.colors[Math.floor(Math.random() * this.colors.length)]);
        };
    }
};

ret2.createGetARandomColor()();

/****** 割 *******/
interface Test {
    colors: string[];
    createGetARandomColor: (this: Test) => () => void;
}

/**
 * 显示声明this指针
 */
const ret3: Test = {
    colors: [
        'white', 'block', 'yellow'
    ],
    /**
     * 显示声明createGetARandom必须是在Test对象上调用的
     */
    createGetARandomColor(this: Test): () => void {
        return () => { // this: Test  an arrow function cannot have a this parameter
            console.log(this.colors[Math.floor(Math.random() * this.colors.length)]);
        };
    }
};

/****** 割 *******/
// callback
