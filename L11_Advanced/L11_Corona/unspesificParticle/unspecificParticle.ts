namespace L11_Corona {



    export class unspesificParticle extends Moveable {



        constructor(_position: Vector) {

            super(_position); //Aufruf in die Superklasse

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 100);
        }


       public draw(): void {


            let radiusParticle: number = 30;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 35%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }


    }
}