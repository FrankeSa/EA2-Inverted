namespace L09_Corona {



    export class HumanCell {
        position: Vector;

        constructor(_position: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
        }


        draw(): void {

            let r1: number = 20;
            let r2: number = 80;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 15, 0, r2);

            gradient.addColorStop(0, "HSLA(240, 100%, 50%)");
            gradient.addColorStop(1, "HSLA(195, 100%, 65%,0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            crc2.beginPath();
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore();
        }


    }
}