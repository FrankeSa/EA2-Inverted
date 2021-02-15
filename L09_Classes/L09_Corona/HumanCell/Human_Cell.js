"use strict";
var L09_Corona;
(function (L09_Corona) {
    class HumanCell {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Corona.Vector(0, 0);
        }
        draw() {
            let r1 = 20;
            let r2 = 80;
            let gradient = L09_Corona.crc2.createRadialGradient(0, 0, r1, 15, 0, r2);
            gradient.addColorStop(0, "HSLA(240, 100%, 50%)");
            gradient.addColorStop(1, "HSLA(195, 100%, 65%,0)");
            L09_Corona.crc2.save();
            L09_Corona.crc2.translate(this.position.x, this.position.y);
            L09_Corona.crc2.fillStyle = gradient;
            L09_Corona.crc2.beginPath();
            L09_Corona.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L09_Corona.crc2.closePath();
            L09_Corona.crc2.fill();
            L09_Corona.crc2.restore();
        }
    }
    L09_Corona.HumanCell = HumanCell;
})(L09_Corona || (L09_Corona = {}));
//# sourceMappingURL=Human_Cell.js.map