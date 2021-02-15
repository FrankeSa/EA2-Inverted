"use strict";
var L10_AsteroidsInheritance;
(function (L10_AsteroidsInheritance) {
    class Moveable {
        constructor(_position) {
            //console.log("Moveable constructor");
            this.expendable = false;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L10_AsteroidsInheritance.Vector(0, 0); // Die Position ist ein neuer Vektor beginnend bei 0,0 (oben links)
            this.velocity = new L10_AsteroidsInheritance.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("Moveable move");
            let offset = this.velocity.copy(); // erstellt einen neuen Vektor der die genau die gleichen Werte hat wie der Velocity-Vektor
            offset.scale(_timeslice); //scaliert den Vektor um den _timeslice (für Verschiebung in der Zeit)
            this.position.add(offset); //die Verschiebung in der Zeit wird auf die Position addiert
            if (this.position.x < 0)
                this.position.x += L10_AsteroidsInheritance.crc2.canvas.width; //wenn er nach oben den Bildschirm verlässt, soll er die Canvas Breite draufrechnen
            if (this.position.y < 0)
                this.position.y += L10_AsteroidsInheritance.crc2.canvas.height; // wenn er nach links den Bildschirm verlässt, soll er die Canvas Höhe draufrechnen
            if (this.position.x > L10_AsteroidsInheritance.crc2.canvas.width) // wenn er (der Asteorid) nach unten (width) den Bildschirm verlässt,  dann ziehe die Breite (widht) ab
                this.position.x -= L10_AsteroidsInheritance.crc2.canvas.width;
            if (this.position.y > L10_AsteroidsInheritance.crc2.canvas.height) // wenn er (der Asteorid) nach rechts (height) den Bildschirm verlässt,  dann ziehe die Höhe (height) ab
                this.position.y -= L10_AsteroidsInheritance.crc2.canvas.height;
        }
        draw() {
            //console.log("Moveable draw");
        }
    }
    L10_AsteroidsInheritance.Moveable = Moveable;
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Moveable.js.map