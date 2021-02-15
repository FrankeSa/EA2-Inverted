namespace L04_Haushaltshelfer {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        generateContent(data);

        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        form.addEventListener("change", handleChange);
        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("Erl_Btn_2");
        button.addEventListener("click", deleteOrder);


    }

    function handleChange(_event: Event): void {

        displayOrder();
    }

    function displayOrder(): void {

        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Erledigungen");
        order.innerHTML = "";
        let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form")); // weißt der variablen formData alle Elemente innerhalb von form, also buttons, inputs usw.

        for (let entry of formData) {
            console.log(entry[0]); //der Name wird angezeigt bspw. Container oder Extras
            let selector: string = "[value='" + entry[1] + "']"; // Mit der eckigen Klammer kann ich Attribute suchen, hier value. Im entry[1] steht der Value hier z.b. Mojito oder Bloody Mary
            console.log(selector);
            console.log(entry[1]);
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            let itemPrice: number = Number(item.getAttribute("price")); // holt sich aus variablen item den Price und formatiert das was in der Klammer steht zu einer Nummer

            switch (entry[0]) {
                case "Einzelhandel":
                    order.innerHTML += entry[0] + "<br>" + item.value + "<br>";
                    break;
                default:
                    order.innerHTML += entry[0] + "<br>" + item.value + ": €" + "  " + itemPrice.toFixed(2) + "<br>";

            }
            price += itemPrice;
            order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
        }
        // order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
    }


    function deleteOrder(_event: Event): void {
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Erledigungen");
        order.innerHTML = "";
        console.log("Bla");
    }






}


















