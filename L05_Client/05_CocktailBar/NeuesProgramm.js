"use strict";
var L04_CocktailBar;
(function (L04_CocktailBar) {
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        await response.text();
    }
    L04_CocktailBar.communicate = communicate;
})(L04_CocktailBar || (L04_CocktailBar = {}));
//# sourceMappingURL=NeuesProgramm.js.map