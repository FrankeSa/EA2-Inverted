namespace L11_AsteroidsAdvanced {

    export class Projectile extends Moveable { //das Schlüsselwort extends sagt der Class Asteroid, dass es eine Superklasse von Moveable ist

        protected lifetime: number = 2;

        constructor(_position: Vector, _velocity: Vector) { //das Fragezeichen heißt es kann eine Postion da sein oder aber auch nicht

            super(_position); //Aufruf der Super-Methode, um auf SuperKlasse zu zu greifen

            console.log("Procetile constructor");



            this.velocity = _velocity.copy();


        }



        public draw(): void {

            //console.log("Astroid draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.strokeRect(-1, -1, 1, 1);
            crc2.restore();

        }

        public move(_timeslice: number): void {
            super.move(_timeslice);
            this.lifetime -= _timeslice; // Die Zeit läuft ab
            if (this.lifetime < 0)
                this.expendable = true;
        }

    }
}



