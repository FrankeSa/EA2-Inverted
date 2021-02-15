"use strict";
var L11_Corona;
(function (L11_Corona) {
    class unspesificParticle extends L11_Corona.Moveable {
        constructor(_position) {
            super(_position); //Aufruf in die Superklasse
            if (_position)
                this.position = _position;
            else
                this.position = new L11_Corona.Vector(0, 0);
            this.velocity = new L11_Corona.Vector(0, 0);
            this.velocity.random(100, 100);
        }
        draw() {
            let radiusParticle = 30;
            let gradient = L11_Corona.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            L11_Corona.crc2.save();
            L11_Corona.crc2.beginPath();
            L11_Corona.crc2.translate(this.position.x, this.position.y);
            L11_Corona.crc2.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 35%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L11_Corona.crc2.fillStyle = gradient;
            L11_Corona.crc2.fill();
            L11_Corona.crc2.closePath();
            L11_Corona.crc2.restore();
        }
    }
    L11_Corona.unspesificParticle = unspesificParticle;
})(L11_Corona || (L11_Corona = {}));
//# sourceMappingURL=unspecificParticle.js.map