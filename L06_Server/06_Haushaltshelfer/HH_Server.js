"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
var L06_Haushaltshelfer;
(function (L06_Haushaltshelfer) {
    // Server Code
    let server = Http.createServer();
    // Open Port
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("server starting on port" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("WHATS UPP");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write("\n" + key + ":" + " " + url.query[key]);
                console.log(url.query[key]);
            }
            let jsonString = JSON.stringify(url.query);
            _response.write("\n" + "Alert jsonString aus HH_Server.ts: " + jsonString);
        }
        _response.write("Hier könnte ihre Werbung stehen");
        _response.end();
    }
})(L06_Haushaltshelfer = exports.L06_Haushaltshelfer || (exports.L06_Haushaltshelfer = {}));
//# sourceMappingURL=HH_Server.js.map