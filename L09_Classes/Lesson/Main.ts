namespace L09_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let asteroids: Asteroid[] = []; // Asteoriden Array

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); //füllt den Hintergrund schwarz

        createPaths();
        console.log("Asteroids paths: ", asteroidPaths);
        createAsteroids(5);
        //createShip();

        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20); // rufe alle 20ms die Methode upDate auf


    }


    function shootLaser(_event: MouseEvent): void {
        console.log("shoot laser");
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop); //damit der Hotspot weiß wo er ist
        let asteroidHit: Asteroid | null = getAsteroidHit(hotspot); // nimmt (Hotspot) entgegen
        console.log(asteroidHit);
        if (asteroidHit) // wenn ein Asteroid getroffen wurde
            breakAstroid(asteroidHit); //dann mach den getroffenen Asteroiden kaputt


    }

    function getAsteroidHit(_hotspot: Vector): Asteroid | null {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot))
                return asteroid;   //gib den asteroid zurück
        }
        return null;

    }

    function breakAstroid(_asteroid: Asteroid): void {

        if (_asteroid.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {
                let fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);

            }

            let index: number = asteroids.indexOf(_asteroid); // nimm den Asteroiden, den du bekommen hast und schau an welcher stelle im Array er ist 
            asteroids.splice(index, 1);
        }

    }


    function createAsteroids(_nAsteroids: number): void { // diese Funktion läuft fünf mal durch und pusht den je erzeugten Asteroiden in das Array
        console.log("Create asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            let asteroid: Asteroid = new Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }

    function update(): void { // löscht den Background und erstellt ihn neu
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let asteroid of asteroids) { // leg eine neue Information an, ein astroid, gehe das Array astroids durch und hol dir nach und nach die einzelnen Asteoriden raus  
            asteroid.move(1 / 50); // ein fünfzigstel Sekunde
            asteroid.draw();
        }





    }
}

