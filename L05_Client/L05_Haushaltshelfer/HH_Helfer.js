"use strict";
var L05_Haushaltshelfer;
(function (L05_Haushaltshelfer) {
    window.addEventListener("load", handleLoad);
    let form;
    async function handleLoad(_event) {
        let response = await fetch("04HH_Data.json"); // fetch holt die Daten vom Server
        let offer = await response.text(); // von der response die Daten, also das Angebot des Barkeepers, als Text -> verspricht einen Text zu liefern 
        let data = JSON.parse(offer); // string interpretieren bzw. übersetzten, damit wir unsere Daten-Objet aus Offer bekommen
        L05_Haushaltshelfer.generateContent(data);
        form = document.querySelector("form#orderform");
        form.addEventListener("change", handleChange);
        let submitBtn = document.querySelector("button[type=button]");
        let deleteBtn = document.querySelector("button#delete");
        console.log(submitBtn);
        submitBtn.addEventListener("click", sendOrder);
        deleteBtn.addEventListener("click", deleteOrder);
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let price = 0;
        let order = document.querySelector("div#Erledigungen");
        order.innerHTML = "";
        let formData = new FormData(form); // weißt der variablen formData alle Elemente innerhalb von form, also buttons, inputs usw.
        for (let entry of formData) {
            // console.log(entry[0]); //der Name wird angezeigt bspw. Container oder Extras
            let selector = "[value='" + entry[1] + "']"; // Mit der eckigen Klammer kann ich Attribute suchen, hier value. Im entry[1] steht der Value hier z.b. Brot oder Edeka
            console.log(entry[1]);
            let item = document.querySelector(selector);
            if (item == null)
                continue;
            let itemPrice = Number(item.getAttribute("price")); // holt sich aus variablen item den Price und formatiert das was in der Klammer steht zu einer Nummer
            switch (entry[0]) {
                case "Einzelhandel":
                    order.innerHTML += entry[0] + "<br>" + item.value + "<br>";
                    break;
                case "Bank-Geschäfte":
                    break;
                default:
                    order.innerHTML += entry[0] + "<br>" + item.value + ": €" + "  " + itemPrice.toFixed(2) + "<br>";
            }
            price += itemPrice;
            // order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
        }
        order.innerHTML += "<p><strong>Gesamtpreis: : €" + price.toFixed(2);
    }
    async function sendOrder(_event) {
        let formData = new FormData(form); //erzeugt ein neues FormData um FormularElemente autom. auszuwert. und verweist durch (form) auf das HTMLFormElement, was unser Formular darstellt
        let query = new URLSearchParams(formData); // 
        await fetch("index_HH_Helfer.html?" + query.toString()); //die URL erstellen um den Query-String erweitert werden
        alert("Ihre Bestellung wurde verschickt");
    }
    function deleteOrder(_event) {
        let order = document.querySelector("div#Erledigungen");
        order.innerHTML = "";
    }
})(L05_Haushaltshelfer || (L05_Haushaltshelfer = {}));
//# sourceMappingURL=HH_Helfer.js.map