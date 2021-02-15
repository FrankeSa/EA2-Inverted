namespace L11_Corona {



    export class Moveable {


      public  position: Vector;
      public  velocity: Vector;

        constructor(_position: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            //this.velocity.random(100, 100);
        }


     public draw(): void {


            // console.log ("Moveable draw");
        }

       public move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.y, 0); //partikel von links nach rechts
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