"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // das sind Module von Node, da Html wegfällt: importiere mir alles aus dem Modul Http und nenne es "Http"
const Url = require("url"); // der URL der mit der Request reinkam weiter zu verarbeiten
const Mongo = require("mongodb"); // Mongo Datenbank
var L07_CocktailBar;
(function (L07_CocktailBar) {
    let orders;
    // open Port
    let port = process.env.PORT; // let port sucht nach einem Port durch process, der Port könnte eine Nummer oder eine Zeichenkette oder undefined sein
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb://localhost:27017"; //mongodb Protokoll statt http
    startServer(port); //start server auf dem Port der gefunden wurde
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer(); // die var Server erstellt einen Http Server und speichert es in der var server
        console.log("Server starting on Port" + _port);
        server.listen(_port); // server hört auf den Port
        server.addListener("request", handleRequest); // höre auf Request und wenn erhalten, dann starte handleRequest.
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
        console.log("Hallo Cocktailbar");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true); // der Url.parser wandelt den UrlWithParsedQuery in ein anders Format um. Durch true wird daraus ein besser lesbares assoziatives Array. 
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key]);
            }
            let jsonString = JSON.stringify(url.query); // das JSON-Objekt wandelt assoziatives Arrays in Zeichenketten um 
            _response.write(jsonString);
            storeOrder(url.query);
        }
        _response.write("This is my response"); // Server schreibt Antwort 
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(L07_CocktailBar = exports.L07_CocktailBar || (exports.L07_CocktailBar = {}));
//# sourceMappingURL=Server.js.map