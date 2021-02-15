"use strict";
var L08_Canvas_Corona;
(function (L08_Canvas_Corona) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let lightRedStop = 0.5;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawHumanCell({ x: 900, y: 150 });
        drawHumanCell({ x: 1100, y: 175 });
        drawCoronaVirus({ x: 1050, y: 600 }, { x: 350, y: 250 }); // in den geschweiften Klammern zwei Vektorobjekte eins für Position und eins für die Größe des Rechtecks
        drawunspesificParticle({ x: 0, y: 300 }, { x: 975, y: 175 }); // in den geschweiften Klammern zwei Vektorobjekte eins für Position und eins für die Größe des Rechtecks
        drawKillerCell({ x: 100, y: 475 });
        drawKillerCell({ x: 175, y: 575 });
        drawAntiBody();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 100%, 60%)");
        gradient.addColorStop(1, "HSL(0, 100%, 75%)");
        gradient.addColorStop(lightRedStop, "HSL(12, 100%, 65%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawHumanCell(_position) {
        console.log("humanCell", _position);
        let r1 = 20;
        let r2 = 80;
        let gradient = crc2.createRadialGradient(0, 0, r1, 15, 0, r2);
        gradient.addColorStop(0, "HSLA(240, 100%, 50%)");
        gradient.addColorStop(1, "HSLA(195, 100%, 65%,0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawunspesificParticle(_position, _size) {
        console.log("unspesificParticle", _position, _size);
        let nParticles = 40;
        let radiusParticle = 30;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 35%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawCoronaVirus(_position, _size) {
        let nVirus = 7;
        let radiusVirus = 15;
        let CoronaPath = new Path2D();
        CoronaPath.arc(0, 0, radiusVirus, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "black";
        for (let drawn = 0; drawn < nVirus; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(CoronaPath);
            crc2.restore();
        }
        crc2.restore();
        // crc2.beginPath();
        // crc2.arc(975, 400, 30, 0, 2 * Math.PI);
        // crc2.fillStyle = "black";
        // crc2.fill();
        // crc2.stroke();
        // crc2.beginPath();
        // crc2.arc(975, 400, 10, 0, 2 * Math.PI);
        // crc2.fillStyle = "yellow";
        // crc2.fill();
        // crc2.stroke();
    }
    function drawKillerCell(_position) {
        let r1 = 15;
        let r2 = 60;
        let gradient = crc2.createRadialGradient(0, 0, r1, 15, 0, r2);
        gradient.addColorStop(0, "HSL(120, 60%, 40%)");
        gradient.addColorStop(1, "HSLA(120, 60%, 55%,0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawAntiBody() {
        crc2.beginPath();
        crc2.moveTo(225, 425);
        crc2.lineTo(250, 450);
        crc2.moveTo(275, 425);
        crc2.lineTo(250, 450);
        crc2.moveTo(250, 450);
        crc2.lineTo(250, 500);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(375, 475);
        crc2.lineTo(350, 450);
        crc2.moveTo(375, 475);
        crc2.lineTo(400, 450);
        crc2.moveTo(375, 475);
        crc2.lineTo(375, 525);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(300, 550);
        crc2.lineTo(275, 525);
        crc2.moveTo(300, 550);
        crc2.lineTo(325, 525);
        crc2.moveTo(300, 550);
        crc2.lineTo(300, 600);
        crc2.stroke();
        crc2.closePath();
    }
})(L08_Canvas_Corona || (L08_Canvas_Corona = {}));
//# sourceMappingURL=Script_Corona.js.map