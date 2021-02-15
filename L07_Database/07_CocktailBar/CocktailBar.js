"use strict";
var L07_CocktailBar;
(function (L07_CocktailBar) {
    window.addEventListener("load", handleLoad);
    let form;
    // let url: string = "index.html";
    let url = "https://localhost5001";
    async function handleLoad(_event) {
        let response = await fetch("Data.json");
        let offer = await response.text(); // generiert das Offer als String
        let data = JSON.parse(offer); // wandelt den Offer- String in ein JSon-Objekt um.
        L07_CocktailBar.generateContent(data);
        form = document.querySelector("form");
        let slider = document.querySelector("input#amount");
        let submit = document.querySelector("button[type=button]"); //den Button mit dem Typ Submit
        let reset = document.querySelector("button[type=reset]"); //den Button mit dem Typ Submit
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
        submit.addEventListener("click", sendOrder);
        reset.addEventListener("click", deleteOrder);
        displayOrder();
    }
    async function sendOrder(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
        // _event.preventDefault();
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(form); // weißt der variablen formData alle Elemente innerhalb von form, also buttons, inputs usw.
        for (let entry of formData) {
            // console.log(entry[0]); //der Name wird angezeigt bspw. Container oder Extras
            let selector = "[value='" + entry[1] + "']"; // Mit der eckigen Klammer kann ich Attribute suchen, hier value. Im entry[1] steht der Value hier z.b. Mojito oder Bloody Mary
            //console.log(selector);
            //console.log(entry[1]);
            let item = document.querySelector(selector);
            let itemPrice = Number(item.getAttribute("price")); // holt sich aus variablen item den Price und formatiert das was in der Klammer steht zu einer Nummer
            //console.log(itemPrice);
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Drink":
                    let amount = Number(formData.get("Amount)"));
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
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
    function deleteOrder(_event) {
        let order = document.querySelector("div#order");
        order.innerHTML = "";
    }
})(L07_CocktailBar || (L07_CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map