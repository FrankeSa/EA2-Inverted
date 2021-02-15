"use strict";
var L09_Corona;
(function (L09_Corona) {
    class CoronaVirus {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Corona.Vector(0, 0);
            this.velocity = new L09_Corona.Vector(0, 0);
            this.velocity.random(50, 50);
        }
        draw() {
            let radiusVirus = 15;
            L09_Corona.crc2.beginPath();
            L09_Corona.crc2.save();
            L09_Corona.crc2.translate(this.position.x, this.position.y);
            L09_Corona.crc2.arc(0, 0, radiusVirus, 0, 2 * Math.PI);
            L09_Corona.crc2.fillStyle = "black";
            L09_Corona.crc2.fill();
            L09_Corona.crc2.closePath();
            L09_Corona.crc2.restore();
        }
        move(_timeslice) {
            let offset = new L09_Corona.Vector(0, this.velocity.x); // von oben nach unten
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
    L09_Corona.CoronaVirus = CoronaVirus;
})(L09_Corona || (L09_Corona = {}));
//# sourceMappingURL=Corona_Virus.js.map