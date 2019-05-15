define(["require", "exports"], function (require, exports) {
    "use strict";
    function myApi(something) {
        console.log(something);
    }
    return { myApi: myApi };
});
