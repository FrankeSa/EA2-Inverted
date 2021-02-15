namespace L11_AsteroidsAdvanced {

    export class Asteroid extends Moveable { //das Schlüsselwort extends sagt der Class Asteroid, dass es eine Superklasse von Moveable ist


        public size: number;
        private type: number;

        constructor(_size: number, _position?: Vector) { //das Fragezeichen heißt es kann eine Postion da sein oder aber auch nicht

            super(_position); //Aufruf der Super-Methode, um auf SuperKlasse zu zu greifen

            console.log("Astroid constructor");



            this.velocity = Vector.getrandom(100, 200); // die Klasse Vector wird aufgerufen und bekomme durch die Methode getrandom einen zufälligen Vector mit Länge zwischen 100 und 200.
            this.type = Math.floor(Math.random() * 4); // bei Math.random()*4 wird eine zufällige Zahl (Kommazahl) zwischen null und vier erzeugt. Mit Math.floor werden die NachkommaStellen abgeschnitten. 
            this.size = _size; //_size wurde im Main als 1 festgelegt
            this.hitRadius = 50;

        }



        public draw(): void {

            //console.log("Astroid draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.lineWidth = linewidth / this.size;
            crc2.stroke(asteroidPaths[this.type]); // der Pfad aus dem Array, der zu dem Typ des Asteroiden gehören soll
            crc2.restore();

        }

        public isHit(_hotspot: Vector): boolean {
            let hitSize: number = 50 * this.size; //definiert wie groß das Hit-Rechteck um den Asteroiden sein soll, wo es bei berühren als treffer gilt
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y); // Abstand vom hotspot zum Asteroiden 
            return (Math.abs(difference.x) < hitSize && Math.abs(difference.y) < hitSize); //die Entfernung, egal ob ins negative oder positive, der Horizontalen

        }

    }
}



