"use strict";
var L11_Corona;
(function (L11_Corona) {
    //let covid: CoronaVirus[] = [];
    let humCell = [];
    let moveableObjects = [];
    let lightRedStop = 0.5;
    let backgroundImage;
    L11_Corona.canvas = document.querySelector("canvas");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Anfang_Start");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_Corona.crc2 = canvas.getContext("2d");
        console.log("Background");
        drawBackground();
        drawKillerCell();
        drawAntiBody();
        drawunspesificParticle(20);
        drawHumanCell(2);
        drawCoronaVirus(13);
        window.setInterval(update, 20);
    }
    function drawBackground() {
        let gradient = L11_Corona.crc2.createLinearGradient(0, 0, 0, L11_Corona.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 100%, 60%)");
        gradient.addColorStop(1, "HSL(0, 100%, 75%)");
        gradient.addColorStop(lightRedStop, "HSL(12, 100%, 65%)");
        L11_Corona.crc2.fillStyle = gradient;
        L11_Corona.crc2.fillRect(0, 0, L11_Corona.crc2.canvas.width, L11_Corona.crc2.canvas.height);
    }
    function drawKillerCell() {
        let r1 = 15;
        let r2 = 60;
        let positionX = 100;
        let positionY = 475;
        let positionX2 = 175;
        let positionY2 = 575;
        let gradient = L11_Corona.crc2.createRadialGradient(0, 0, r1, 15, 0, r2);
        gradient.addColorStop(0, "HSL(120, 60%, 40%)");
        gradient.addColorStop(1, "HSLA(120, 60%, 55%,0)");
        L11_Corona.crc2.save();
        L11_Corona.crc2.translate(positionX, positionY);
        L11_Corona.crc2.fillStyle = gradient;
        L11_Corona.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_Corona.crc2.fill();
        L11_Corona.crc2.restore();
        L11_Corona.crc2.save();
        L11_Corona.crc2.translate(positionX2, positionY2);
        L11_Corona.crc2.fillStyle = gradient;
        L11_Corona.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11_Corona.crc2.fill();
        L11_Corona.crc2.restore();
    }
    function drawAntiBody() {
        L11_Corona.crc2.beginPath();
        L11_Corona.crc2.moveTo(225, 425);
        L11_Corona.crc2.lineTo(250, 450);
        L11_Corona.crc2.moveTo(275, 425);
        L11_Corona.crc2.lineTo(250, 450);
        L11_Corona.crc2.moveTo(250, 450);
        L11_Corona.crc2.lineTo(250, 500);
        L11_Corona.crc2.stroke();
        L11_Corona.crc2.beginPath();
        L11_Corona.crc2.moveTo(375, 475);
        L11_Corona.crc2.lineTo(350, 450);
        L11_Corona.crc2.moveTo(375, 475);
        L11_Corona.crc2.lineTo(400, 450);
        L11_Corona.crc2.moveTo(375, 475);
        L11_Corona.crc2.lineTo(375, 525);
        L11_Corona.crc2.stroke();
        L11_Corona.crc2.beginPath();
        L11_Corona.crc2.moveTo(300, 550);
        L11_Corona.crc2.lineTo(275, 525);
        L11_Corona.crc2.moveTo(300, 550);
        L11_Corona.crc2.lineTo(325, 525);
        L11_Corona.crc2.moveTo(300, 550);
        L11_Corona.crc2.lineTo(300, 600);
        L11_Corona.crc2.stroke();
        L11_Corona.crc2.closePath();
        backgroundImage = L11_Corona.crc2.getImageData(0, 0, L11_Corona.crc2.canvas.width, L11_Corona.crc2.canvas.height);
        console.log("Hintergrund gezeichnet");
    }
    function drawunspesificParticle(_nParticle) {
        for (let drawn = 0; drawn < _nParticle; drawn++) {
            let positionX = Math.random() * L11_Corona.crc2.canvas.height; //eine zufällige Position verteilt auf der ganzen canvas Höhe
            let positionY = Math.random() * L11_Corona.crc2.canvas.width; //eine zufällige Position verteilt auf der ganzen canvas Breite
            let position = new L11_Corona.Vector(positionX, positionY); // erstellt einen neuen Vektor genau auf diesen Zufallswerten
            let moveableObject = new L11_Corona.unspesificParticle(position); //Position als Vektor
            moveableObject.draw();
            moveableObjects.push(moveableObject);
        }
    }
    function drawHumanCell(_nCell) {
        for (let drawn = 0; drawn < _nCell; drawn++) {
            let positionX;
            let positionY;
            if (drawn == 1) {
                positionX = 900;
                positionY = 150;
            }
            else
                positionX = 1100;
            positionY = 175;
            let positionCell = new L11_Corona.Vector(positionX, positionY); // erstellt einen neuen Vektor genau auf diesen Zufallswerten
            let cell = new L11_Corona.HumanCell(positionCell); //Position als Vektor 
            cell.draw();
            humCell.push(cell);
        }
    }
    function drawCoronaVirus(_nVirus) {
        for (let drawn = 0; drawn < _nVirus; drawn++) {
            let positionX = Math.random() * L11_Corona.crc2.canvas.height; //eine zufällige Position verteilt auf der ganzen canvas Höhe
            let positionY = Math.random() * L11_Corona.crc2.canvas.width; //eine zufällige Position verteilt auf der ganzen canvas Breite
            let positionVirus = new L11_Corona.Vector(positionX, positionY); // erstellt einen neuen Vektor genau auf diesen Zufallswerten
            let moveableObjekt = new L11_Corona.CoronaVirus(positionVirus); //Position als Vektor 
            moveableObjekt.draw();
            moveableObjects.push(moveableObjekt);
        }
    }
    function update() {
        console.log("Update");
        L11_Corona.crc2.putImageData(backgroundImage, 0, 0);
        for (let moveableObject of moveableObjects) {
            moveableObject.move(1 / 30);
            moveableObject.draw();
        }
        for (let cell of humCell) {
            cell.draw();
        }
        // for (let moveableObject of moveableObjects) {
        //     moveableObject.move(1 / 30);
        //     moveableObject.draw();
        // }
    }
})(L11_Corona || (L11_Corona = {}));
//# sourceMappingURL=Main_Corona.js.map