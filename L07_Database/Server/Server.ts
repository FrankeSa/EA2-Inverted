import * as Http from "http"; // das sind Module von Node, da Html wegfällt: importiere mir alles aus dem Modul Http und nenne es "Http"
import * as Url from "url"; // der URL der mit der Request reinkam weiter zu verarbeiten
import * as Mongo from "mongodb"; // Mongo Datenbank

export namespace L07_CocktailBar {
 
    interface Order {
        [type: string]: string | string[] | undefined;
    }

    let orders: Mongo.Collection;

    // open Port
    let port: number | string | undefined = process.env.PORT; // let port sucht nach einem Port durch process, der Port könnte eine Nummer oder eine Zeichenkette oder undefined sein
    if (port == undefined)
        port = 5001;

    let databaseUrl: string = "mongodb://localhost:27017"; //mongodb Protokoll statt http

    startServer(port); //start server auf dem Port der gefunden wurde
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {

        let server: Http.Server = Http.createServer(); // die var Server erstellt einen Http Server und speichert es in der var server
        console.log("Server starting on Port" + _port);
        server.listen(_port); // server hört auf den Port
        server.addListener("request", handleRequest); // höre auf Request und wenn erhalten, dann starte handleRequest.
    }

    //Diese Funktion baut eine Verbindung zur Datenbank auf
    async function connectToDatabase(_url: string): Promise<void> {

        //open Mongo Client
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect(); //mit diesem Aufruf verbindet sich der Client mit dem Server
        orders = mongoClient.db("HH_Helfer").collection("Orders"); //Geht in die Datenbank HH_Helfer und hol dir die Collection "Orders"
        console.log("Database connection", orders != undefined); //true wenn collection gefunden. false, wenn nicht. 
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Hallo Cocktailbar");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); // der Url.parser wandelt den UrlWithParsedQuery in ein anders Format um. Durch true wird daraus ein besser lesbares assoziatives Array. 
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key]);
            }
            let jsonString: string = JSON.stringify(url.query); // das JSON-Objekt wandelt assoziatives Arrays in Zeichenketten um 
            _response.write(jsonString);
            storeOrder(url.query);
        }

        _response.write("This is my response"); // Server schreibt Antwort 
        _response.end();

    }
    function storeOrder(_order: Order): void {
        orders.insert(_order);

    }

}