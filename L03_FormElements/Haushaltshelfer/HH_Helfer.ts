// namespace L03_Haushaltshelfer {

//     window.addEventListener("load", handleLoad);

//     function handleLoad(_event: Event): void {
//         let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
//         form.addEventListener("change", handleChange);
//         let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#fs1");
//         button.addEventListener("click", deleteValue);
//         let LöschBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#Erl_Btn_2");
//         LöschBtn.addEventListener("click", deleteValue);

//     }

//     function handleChange(_event: Event): void {

//         let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Erledigungen");
//         order.innerHTML = "";
//         let formData: FormData = new FormData(document.forms[0]); // weißt der variablen formData alle fieldsets zu

//         for (let entry of formData) {
//             console.log(entry);
//             let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
//             let price: number = Number(item.getAttribute("price"));

//             if (price == "0") {
//                 order.innerHTML += entry[0] + ":" + " " + entry[1] + " " + " " + "<br>";
//             }
//             else order.innerHTML += entry[0] + ":" + " " + entry[1] + " " + price + " €" + " " + "<br>";
            
//         }
//     }

//     function deleteValue(_event: Event): void {
//         let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Erledigungen");
//         order.innerHTML = "";
//     }
//     handleChange();

//}