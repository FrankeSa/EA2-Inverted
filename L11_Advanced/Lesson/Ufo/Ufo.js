"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Ufo extends L11_AsteroidsAdvanced.Moveable {
        constructor() {
            super();
            this.position = new L11_AsteroidsAdvanced.Vector(0, Math.random() * L11_AsteroidsAdvanced.crc2.canvas.height);
            this.velocity = new L11_AsteroidsAdvanced.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(Ufo.speed);
            this.hitRadius = 25;
        }
        draw() {
            L11_AsteroidsAdvanced.crc2.save();
            L11_AsteroidsAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced.crc2.translate(-30, -17);
            L11_AsteroidsAdvanced.crc2.stroke(L11_AsteroidsAdvanced.ufoPath);
            L11_AsteroidsAdvanced.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (Math.random() < 0.03)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);
        }
        shoot() {
            console.log("Ufo shoots");
            let event = new CustomEvent("ufoShoots", { detail: { ufo: this } }); //durch den Schlüssel detail kann ich dem Event Informationen mitgeben. Und Ufo ist ein eigens definierter Schlüssel, der mitgegeben wird. Ufo vereißt auf das gerade aktuelle Ufo. Min 14 erstes Vidoe L11
            L11_AsteroidsAdvanced.crc2.canvas.dispatchEvent(event); // der crc2.canvas verschickt das Event. Durch die Methode dispatchEvent wird es verschickt. 
        }
    }
    Ufo.speed = 50;
    L11_AsteroidsAdvanced.Ufo = Ufo;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Ufo.js.map