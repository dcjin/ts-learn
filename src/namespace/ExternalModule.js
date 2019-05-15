define(["require", "exports", "./ExternalModuleLib"], function (require, exports, ExternalModuleLib) {
    "use strict";
    function myApiPlus(something) {
        console.log('plus');
        ExternalModuleLib.myApi(something);
    }
    return myApiPlus;
});
