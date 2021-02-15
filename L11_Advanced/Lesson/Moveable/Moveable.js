"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    class Moveable {
        constructor(_position) {
            //console.log("Moveable constructor");
            this.expendable = false;
            this.hitRadius = 0;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11_AsteroidsAdvanced.Vector(0, 0); // Die Position ist ein neuer Vektor beginnend bei 0,0 (oben links)
            this.velocity = new L11_AsteroidsAdvanced.Vector(0, 0);
        }
        move(_timeslice) {
            //console.log("Moveable move");
            let offset = this.velocity.copy(); // erstellt einen neuen Vektor der die genau die gleichen Werte hat wie der Velocity-Vektor
            offset.scale(_timeslice); //scaliert den Vektor um den _timeslice (für Verschiebung in der Zeit)
            this.position.add(offset); //die Verschiebung in der Zeit wird auf die Position addiert
            if (this.position.x < 0)
                this.position.x += L11_AsteroidsAdvanced.crc2.canvas.width; //wenn er nach oben den Bildschirm verlässt, soll er die Canvas Breite draufrechnen
            if (this.position.y < 0)
                this.position.y += L11_AsteroidsAdvanced.crc2.canvas.height; // wenn er nach links den Bildschirm verlässt, soll er die Canvas Höhe draufrechnen
            if (this.position.x > L11_AsteroidsAdvanced.crc2.canvas.width) // wenn er (der Asteorid) nach unten (width) den Bildschirm verlässt,  dann ziehe die Breite (widht) ab
                this.position.x -= L11_AsteroidsAdvanced.crc2.canvas.width;
            if (this.position.y > L11_AsteroidsAdvanced.crc2.canvas.height) // wenn er (der Asteorid) nach rechts (height) den Bildschirm verlässt,  dann ziehe die Höhe (height) ab
                this.position.y -= L11_AsteroidsAdvanced.crc2.canvas.height;
        }
        isHitBy(_partner) {
            let difference = L11_AsteroidsAdvanced.Vector.getDifference(this.position, _partner.position); // getDifferenc ermittelt nun die Differenz der Pos des Vectors der gerade da ist und die Pos. des Vector Partners (Video L11 Asteroid Reloaded min 9) 
            if (this.hitRadius + _partner.hitRadius < difference.length)
                return false;
            return true;
        }
        hit() {
            console.log("hit", this);
            this.expendable = true;
        }
    }
    L11_AsteroidsAdvanced.Moveable = Moveable;
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Moveable.js.map