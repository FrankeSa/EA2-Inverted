"use strict";
var L04_Haushaltshelfer;
(function (L04_Haushaltshelfer) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        L04_Haushaltshelfer.generateContent(L04_Haushaltshelfer.data);
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
        let button = document.querySelector("Erl_Btn_2");
        button.addEventListener("click", deleteOrder);
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
        let order = document.querySelector("div#Erledigungen");
        order.innerHTML = "";
        let formData = new FormData(document.querySelector("form")); // weißt der variablen formData alle Elemente innerhalb von form, also buttons, inputs usw.
        for (let entry of formData) {
            console.log(entry[0]); //der Name wird angezeigt bspw. Container oder Extras
            let selector = "[value='" + entry[1] + "']"; // Mit der eckigen Klammer kann ich Attribute suchen, hier value. Im entry[1] steht der Value hier z.b. Mojito oder Bloody Mary
            console.log(selector);
            console.log(entry[1]);
            let item = document.querySelector(selector);
            let itemPrice = Number(item.getAttribute("price")); // holt sich aus variablen item den Price und formatiert das was in der Klammer steht zu einer Nummer
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
    function deleteOrder(_event) {
        let order = document.querySelector("div#Erledigungen");
        order.innerHTML = "";
        console.log("Bla");
    }
})(L04_Haushaltshelfer || (L04_Haushaltshelfer = {}));
//# sourceMappingURL=HH_Helfer.js.map