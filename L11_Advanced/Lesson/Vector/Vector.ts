namespace L11_AsteroidsAdvanced {

    export class Vector {
        public x: number;
        public y: number;


        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        public static getDifference(_v0: Vector, _v1: Vector): Vector {

            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }

        public static getrandom(_minLength: number, _maxLength: number): Vector { // durch : Vector gibt die Methode einen Vektor zurück und ist nun eine KlassenMethode (Klasse Vector)
            let vector: Vector = new Vector(0, 0);
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            vector.set(Math.cos(direction), Math.sin(direction)); // auf dem mit new erzeugten Vector soll die set Methode aufgerufen werden.
            vector.scale(length); // auf dem mit new erzeugten Vector soll die scale Methode aufgerufen werden.
            return vector;
        }


        public get length(): number { // Getter
            return Math.hypot(this.x, this.y); // liefert die Hypothenuse als number zurück
        }

        public set(_x: number, _y: number): void {

            this.x = _x;
            this.y = _y;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }





        public copy(): Vector {
            return new Vector(this.x, this.y);
        }
    }


}