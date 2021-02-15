"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Asteroid extends L11_AsteroidsAdvanced.Moveable {
        constructor(_size, _position) {
            super(_position); //Aufruf der Super-Methode, um auf SuperKlasse zu zu greifen
            console.log("Astroid constructor");
            this.velocity = L11_AsteroidsAdvanced.Vector.getrandom(100, 200); // die Klasse Vector wird aufgerufen und bekomme durch die Methode getrandom einen zufälligen Vector mit Länge zwischen 100 und 200.
            this.type = Math.floor(Math.random() * 4); // bei Math.random()*4 wird eine zufällige Zahl (Kommazahl) zwischen null und vier erzeugt. Mit Math.floor werden die NachkommaStellen abgeschnitten. 
            this.size = _size; //_size wurde im Main als 1 festgelegt
            this.hitRadius = 50;
        }
        draw() {
            //console.log("Astroid draw");
            L11_AsteroidsAdvanced.crc2.save();
            L11_AsteroidsAdvanced.crc2.translate(this.position.x, this.position.y);
            L11_AsteroidsAdvanced.crc2.scale(this.size, this.size);
            L11_AsteroidsAdvanced.crc2.translate(-50, -50);
            L11_AsteroidsAdvanced.crc2.lineWidth = L11_AsteroidsAdvanced.linewidth / this.size;
            L11_AsteroidsAdvanced.crc2.stroke(L11_AsteroidsAdvanced.asteroidPaths[this.type]); // der Pfad aus dem Array, der zu dem Typ des Asteroiden gehören soll
            L11_AsteroidsAdvanced.crc2.restore();
        }
        isHit(_hotspot) {
            let hitSize = 50 * this.size; //definiert wie groß das Hit-Rechteck um den Asteroiden sein soll, wo es bei berühren als treffer gilt
            let difference = new L11_AsteroidsAdvanced.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y); // Abstand vom hotspot zum Asteroiden 
            return (Math.abs(difference.x) < hitSize && Math.abs(difference.y) < hitSize); //die Entfernung, egal ob ins negative oder positive, der Horizontalen
        }
    }
    L11_AsteroidsAdvanced.Asteroid = Asteroid;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Asteroid.js.map