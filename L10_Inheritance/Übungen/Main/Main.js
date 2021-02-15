"use strict";
var L10_AsteroidsInheritance;
(function (L10_AsteroidsInheritance) {
    window.addEventListener("load", handleLoad);
    L10_AsteroidsInheritance.linewidth = 2;
    let moveables = []; // Asteoriden Array
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_AsteroidsInheritance.crc2 = canvas.getContext("2d");
        L10_AsteroidsInheritance.crc2.fillStyle = "black";
        L10_AsteroidsInheritance.crc2.strokeStyle = "white";
        L10_AsteroidsInheritance.crc2.lineWidth = L10_AsteroidsInheritance.linewidth;
        L10_AsteroidsInheritance.crc2.fillRect(0, 0, L10_AsteroidsInheritance.crc2.canvas.width, L10_AsteroidsInheritance.crc2.canvas.height); //füllt den Hintergrund schwarz
        L10_AsteroidsInheritance.createPaths();
        console.log("Asteroids paths: ", L10_AsteroidsInheritance.asteroidPaths);
        createAsteroids(5);
        //createShip();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20); // rufe alle 20ms die Methode upDate auf
    }
    function shootProjectile(_event) {
        console.log("shoot projectile");
        let origin = new L10_AsteroidsInheritance.Vector(_event.clientX - L10_AsteroidsInheritance.crc2.canvas.offsetLeft, _event.clientY - L10_AsteroidsInheritance.crc2.canvas.offsetTop);
        let velocity = new L10_AsteroidsInheritance.Vector(0, 0);
        velocity.random(100, 100);
        let projectile = new L10_AsteroidsInheritance.Projectile(origin, velocity);
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        console.log("shoot laser");
        let hotspot = new L10_AsteroidsInheritance.Vector(_event.clientX - L10_AsteroidsInheritance.crc2.canvas.offsetLeft, _event.clientY - L10_AsteroidsInheritance.crc2.canvas.offsetTop); //damit der Hotspot weiß wo er ist
        let asteroidHit = getAsteroidHit(hotspot); // nimmt (Hotspot) entgegen
        console.log(asteroidHit);
        if (asteroidHit) // wenn ein Asteroid getroffen wurde
            breakAstroid(asteroidHit); //dann mach den getroffenen Asteroiden kaputt
    }
    function getAsteroidHit(_hotspot) {
        for (let moveable of moveables) {
            if (moveable instanceof L10_AsteroidsInheritance.Asteroid && moveable.isHit(_hotspot)) //ist moveable eine instanz von Asteroid und ist es getroffen? dann..
                return moveable; //gib den asteroid zurück
        }
        return null;
    }
    function breakAstroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                let fragment = new L10_AsteroidsInheritance.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
            _asteroid.expendable = true;
        }
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L10_AsteroidsInheritance.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function update() {
        //console.log("Update");
        L10_AsteroidsInheritance.crc2.fillRect(0, 0, L10_AsteroidsInheritance.crc2.canvas.width, L10_AsteroidsInheritance.crc2.canvas.height);
        for (let moveable of moveables) { // leg eine neue Information an, ein astroid, gehe das Array astroids durch und hol dir nach und nach die einzelnen Asteoriden raus  
            moveable.move(1 / 50); // eine fünfzigstel Sekunde
            moveable.draw();
        }
        deleteExpandables();
        console.log("moveables length: ", moveables.length);
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) { // moveables.length - 1 : Die Länge des moveables Array wird von hinten begonnen durch das minus 1.
            if (moveables[i].expendable) // wenn der akteulle index expandeble ist
                moveables.splice(i, 1); // wird das Objekt, dass sich am aktuellen Index befindet gelöscht. 
        }
    }
})(L10_AsteroidsInheritance || (L10_AsteroidsInheritance = {}));
//# sourceMappingURL=Main.js.map