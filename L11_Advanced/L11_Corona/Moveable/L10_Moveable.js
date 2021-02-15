"use strict";
var L11_Corona;
(function (L11_Corona) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L11_Corona.Vector(0, 0);
            this.velocity = new L11_Corona.Vector(0, 0);
            //this.velocity.random(100, 100);
        }
        draw() {
            // console.log ("Moveable draw");
        }
        move(_timeslice) {
            let offset = new L11_Corona.Vector(this.velocity.y, 0); //partikel von links nach rechts
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
    L11_Corona.Moveable = Moveable;
})(L11_Corona || (L11_Corona = {}));
//# sourceMappingURL=L10_Moveable.js.map