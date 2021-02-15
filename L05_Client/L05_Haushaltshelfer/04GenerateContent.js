"use strict";
var L05_Haushaltshelfer;
(function (L05_Haushaltshelfer) {
    function generateContent(_data) {
        for (let category in _data) {
            let items = _data[category]; //Durch diese Schreibweise geht man in die category und holt sich die "begriffe/items" aus der Liste _data
            let group = null; // HTMLElement deshalb, damit group mehrmals verwendet werden kann. Egal was die funktion liefert, es ist auf jeden Fall ein HTMLElement mit dem Wert Null. Kann dann je nach Fall HTMLSelect etc. sein.
            switch (category) {
                case "Einkäufe":
                    group = createSelect(items, category);
                    break;
                case "Haushaltsarbeiten":
                    group = createMultiple(items, category);
                    break;
                case "Einzelhandel":
                    group = createSelect(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category); // nimmt sich je nach Category (die gleich heißen, wie die ids für die fieldsets) die ID aus dem Fieldset.
            /*Es könnte sein, dass kein Fieldset gefunden wird, deshalb HTMLFieldSetElement oder | null (nichts gefunden) */
            // if-Abfrage: Wenn das Fieldset und && die Gruppe definiert ist, dann zusammen als Kind an den DOM hängen.
            if (fieldset && group)
                fieldset.insertBefore(group, fieldset.childNodes[0]); /*HINWEIS!!! Von Alida Kohler übernommen*/
        }
    }
    L05_Haushaltshelfer.generateContent = generateContent;
    function createSelect(_items, _category) {
        /* der Variablenbegriff group kann hier ebenfalls verwendet werden, da beide var in unterschiedlichen Gültigkeitsbereichen sind. */
        let group = document.createElement("div");
        group.classList.add(_category);
        let selection = document.createElement("select");
        selection.name = _category;
        for (let item of _items) {
            let option = document.createElement("option");
            option.setAttribute("price", item.price.toFixed(2));
            option.setAttribute("name", item.name);
            option.value = option.textContent = item.name;
            selection.appendChild(option);
            group.appendChild(selection);
        }
        return group;
    }
    function createMultiple(_items, _category) {
        /* der Variablenbegriff group kann hier ebenfalls verwendet werden, da beide var in unterschiedlichen Gültigkeitsbereichen sind. */
        let group = document.createElement("div");
        group.classList.add(_category);
        /* eine schleife die über die Items geht*/
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            /*der checkbox wird nun das Attribut "price" mit dem Wert des item.price hinzugefügt.Die Werte sind immer strings, deshalb muss man hier noch toFixed angeben. Zwei Nachkommastellen beim Preis.*/
            checkbox.value = item.name; //Der Checkbox wird einen N amen gegeben.
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(L05_Haushaltshelfer || (L05_Haushaltshelfer = {}));
//# sourceMappingURL=04GenerateContent.js.map