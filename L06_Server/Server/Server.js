"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // das sind Module von Node, da Html wegfällt: importiere mir alles aus dem Modul Http und nenne es "Http"
const Url = require("url"); // der URL der mit der Request reinkam weiter zu verarbeiten
var L06_CocktailBar;
(function (L06_CocktailBar) {
    let server = Http.createServer(); // die var Server erstellt einen Http Server und speichert es in der var server
    // open Port
    let port = process.env.PORT; // let port sucht nach einem Port durch process, der Port könnte eine Nummer oder eine Zeichenkette oder undefined sein
    if (port == undefined)
        port = 5001;
    console.log("Server starting on Port" + port);
    server.listen(port); // server hört auf den Port
    server.addListener("request", handleRequest); // höre auf Request und wenn erhalten, dann starte handleRequest.
    function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true); // der Url.parser wandelt den UrlWithParsedQuery in ein anders Format um. Durch true wird daraus ein besser lesbares assoziatives Array. 
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key]);
            }
            let jsonString = JSON.stringify(url.query); // das JSON-Objekt wandelt assoziatives Arrays in Zeichenketten um 
            _response.write(jsonString);
        }
        _response.write("This is my response"); // Server schreibt Antwort 
        _response.end();
    }
})(L06_CocktailBar = exports.L06_CocktailBar || (exports.L06_CocktailBar = {}));
//# sourceMappingURL=Server.js.map