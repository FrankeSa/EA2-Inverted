"use strict";
var Boxes;
(function (Boxes) {
    let n = 5;
    let color;
    let x = 0;
    let y = 0;
    window.addEventListener("load", drawboxes); // das Load-Event, damit das Script ausgeführt wird, wenn die Seite geladen ist. 
    function drawboxes() {
        for (let i = 0; i < n; i++) {
            y += (i == 2) ? 20 : 50;
            x = (x + 170) % 400;
            switch (i) {
                case 0:
                    color = "#ff0000";
                    break;
                case 1: // hinter case 1 steht extra nichts da bei entw. case 1 oder case 4 die Farbe genommen wird ( sog. fall through)
                case 4:
                    color = "#00ff00";
                    break; // break springt aus der Abfrage und geht nach unten weiter
                case 3:
                    continue; // continue springt aus der Abfrage zurück in die vorherige Schleife
                default: // default wird ausgegeben, wenn keiner der Fälle zutrifft
                    color = "#0000ff";
            }
            for (let size of ["big", "medium", "small"]) {
                createBox(color, x, y, size);
                if (i == 4)
                    break;
            }
        }
    }
    function createBox(_color, _x, _y, _size) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.classList.add(_size); // in der for schleife mit size Array werden die Werte der Reihe nach übergeben. 
        div.style.backgroundColor = _color;
        div.style.left = _x + "px";
        div.style.top = _y + "px";
    }
})(Boxes || (Boxes = {}));
//# sourceMappingURL=L01_boxes.js.map