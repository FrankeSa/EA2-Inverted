namespace DateiPointer {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let sounds: string[] = ["ahh.wav", "boo.wav", "oohs.wav"];
    let target: HTMLInputElement;


    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;

        let colorpicker: HTMLInputElement = <HTMLInputElement>document.querySelector("#colorpicker");
        let stepper: HTMLInputElement = <HTMLInputElement>document.querySelector("#stepper");
        // for (let i: number = 0; i < fieldsets.length; i++) {
        //     let fieldset: HTMLFieldSetElement = fieldsets[i];
        //     fieldset.addEventListener("input", dyeCanvas);
        //     console.log(fieldsets[i]);
        // }

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBackground();
        canvas.addEventListener("click", detectMousePosition);
        canvas.addEventListener("click", makeATone);
        colorpicker.addEventListener("input", dyeCanvas);
        stepper.addEventListener("change", steps);
    }

    function drawBackground(): void {
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


    }


    function detectMousePosition(_event: MouseEvent): void {

        console.log(_event);
        let mousePositionX: number = _event.offsetX;
        let mousepositionY: number = _event.offsetY;

        console.log("x: ", mousePositionX, "y: ", mousepositionY);
        console.log(_event.target);


        crc2.beginPath();
        crc2.moveTo(75, 30);
        crc2.lineTo(90, 60);
        crc2.lineTo(125, 75);
        crc2.lineTo(95, 85);
        crc2.lineTo(105, 130);
        crc2.lineTo(75, 110);
        crc2.lineTo(45, 130);
        crc2.lineTo(55, 85);
        crc2.lineTo(55, 85);
        crc2.lineTo(20, 70);
        crc2.lineTo(55, 60);    
        crc2.closePath();
        crc2.fillStyle = "orange";
        crc2.fill();



    }

    function makeATone(_event: MouseEvent): void {
        let indexNumber: number = Math.floor((Math.random() * 3) + 0); // eine zufällige Zahl zwischen 0 und 3
        let thetone: string = sounds[indexNumber];
        let sound: HTMLAudioElement = new Audio("testassets/" + thetone);
        sound.play();
        console.log(indexNumber, thetone);
    }

    function dyeCanvas(_event: Event): void {
        target = <HTMLInputElement>_event.target;

        if (target.name == "Color") {

            crc2.fillStyle = target.value;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        }
        console.log(_event.target);



    }



    function steps(_event: Event): void {
        target = <HTMLInputElement>_event.target;

        if (target.name == "Stepper") {

            let meter: HTMLMeterElement = <HTMLMeterElement>document.querySelector("meter");
            meter.value = parseFloat(target.value);
            console.log(target.value);

        }


        console.log(target.value);

    }


 














































}