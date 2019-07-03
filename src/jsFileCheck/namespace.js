const exportsModule = {};

// 支持IIEF
// const exportsModule = (() => {
//     return {};
// })();

exportsModule.say = () => {};
exportsModule.name = 'myTestModule';


class Utils {
    static getEnv() {}
}

Utils.getChannel = () => {};