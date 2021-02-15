"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Projectile extends L11_AsteroidsAdvanced.Moveable {
        constructor(_position, _velocity) {
            super(_position); //Aufruf der Super-Methode, um auf SuperKlasse zu zu greifen
            this.lifetime = 2;
            console.log("Procetile constructor");
            this.velocity = _velocity.copy();
        }
        draw() {
            //console.log("Astroid draw");
            L11_AsteroidsAdvanced.crc2.save();
            L11_AsteroidsAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced.crc2.strokeRect(-1, -1, 1, 1);
            L11_AsteroidsAdvanced.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice; // Die Zeit läuft ab
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    L11_AsteroidsAdvanced.Projectile = Projectile;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Projectile.js.map