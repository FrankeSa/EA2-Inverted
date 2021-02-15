"use strict";
var DateiTest;
(function (DateiTest) {
    // async function communicate(_url: RequestInfo): Promise<void> {
    //     let response: Response = await fetch(_url);
    //     console.log("Response", response);
    //     let respText: string = await response.text(); //wandelt die response vom Server in einen Text um
    //     console.log(respText);
    // }
    // console.log("start");
    // communicate("https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt");
    // console.log("end");
    window.addEventListener("load", handleLoad);
    let crc2;
    let person = [
        //die variable ist ein Array
        { firstname: "Sarah", age: 12 },
        { firstname: "Hannes", age: 24 },
        { firstname: "Lisa", age: 30 }
    ];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawRect1();
        drawRect2();
        for (let name of person) { // 3) mit einer for of Schleife durch das Array gehen
            console.log("Vorname " + name.firstname, "Alter " + name.age);
        }
        let find;
        for (let index = 0; index < person.length; index++) {
            let item = person[index];
            if (item.firstname == "Lisa") {
                find = item;
                console.log(find);
                break;
            }
        }
        // let result: Persons | undefined = person.find(item => item.firstname === userValue);
        // console.log(result);
    }
    // // Zusatz
    // let array: string[]; // zuerst die variable als string Array definieren
    // array = ["John", "Hannes"]; // dann angeben was in der Variablen drin ist
    function drawBackground() {
        //crc2.save();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //crc2.restore();
    }
    function drawRect1() {
        crc2.fillStyle = "green";
        crc2.fillRect(0, 0, 50, 50);
    }
    function drawRect2() {
        //crc2.save();
        crc2.fillStyle = "green";
        crc2.translate(50, 50);
        crc2.rotate(30 * Math.PI / 180);
        crc2.scale(0.5, 0.5);
        crc2.fillRect(0, 0, 50, 50);
        //crc2.restore();
        crc2.translate(90, 90);
        crc2.rotate(-80 * Math.PI / 180);
        crc2.fillRect(0, 0, 50, 50);
    }
})(DateiTest || (DateiTest = {}));
//# sourceMappingURL=Datei_Test.js.map