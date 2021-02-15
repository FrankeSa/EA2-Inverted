"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb"); //Mongo Modul
var L07_Haushaltshelfer;
(function (L07_Haushaltshelfer) {
    let orders;
    // Open Port
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    //let databaseUrl: string = "mongodb://localhost:27017"; //wir unterhalten uns mit dem MongoDb Protokoll
    let databaseUrl = "mongodb+srv://FrankeSa:Milou@sarahcluster-pelct.mongodb.net/HH_Helfer?retryWrites=true&w=majority";
    startServer(port); //Start Server auf den Port, der gefunden wurde. Wenn Heroku läuft, dann bekommen wir den Port zugewiesen und der Server startet
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        // Server Code
        let server = Http.createServer();
        console.log("server starting on port" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    //Diese Funktion baut eine Verbindung zur Datenbank auf
    async function connectToDatabase(_url) {
        //open Mongo Client
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect(); //mit diesem Aufruf verbindet sich der Client mit dem Server
        orders = mongoClient.db("HH_Helfer").collection("Orders"); //Geht in die Datenbank HH_Helfer und hol dir die Collection "Orders"
        console.log("Database connection", orders != undefined); //true wenn collection gefunden. false, wenn nicht. 
    }
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
            storeOrder(url.query);
        }
        _response.write("Hier könnte ihre Werbung stehen");
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(L07_Haushaltshelfer = exports.L07_Haushaltshelfer || (exports.L07_Haushaltshelfer = {}));
//# sourceMappingURL=HH_Server.js.map