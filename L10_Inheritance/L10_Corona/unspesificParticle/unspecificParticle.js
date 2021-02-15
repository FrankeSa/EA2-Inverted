"use strict";
var L10_Corona;
(function (L10_Corona) {
    class unspesificParticle extends L10_Corona.Moveable {
        constructor(_position) {
            super(_position); //Aufruf in die Superklasse
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Corona.Vector(0, 0);
            this.velocity = new L10_Corona.Vector(0, 0);
            this.velocity.random(100, 100);
        }
        draw() {
            let radiusParticle = 30;
            let gradient = L10_Corona.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            L10_Corona.crc2.save();
            L10_Corona.crc2.beginPath();
            L10_Corona.crc2.translate(this.position.x, this.position.y);
            L10_Corona.crc2.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 35%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L10_Corona.crc2.fillStyle = gradient;
            L10_Corona.crc2.fill();
            L10_Corona.crc2.closePath();
            L10_Corona.crc2.restore();
        }
    }
    L10_Corona.unspesificParticle = unspesificParticle;
})(L10_Corona || (L10_Corona = {}));
//# sourceMappingURL=unspecificParticle.js.map