namespace L11_Corona {


    //let covid: CoronaVirus[] = [];
    let humCell: HumanCell[] = [];
    let moveableObjects: Moveable[] = [];
    let lightRedStop: number = 0.5;
    let backgroundImage: ImageData;
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");

    window.addEventListener("load", handleLoad);




    function handleLoad(_event: Event): void {

        console.log("Anfang_Start");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log("Background");


        drawBackground();
        drawKillerCell();
        drawAntiBody();
        drawunspesificParticle(20);
        drawHumanCell(2);
        drawCoronaVirus(13);

        window.setInterval(update, 20);

    }




    function drawBackground(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(0, 100%, 60%)");
        gradient.addColorStop(1, "HSL(0, 100%, 75%)");
        gradient.addColorStop(lightRedStop, "HSL(12, 100%, 65%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


    }


    function drawKillerCell(): void {

        let r1: number = 15;
        let r2: number = 60;
        let positionX: number = 100;
        let positionY: number = 475;
        let positionX2: number = 175;
        let positionY2: number = 575;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 15, 0, r2);

        gradient.addColorStop(0, "HSL(120, 60%, 40%)");
        gradient.addColorStop(1, "HSLA(120, 60%, 55%,0)");

        crc2.save();
        crc2.translate(positionX, positionY);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.translate(positionX2, positionY2);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();

    }


    function drawAntiBody(): void {


        crc2.beginPath();
        crc2.moveTo(225, 425);
        crc2.lineTo(250, 450);
        crc2.moveTo(275, 425);
        crc2.lineTo(250, 450);
        crc2.moveTo(250, 450);
        crc2.lineTo(250, 500);
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(375, 475);
        crc2.lineTo(350, 450);
        crc2.moveTo(375, 475);
        crc2.lineTo(400, 450);
        crc2.moveTo(375, 475);
        crc2.lineTo(375, 525);
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(300, 550);
        crc2.lineTo(275, 525);
        crc2.moveTo(300, 550);
        crc2.lineTo(325, 525);
        crc2.moveTo(300, 550);
        crc2.lineTo(300, 600);
        crc2.stroke();


        crc2.closePath();
        backgroundImage = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log("Hintergrund gezeichnet");


    }



    function drawunspesificParticle(_nParticle: number): void {
        for (let drawn: number = 0; drawn < _nParticle; drawn++) {

            let positionX: number = Math.random() * crc2.canvas.height; //eine zufällige Position verteilt auf der ganzen canvas Höhe
            let positionY: number = Math.random() * crc2.canvas.width; //eine zufällige Position verteilt auf der ganzen canvas Breite
            let position: Vector = new Vector(positionX, positionY); // erstellt einen neuen Vektor genau auf diesen Zufallswerten
            let moveableObject: unspesificParticle = new unspesificParticle(position); //Position als Vektor
            moveableObject.draw();
            moveableObjects.push(moveableObject);
        }
    }


    function drawHumanCell(_nCell: number): void {

        for (let drawn: number = 0; drawn < _nCell; drawn++) {

            let positionX: number;
            let positionY: number;

            if (drawn == 1) {

                positionX = 900;
                positionY = 150;
            }

            else

            positionX = 1100;
            positionY = 175;

            let positionCell: Vector = new Vector(positionX, positionY); // erstellt einen neuen Vektor genau auf diesen Zufallswerten
            let cell: HumanCell = new HumanCell(positionCell); //Position als Vektor 
            cell.draw();
            humCell.push(cell);
        }

    }

    function drawCoronaVirus(_nVirus: number): void {

        for (let drawn: number = 0; drawn < _nVirus; drawn++) {

            let positionX: number = Math.random() * crc2.canvas.height; //eine zufällige Position verteilt auf der ganzen canvas Höhe
            let positionY: number = Math.random() * crc2.canvas.width; //eine zufällige Position verteilt auf der ganzen canvas Breite
            let positionVirus: Vector = new Vector(positionX, positionY); // erstellt einen neuen Vektor genau auf diesen Zufallswerten
            let moveableObjekt: CoronaVirus = new CoronaVirus(positionVirus); //Position als Vektor 
            moveableObjekt.draw();
            moveableObjects.push(moveableObjekt);
        }

    }



    function update(): void {

        console.log("Update");
        crc2.putImageData(backgroundImage, 0, 0);


        for (let moveableObject of moveableObjects) {
            moveableObject.move(1 / 30);
            moveableObject.draw();
        }


        for (let cell of humCell) {
            cell.draw();
        }

        // for (let moveableObject of moveableObjects) {
        //     moveableObject.move(1 / 30);
        //     moveableObject.draw();
        // }

    }










}