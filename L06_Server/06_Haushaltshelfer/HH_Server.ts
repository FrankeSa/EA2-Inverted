import * as Http from "http";
import * as Url from "url";

export namespace L06_Haushaltshelfer {

    // Server Code
    let server: Http.Server = Http.createServer();


    // Open Port
    let port: number | string | undefined = process.env.PORT;

    if (port == undefined)
        port = 5001;
    console.log("server starting on port" + port);
    server.listen(port);
    server.addListener("request", handleRequest);

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

        }





        _response.write("Hier könnte ihre Werbung stehen");
        _response.end();
    }











}
