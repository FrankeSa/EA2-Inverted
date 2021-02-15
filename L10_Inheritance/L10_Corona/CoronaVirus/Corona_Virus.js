"use strict";
var L10_Corona;
(function (L10_Corona) {
    class CoronaVirus extends L10_Corona.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Corona.Vector(0, 0);
            this.velocity = new L10_Corona.Vector(0, 0);
            this.velocity.random(100, 100);
        }
        draw() {
            let radiusVirus = 15;
            L10_Corona.crc2.beginPath();
            L10_Corona.crc2.save();
            L10_Corona.crc2.translate(this.position.x, this.position.y);
            L10_Corona.crc2.arc(0, 0, radiusVirus, 0, 2 * Math.PI);
            L10_Corona.crc2.fillStyle = "black";
            L10_Corona.crc2.fill();
            L10_Corona.crc2.closePath();
            L10_Corona.crc2.restore();
        }
        move(_timeslice) {
            let offset = new L10_Corona.Vector(150, this.velocity.x);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_Corona.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_Corona.crc2.canvas.height;
            if (this.position.x > L10_Corona.crc2.canvas.width)
                this.position.x -= L10_Corona.crc2.canvas.width;
            if (this.position.y > L10_Corona.crc2.canvas.height)
                this.position.y -= L10_Corona.crc2.canvas.height;
        }
    }
    L10_Corona.CoronaVirus = CoronaVirus;
})(L10_Corona || (L10_Corona = {}));
//# sourceMappingURL=Corona_Virus.js.map