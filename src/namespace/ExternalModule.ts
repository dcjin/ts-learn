import ExternalModuleLib = require('./ExternalModuleLib');

function myApiPlus(something: string): void {
    console.log('plus');
    ExternalModuleLib.myApi(something);
}

export = myApiPlus;
