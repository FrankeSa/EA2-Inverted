namespace L09_Corona {



    export class unspesificParticle {


        position: Vector;
        size: number;
        type: number;
        velocity: Vector;

        constructor(_position: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 100);
        }


        draw(): void {


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

        move(_timeslice: number): void {
            let offset: Vector = new Vector (this.velocity.y, 0);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
                
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
          
        }
    }
}