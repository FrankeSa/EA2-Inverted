"use strict";
var L09_Corona;
(function (L09_Corona) {
    let covid = [];
    let humCell = [];
    let unspParticle = [];
    let lightRedStop = 0.5;
    let backgroundImage;
    L09_Corona.canvas = document.querySelector("canvas");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Anfang_Start");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Corona.crc2 = canvas.getContext("2d");
        console.log("Background");
        drawBackground();
        drawKillerCell();
        drawAntiBody();
        drawunspesificParticle(20);
        drawHumanCell(3);
        drawCoronaVirus(13);
        window.setInterval(update, 30);
    }
    function drawBackground() {
        let gradient = L09_Corona.crc2.createLinearGradient(0, 0, 0, L09_Corona.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 100%, 60%)");
        gradient.addColorStop(1, "HSL(0, 100%, 75%)");
        gradient.addColorStop(lightRedStop, "HSL(12, 100%, 65%)");
        L09_Corona.crc2.fillStyle = gradient;
        L09_Corona.crc2.fillRect(0, 0, L09_Corona.crc2.canvas.width, L09_Corona.crc2.canvas.height);
    }
    function drawKillerCell() {
        let r1 = 15;
        let r2 = 60;
        let positionX = 100;
        let positionY = 475;
        let positionX2 = 175;
        let positionY2 = 575;
        let gradient = L09_Corona.crc2.createRadialGradient(0, 0, r1, 15, 0, r2);
        gradient.addColorStop(0, "HSL(120, 60%, 40%)");
        gradient.addColorStop(1, "HSLA(120, 60%, 55%,0)");
        L09_Corona.crc2.save();
        L09_Corona.crc2.translate(positionX, positionY);
        L09_Corona.crc2.fillStyle = gradient;
        L09_Corona.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_Corona.crc2.fill();
        L09_Corona.crc2.restore();
        L09_Corona.crc2.save();
        L09_Corona.crc2.translate(positionX2, positionY2);
        L09_Corona.crc2.fillStyle = gradient;
        L09_Corona.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_Corona.crc2.fill();
        L09_Corona.crc2.restore();
    }
    function drawAntiBody() {
        L09_Corona.crc2.beginPath();
        L09_Corona.crc2.moveTo(225, 425);
        L09_Corona.crc2.lineTo(250, 450);
        L09_Corona.crc2.moveTo(275, 425);
        L09_Corona.crc2.lineTo(250, 450);
        L09_Corona.crc2.moveTo(250, 450);
        L09_Corona.crc2.lineTo(250, 500);
        L09_Corona.crc2.stroke();
        L09_Corona.crc2.beginPath();
        L09_Corona.crc2.moveTo(375, 475);
        L09_Corona.crc2.lineTo(350, 450);
        L09_Corona.crc2.moveTo(375, 475);
        L09_Corona.crc2.lineTo(400, 450);
        L09_Corona.crc2.moveTo(375, 475);
        L09_Corona.crc2.lineTo(375, 525);
        L09_Corona.crc2.stroke();
        L09_Corona.crc2.beginPath();
        L09_Corona.crc2.moveTo(300, 550);
        L09_Corona.crc2.lineTo(275, 525);
        L09_Corona.crc2.moveTo(300, 550);
        L09_Corona.crc2.lineTo(325, 525);
        L09_Corona.crc2.moveTo(300, 550);
        L09_Corona.crc2.lineTo(300, 600);
        L09_Corona.crc2.stroke();
        L09_Corona.crc2.closePath();
        backgroundImage = L09_Corona.crc2.getImageData(0, 0, L09_Corona.crc2.canvas.width, L09_Corona.crc2.canvas.height);
        console.log("Hintergrund gezeichnet");
    }
    function drawunspesificParticle(_nParticle) {
        for (let drawn = 0; drawn < _nParticle; drawn++) {
            let positionX = Math.random() * L09_Corona.crc2.canvas.height; //eine zufällige Position verteilt auf der ganzen canvas Höhe
            let positionY = Math.random() * L09_Corona.crc2.canvas.width; //eine zufällige Position verteilt auf der ganzen canvas Breite
            let position = new L09_Corona.Vector(positionX, positionY); // erstellt einen neuen Vektor genau auf diesen Zufallswerten
            let particle = new L09_Corona.unspesificParticle(position); //Position als Vektor
            particle.draw();
            unspParticle.push(particle);
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
            let positionCell = new L09_Corona.Vector(positionX, positionY); // erstellt einen neuen Vektor genau auf diesen Zufallswerten
            let oneCell = new L09_Corona.HumanCell(positionCell); //Position als Vektor 
            oneCell.draw();
            humCell.push(oneCell);
        }
    }
    function drawCoronaVirus(_nVirus) {
        for (let drawn = 0; drawn < _nVirus; drawn++) {
            let positionX = Math.random() * L09_Corona.crc2.canvas.height; //eine zufällige Position verteilt auf der ganzen canvas Höhe
            let positionY = Math.random() * L09_Corona.crc2.canvas.width; //eine zufällige Position verteilt auf der ganzen canvas Breite
            let positionVirus = new L09_Corona.Vector(positionX, positionY); // erstellt einen neuen Vektor genau auf diesen Zufallswerten
            let oneVirus = new L09_Corona.CoronaVirus(positionVirus); //Position als Vektor 
            oneVirus.draw();
            covid.push(oneVirus);
        }
    }
    function update() {
        console.log("Update");
        L09_Corona.crc2.putImageData(backgroundImage, 0, 0);
        for (let particle of unspParticle) {
            particle.move(1 / 50);
            particle.draw();
        }
        for (let oneCell of humCell) {
            oneCell.draw();
        }
        for (let oneVirus of covid) {
            oneVirus.move(1 / 30);
            oneVirus.draw();
        }
    }
})(L09_Corona || (L09_Corona = {}));
//# sourceMappingURL=Main_Corona.js.map