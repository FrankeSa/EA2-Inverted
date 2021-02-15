namespace L11_Corona {

    export class CoronaVirus extends Moveable {

  
        state: string;
        target: HumanCell; // Das ganze Objekt wird als Ziel genommen. 



        constructor(_position: Vector) {
            
            super(_position);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 50);

            
        }


        public draw(): void {


            let radiusVirus: number = 15;
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, radiusVirus, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }

       public move(_timeslice: number): void {
            let offset: Vector = new Vector(0, this.velocity.x);
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

















