// @ts-check

class CheckJS {
    constructor() {
        this.numberA = 0;
        this.stringA = '';
    }

    test() {
        this.numberA = '3'; // @ts-ignore
        this.stringA = 1;
    }
}