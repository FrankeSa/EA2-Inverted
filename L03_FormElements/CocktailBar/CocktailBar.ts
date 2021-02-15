namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }

    function handleChange(_event: Event): void {
        // console.log(_event);
        // let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        // console.log(drink.value);

        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //  console.log(inputs);



        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]); // weißt der variablen formData alle fieldsets zu
        console.log(document.forms[0]);

        for (let entry of formData) {
            console.log(entry[0]); //der Name wird angezeigt bspw. Container oder Extras
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            console.log(item);
            let price: number = Number(item.getAttribute("price")); // holt sich aus variablen item den Price und formatiert das was in der Klammer steht zu einer Nummer

            //if (entry[0] == "Drink") {
            let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("[value='" + entry[1] + "']");
            let pricedrink: number = Number(drink.getAttribute("price"));
            order.innerHTML += drink.value + "  " + pricedrink + " € " + " " + "<br>";


            // }
            order.innerHTML += item.name + "  " + price + " € " + "<br>";

        }

    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}