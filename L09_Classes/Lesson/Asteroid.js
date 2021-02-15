"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Asteroid {
        constructor(_size, _position) {
            console.log("Astroid constructor");
            if (_position) // wenn eine position verfügbar ist
                this.position = _position; // dann ist this.position die aktuelle Position 
            else // sonst
                this.position = new L09_Asteroids.Vector(0, 0); // Die Position ist ein neuer Vektor beginnend bei 0,0 (oben links)
            this.velocity = new L09_Asteroids.Vector(0, 0);
            this.velocity.random(100, 200); // Geschwindigkeit zufällig min 100px/sec und max 200px/sec
            this.type = Math.floor(Math.random() * 4); // bei Math.random()*4 wird eine zufällige Zahl (Kommazahl) zwischen null und vier erzeugt. Mit Math.floor werden die NachkommaStellen abgeschnitten. 
            this.size = _size; //_size wurde im Main als 1 festgelegt
        }
        move(_timeslice) {
            //console.log("Astroid move");
            let offset = new L09_Asteroids.Vector(this.velocity.x, this.velocity.y); // erstellt einen neuen Vektor der die genau die gleichen Werte hat wie der Velocity-Vektor
            offset.scale(_timeslice); //scaliert den Vektor um den _timeslice (für Verschiebung in der Zeit)
            this.position.add(offset); //die Verschiebung in der Zeit wird auf die Position addiert
            if (this.position.x < 0)
                this.position.x += L09_Asteroids.crc2.canvas.width; //wenn er nach oben den Bildschirm verlässt, soll er die Canvas Breite draufrechnen
            if (this.position.y < 0)
                this.position.y += L09_Asteroids.crc2.canvas.height; // wenn er nach links den Bildschirm verlässt, soll er die Canvas Höhe draufrechnen
            if (this.position.x > L09_Asteroids.crc2.canvas.width) // wenn er (der Asteorid) nach unten (width) den Bildschirm verlässt,  dann ziehe die Breite (widht) ab
                this.position.x -= L09_Asteroids.crc2.canvas.width;
            if (this.position.y > L09_Asteroids.crc2.canvas.height) // wenn er (der Asteorid) nach rechts (height) den Bildschirm verlässt,  dann ziehe die Höhe (height) ab
                this.position.y -= L09_Asteroids.crc2.canvas.height;
        }
        draw() {
            //console.log("Astroid draw");
            L09_Asteroids.crc2.save();
            L09_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Asteroids.crc2.scale(this.size, this.size);
            L09_Asteroids.crc2.translate(-50, -50);
            L09_Asteroids.crc2.stroke(L09_Asteroids.asteroidPaths[this.type]); // der Pfad aus dem Array, der zu dem Typ des Asteroiden gehören soll
            L09_Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitSize = 50 * this.size; //definiert wie groß das Hit-Rechteck um den Asteroiden sein soll, wo es bei berühren als treffer gilt
            let difference = new L09_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y); // Abstand vom hotspot zum Asteroiden 
            return (Math.abs(difference.x) < hitSize && Math.abs(difference.y) < hitSize); //die Entfernung, egal ob ins negative oder positive, der Horizontalen
        }
    }
    L09_Asteroids.Asteroid = Asteroid;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map