"use strict";
var L09_Corona;
(function (L09_Corona) {
    class unspesificParticle {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Corona.Vector(0, 0);
            this.velocity = new L09_Corona.Vector(0, 0);
            this.velocity.random(100, 100);
        }
        draw() {
            let radiusParticle = 30;
            let gradient = L09_Corona.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            L09_Corona.crc2.save();
            L09_Corona.crc2.beginPath();
            L09_Corona.crc2.translate(this.position.x, this.position.y);
            L09_Corona.crc2.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 35%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L09_Corona.crc2.fillStyle = gradient;
            L09_Corona.crc2.fill();
            L09_Corona.crc2.closePath();
            L09_Corona.crc2.restore();
        }
        move(_timeslice) {
            let offset = new L09_Corona.Vector(this.velocity.y, 0);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Corona.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Corona.crc2.canvas.height;
            if (this.position.x > L09_Corona.crc2.canvas.width)
                this.position.x -= L09_Corona.crc2.canvas.width;
            if (this.position.y > L09_Corona.crc2.canvas.height)
                this.position.y -= L09_Corona.crc2.canvas.height;
        }
    }
    L09_Corona.unspesificParticle = unspesificParticle;
})(L09_Corona || (L09_Corona = {}));
//# sourceMappingURL=unspecificParticle.js.map