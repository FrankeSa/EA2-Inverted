"use strict";
var L10_AsteroidsInheritance;
(function (L10_AsteroidsInheritance) {
    class Asteroid extends L10_AsteroidsInheritance.Moveable {
        constructor(_size, _position) {
            super(_position); //Aufruf der Super-Methode, um auf SuperKlasse zu zu greifen
            console.log("Astroid constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_AsteroidsInheritance.Vector(0, 0); // Die Position ist ein neuer Vektor beginnend bei 0,0 (oben links)
            this.velocity = new L10_AsteroidsInheritance.Vector(0, 0);
            this.velocity.random(100, 200); // Geschwindigkeit zufällig min 100px/sec und max 200px/sec
            this.type = Math.floor(Math.random() * 4); // bei Math.random()*4 wird eine zufällige Zahl (Kommazahl) zwischen null und vier erzeugt. Mit Math.floor werden die NachkommaStellen abgeschnitten. 
            this.size = _size; //_size wurde im Main als 1 festgelegt
        }
        draw() {
            //console.log("Astroid draw");
            L10_AsteroidsInheritance.crc2.save();
            L10_AsteroidsInheritance.crc2.translate(this.position.x, this.position.y);
            L10_AsteroidsInheritance.crc2.scale(this.size, this.size);
            L10_AsteroidsInheritance.crc2.translate(-50, -50);
            L10_AsteroidsInheritance.crc2.lineWidth = L10_AsteroidsInheritance.linewidth / this.size;
            L10_AsteroidsInheritance.crc2.stroke(L10_AsteroidsInheritance.asteroidPaths[this.type]); // der Pfad aus dem Array, der zu dem Typ des Asteroiden gehören soll
            L10_AsteroidsInheritance.crc2.restore();
        }
        isHit(_hotspot) {
            let hitSize = 50 * this.size; //definiert wie groß das Hit-Rechteck um den Asteroiden sein soll, wo es bei berühren als treffer gilt
            let difference = new L10_AsteroidsInheritance.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y); // Abstand vom hotspot zum Asteroiden 
            return (Math.abs(difference.x) < hitSize && Math.abs(difference.y) < hitSize); //die Entfernung, egal ob ins negative oder positive, der Horizontalen
        }
    }
    L10_AsteroidsInheritance.Asteroid = Asteroid;
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Asteroid.js.map