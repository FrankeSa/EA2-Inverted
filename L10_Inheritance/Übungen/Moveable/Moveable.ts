namespace L10_AsteroidsInheritance {

    export abstract class Moveable {

        position: Vector;
        velocity: Vector;
        expendable: boolean = false;



        constructor(_position?: Vector) { //das Fragezeichen heißt es kann eine Postion da sein oder aber auch nicht

            //console.log("Moveable constructor");

            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0); // Die Position ist ein neuer Vektor beginnend bei 0,0 (oben links)

            this.velocity = new Vector(0, 0);
      
        }

        move(_timeslice: number): void {
            //console.log("Moveable move");
            let offset: Vector = this.velocity.copy(); // erstellt einen neuen Vektor der die genau die gleichen Werte hat wie der Velocity-Vektor
            offset.scale(_timeslice); //scaliert den Vektor um den _timeslice (für Verschiebung in der Zeit)
            this.position.add(offset); //die Verschiebung in der Zeit wird auf die Position addiert
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width; //wenn er nach oben den Bildschirm verlässt, soll er die Canvas Breite draufrechnen

            if (this.position.y < 0)
                this.position.y += crc2.canvas.height; // wenn er nach links den Bildschirm verlässt, soll er die Canvas Höhe draufrechnen

            if (this.position.x > crc2.canvas.width) // wenn er (der Asteorid) nach unten (width) den Bildschirm verlässt,  dann ziehe die Breite (widht) ab
                this.position.x -= crc2.canvas.width;

            if (this.position.y > crc2.canvas.height) // wenn er (der Asteorid) nach rechts (height) den Bildschirm verlässt,  dann ziehe die Höhe (height) ab
                this.position.y -= crc2.canvas.height;

        }


        draw(): void {

            //console.log("Moveable draw");


        }



    }
}



