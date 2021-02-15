"use strict";
var L10_AsteroidsInheritance;
(function (L10_AsteroidsInheritance) {
    class Projectile extends L10_AsteroidsInheritance.Moveable {
        constructor(_position, _velocity) {
            super(_position); //Aufruf der Super-Methode, um auf SuperKlasse zu zu greifen
            this.lifetime = 3;
            console.log("Procetile constructor");
            this.velocity = _velocity.copy();
        }
        draw() {
            //console.log("Astroid draw");
            L10_AsteroidsInheritance.crc2.save();
            L10_AsteroidsInheritance.crc2.translate(this.position.x, this.position.y);
            L10_AsteroidsInheritance.crc2.scale(3, 3);
            L10_AsteroidsInheritance.crc2.strokeRect(-1, -1, 1, 1);
            L10_AsteroidsInheritance.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice; // Die Zeit läuft ab
            if (this.lifetime < 0)
                this.expendable = true;
        }
    }
    L10_AsteroidsInheritance.Projectile = Projectile;
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Projectile.js.map