namespace L10_AsteroidsInheritance {

    export class Asteroid extends Moveable { //das Schlüsselwort extends sagt der Class Asteroid, dass es eine Superklasse von Moveable ist
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number, _position?: Vector) { //das Fragezeichen heißt es kann eine Postion da sein oder aber auch nicht
            
            super(_position); //Aufruf der Super-Methode, um auf SuperKlasse zu zu greifen
            
            console.log("Astroid constructor");



            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0); // Die Position ist ein neuer Vektor beginnend bei 0,0 (oben links)

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200); // Geschwindigkeit zufällig min 100px/sec und max 200px/sec
            this.type = Math.floor(Math.random() * 4); // bei Math.random()*4 wird eine zufällige Zahl (Kommazahl) zwischen null und vier erzeugt. Mit Math.floor werden die NachkommaStellen abgeschnitten. 
            this.size = _size; //_size wurde im Main als 1 festgelegt


        }



        draw(): void {

            //console.log("Astroid draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.lineWidth = linewidth / this.size;
            crc2.stroke(asteroidPaths[this.type]); // der Pfad aus dem Array, der zu dem Typ des Asteroiden gehören soll
            crc2.restore();

        }

        isHit(_hotspot: Vector): boolean {
            let hitSize: number = 50 * this.size; //definiert wie groß das Hit-Rechteck um den Asteroiden sein soll, wo es bei berühren als treffer gilt
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y); // Abstand vom hotspot zum Asteroiden 
            return (Math.abs(difference.x) < hitSize && Math.abs(difference.y) < hitSize); //die Entfernung, egal ob ins negative oder positive, der Horizontalen

        }

    }
}



