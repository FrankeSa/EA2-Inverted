"use strict";
var L10_Corona;
(function (L10_Corona) {
    class HumanCell {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Corona.Vector(0, 0);
        }
        draw() {
            let r1 = 20;
            let r2 = 80;
            let gradient = L10_Corona.crc2.createRadialGradient(0, 0, r1, 15, 0, r2);
            gradient.addColorStop(0, "HSLA(240, 100%, 50%)");
            gradient.addColorStop(1, "HSLA(195, 100%, 65%,0)");
            L10_Corona.crc2.save();
            L10_Corona.crc2.translate(this.position.x, this.position.y);
            L10_Corona.crc2.fillStyle = gradient;
            L10_Corona.crc2.beginPath();
            L10_Corona.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L10_Corona.crc2.closePath();
            L10_Corona.crc2.fill();
            L10_Corona.crc2.restore();
        }
    }
    L10_Corona.HumanCell = HumanCell;
})(L10_Corona || (L10_Corona = {}));
//# sourceMappingURL=Human_Cell.js.map