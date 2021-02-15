"use strict";
var L11_Corona;
(function (L11_Corona) {
    class CoronaVirus extends L11_Corona.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11_Corona.Vector(0, 0);
            this.velocity = new L11_Corona.Vector(0, 0);
            this.velocity.random(50, 50);
        }
        draw() {
            let radiusVirus = 15;
            L11_Corona.crc2.beginPath();
            L11_Corona.crc2.save();
            L11_Corona.crc2.translate(this.position.x, this.position.y);
            L11_Corona.crc2.arc(0, 0, radiusVirus, 0, 2 * Math.PI);
            L11_Corona.crc2.fillStyle = "black";
            L11_Corona.crc2.fill();
            L11_Corona.crc2.closePath();
            L11_Corona.crc2.restore();
        }
        move(_timeslice) {
            let offset = new L11_Corona.Vector(0, this.velocity.x);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_Corona.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_Corona.crc2.canvas.height;
            if (this.position.x > L11_Corona.crc2.canvas.width)
                this.position.x -= L11_Corona.crc2.canvas.width;
            if (this.position.y > L11_Corona.crc2.canvas.height)
                this.position.y -= L11_Corona.crc2.canvas.height;
        }
    }
    L11_Corona.CoronaVirus = CoronaVirus;
})(L11_Corona || (L11_Corona = {}));
//# sourceMappingURL=Corona_Virus.js.map