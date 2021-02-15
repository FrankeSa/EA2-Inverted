import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb"; //Mongo Modul

export namespace L07_Haushaltshelfer {

    interface Order {
        [type: string]: string | string[] | undefined;
    }


    let orders: Mongo.Collection;

    // Open Port
    let port: number | string | undefined = process.env.PORT;

    if (port == undefined)
        port = 5001;

    //let databaseUrl: string = "mongodb://localhost:27017"; //wir unterhalten uns mit dem MongoDb Protokoll

    let databaseUrl: string = "mongodb+srv://FrankeSa:Milou@sarahcluster-pelct.mongodb.net/HH_Helfer?retryWrites=true&w=majority";



    startServer(port);              //Start Server auf den Port, der gefunden wurde. Wenn Heroku läuft, dann bekommen wir den Port zugewiesen und der Server startet
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {

        // Server Code
        let server: Http.Server = Http.createServer();

        console.log("server starting on port" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
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
        console.log("WHATS UPP");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write("\n" + key + ":" + " " + url.query[key]);
                console.log(url.query[key]);
            }

            let jsonString: string = JSON.stringify(url.query);
            _response.write("\n" + "Alert jsonString aus HH_Server.ts: " + jsonString);


            storeOrder(url.query);
        }





        _response.write("Hier könnte ihre Werbung stehen");
        _response.end();
    }



    function storeOrder(_order: Order): void {
        orders.insert(_order);

    }







}
