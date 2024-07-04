"use strict";
function render(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
render("mOrteza");
//# sourceMappingURL=index.js.map