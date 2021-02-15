namespace L07_Haushaltshelfer {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: (Item[]);
    }




    export function generateContent(_data: Data): void {

        for (let category in _data) {
            let items: Item[] = _data[category]; //Durch diese Schreibweise geht man in die category und holt sich die "begriffe/items" aus der Liste _data

            let group: HTMLElement | null = null; // HTMLElement deshalb, damit group mehrmals verwendet werden kann. Egal was die funktion liefert, es ist auf jeden Fall ein HTMLElement mit dem Wert Null. Kann dann je nach Fall HTMLSelect etc. sein.
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
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category); // nimmt sich je nach Category (die gleich heißen, wie die ids für die fieldsets) die ID aus dem Fieldset.
            /*Es könnte sein, dass kein Fieldset gefunden wird, deshalb HTMLFieldSetElement oder | null (nichts gefunden) */
            // if-Abfrage: Wenn das Fieldset und && die Gruppe definiert ist, dann zusammen als Kind an den DOM hängen.
            if (fieldset && group)
                fieldset.insertBefore(group, fieldset.childNodes[0]); /*HINWEIS!!! Von Alida Kohler übernommen*/
        }



    }


    function createSelect(_items: Item[], _category: string): HTMLElement | null {
        /* der Variablenbegriff group kann hier ebenfalls verwendet werden, da beide var in unterschiedlichen Gültigkeitsbereichen sind. */
        let group: HTMLDivElement = document.createElement("div");
        group.classList.add(_category);
        let selection: HTMLSelectElement = document.createElement("select");
        selection.name = _category;

        for (let item of _items) {
            let option: HTMLOptionElement = document.createElement("option");
            option.setAttribute("price", item.price.toFixed(2));
            option.setAttribute("name", item.name);
            option.value = option.textContent = item.name;
            selection.appendChild(option);
            group.appendChild(selection);

        }
        return group;


    }

    function createMultiple(_items: Item[], _category: string): HTMLElement | null {
        /* der Variablenbegriff group kann hier ebenfalls verwendet werden, da beide var in unterschiedlichen Gültigkeitsbereichen sind. */
        let group: HTMLDivElement = document.createElement("div");
        group.classList.add(_category);

        /* eine schleife die über die Items geht*/
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            /*der checkbox wird nun das Attribut "price" mit dem Wert des item.price hinzugefügt.Die Werte sind immer strings, deshalb muss man hier noch toFixed angeben. Zwei Nachkommastellen beim Preis.*/
            checkbox.value = item.name; //Der Checkbox wird einen N amen gegeben.
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;


    }

}












