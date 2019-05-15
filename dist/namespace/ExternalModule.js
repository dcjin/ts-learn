"use strict";
var ExternalModuleLib = require("./ExternalModuleLib");
function myApiPlus(something) {
    console.log('plus');
    ExternalModuleLib.myApi(something);
}
module.exports = myApiPlus;
//# sourceMappingURL=ExternalModule.js.map