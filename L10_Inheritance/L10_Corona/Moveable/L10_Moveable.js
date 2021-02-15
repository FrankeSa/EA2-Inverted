"use strict";
var L10_Corona;
(function (L10_Corona) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L10_Corona.Vector(0, 0);
            this.velocity = new L10_Corona.Vector(0, 0);
            //this.velocity.random(100, 100);
        }
        draw() {
            // console.log ("Moveable draw");
        }
        move(_timeslice) {
            let offset = new L10_Corona.Vector(this.velocity.x, this.velocity.y);
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
    L10_Corona.Moveable = Moveable;
})(L10_Corona || (L10_Corona = {}));
//# sourceMappingURL=L10_Moveable.js.map