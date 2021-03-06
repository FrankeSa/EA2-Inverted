namespace L06_CocktailBar {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;
    // let url: string = "index.html";
    let url: string = "https://hfucockteilbar.herokuapp.com";

    async function handleLoad(_event: Event): Promise<void> {



        let response: Response = await fetch("Data.json");
        let offer: string = await response.text(); // generiert das Offer als String
        let data: Data = JSON.parse(offer); // wandelt den Offer- String in ein JSon-Objekt um.
        generateContent(data);

        form = <HTMLFormElement>document.querySelector("form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]"); //den Button mit dem Typ Submit
        let reset: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=reset]"); //den Button mit dem Typ Submit
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        submit.addEventListener("click", sendOrder);
        reset.addEventListener("click", deleteOrder);
        displayOrder();

    }

    async function sendOrder(_event: Event): Promise<void> {
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        alert(responseText);
       // _event.preventDefault();
    }

    function handleChange(_event: Event): void {
        displayOrder();

    }

    function displayOrder(): void {

        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(form); // weißt der variablen formData alle Elemente innerhalb von form, also buttons, inputs usw.


        for (let entry of formData) {
            // console.log(entry[0]); //der Name wird angezeigt bspw. Container oder Extras
            let selector: string = "[value='" + entry[1] + "']"; // Mit der eckigen Klammer kann ich Attribute suchen, hier value. Im entry[1] steht der Value hier z.b. Mojito oder Bloody Mary
            //console.log(selector);
            //console.log(entry[1]);
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            let itemPrice: number = Number(item.getAttribute("price")); // holt sich aus variablen item den Price und formatiert das was in der Klammer steht zu einer Nummer
            //console.log(itemPrice);
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Drink":
                    let amount: number = Number(formData.get("Amount)"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " L " + item.value + ": € " + itemPrice + "<br>";
                    break;
                default:
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
            }

            price += itemPrice;
        }

        order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
    }


    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }

    function deleteOrder(_event: Event): void {
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

    }





}
