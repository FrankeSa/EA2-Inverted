"use strict";
var L11_AsteroidsAdvanced;
(function (L11_AsteroidsAdvanced) {
    window.addEventListener("load", handleLoad);
    L11_AsteroidsAdvanced.linewidth = 2;
    let moveables = []; // Asteoriden Array
    function handleLoad(_event) {
        console.log("Asteroids startting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_AsteroidsAdvanced.crc2 = canvas.getContext("2d");
        L11_AsteroidsAdvanced.crc2.fillStyle = "black";
        L11_AsteroidsAdvanced.crc2.strokeStyle = "white";
        L11_AsteroidsAdvanced.crc2.lineWidth = L11_AsteroidsAdvanced.linewidth;
        L11_AsteroidsAdvanced.crc2.fillRect(0, 0, L11_AsteroidsAdvanced.crc2.canvas.width, L11_AsteroidsAdvanced.crc2.canvas.height); //füllt den Hintergrund schwarz
        L11_AsteroidsAdvanced.createPaths();
        console.log("Asteroids paths: ", L11_AsteroidsAdvanced.asteroidPaths);
        createAsteroids(5);
        //createShip();
        createUfo();
        createUfo();
        canvas.addEventListener("ufoshoots", handleUfoShot);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20); // rufe alle 20ms die Methode upDate auf
    }
    function shootProjectile(_origin) {
        console.log("shoot projectile");
        // let origin: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop); // MauscursorPositions Bestimmung!!!
        let velocity = L11_AsteroidsAdvanced.Vector.getrandom(200, 200);
        let projectile = new L11_AsteroidsAdvanced.Projectile(_origin, velocity);
        projectile.move(0.15);
        moveables.push(projectile);
    }
    function handleUfoShot(_event) {
        let ufo = _event.detail.ufo; // schaut in dem event mit "detail" nach was für ein ufo das ist
        shootProjectile(ufo.position); // ruft die Funktion shootProjectile auf und zwar an der Stell, wo sich das Ufo befindet. Durch (ufo.position)
    }
    function shootLaser(_event) {
        console.log("shoot laser");
        let hotspot = new L11_AsteroidsAdvanced.Vector(_event.clientX - L11_AsteroidsAdvanced.crc2.canvas.offsetLeft, _event.clientY - L11_AsteroidsAdvanced.crc2.canvas.offsetTop); //damit der Hotspot weiß wo er ist
        let asteroidHit = getAsteroidHit(hotspot); // nimmt (Hotspot) entgegen
        console.log(asteroidHit);
        if (asteroidHit) // wenn ein Asteroid getroffen wurde
            breakAsteroid(asteroidHit); //dann mach den getroffenen Asteroiden kaputt
    }
    function getAsteroidHit(_hotspot) {
        for (let moveable of moveables) {
            if (moveable instanceof L11_AsteroidsAdvanced.Asteroid && moveable.isHit(_hotspot)) //ist moveable eine instanz von Asteroid und ist es getroffen? dann..
                return moveable; //gib den asteroid zurück
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L11_AsteroidsAdvanced.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
            _asteroid.expendable = true;
        }
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L11_AsteroidsAdvanced.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function createUfo() {
        console.log("Create ufo");
        let ufo = new L11_AsteroidsAdvanced.Ufo();
        moveables.push(ufo);
    }
    function update() {
        //console.log("Update");
        L11_AsteroidsAdvanced.crc2.fillRect(0, 0, L11_AsteroidsAdvanced.crc2.canvas.width, L11_AsteroidsAdvanced.crc2.canvas.height);
        for (let moveable of moveables) { // leg eine neue Information an, ein astroid, gehe das Array astroids durch und hol dir nach und nach die einzelnen Asteoriden raus  
            moveable.move(1 / 50); // eine fünfzigstel Sekunde
            moveable.draw();
        }
        deleteExpandables();
        handleCollisions();
        console.log("moveables length: ", moveables.length);
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) { // moveables.length - 1 : Die Länge des moveables Array wird von hinten begonnen durch das minus 1.
            if (moveables[i].expendable) // wenn der akteulle index expandeble ist
                moveables.splice(i, 1); // wird das Objekt, dass sich am aktuellen Index befindet gelöscht. 
        }
    }
    function handleCollisions() {
        for (let index = 0; index < moveables.length; index++) // L11 Asteroid Reloaded Min 16:44
            for (let j = index + 1; j < moveables.length; j++) {
                let a = moveables[index];
                let b = moveables[j];
                if (a.isHitBy(b)) {
                    a.hit();
                    b.hit();
                }
            }
    }
})(L11_AsteroidsAdvanced || (L11_AsteroidsAdvanced = {}));
//# sourceMappingURL=Main.js.map