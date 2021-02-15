namespace L04_Haushaltshelfer {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }



    export let data: Data = {
        /*category*/ Einkäufe: [

/*Item*/    { name: "Artikel wählen", price: 0 },
            { name: "Brot", price: 3.00 },
            { name: "Milch", price: 1.30 },
            { name: "Butter", price: 1.50 },
            { name: "Wurst", price: 1.70 }],

        Haushaltsarbeiten: [

            { name: "Staubsaugen", price: 10.00 },
            { name: "Wischen", price: 10.00 },
            { name: "Rasen mähen", price: 20.00 },
            { name: "Fenster putzen", price: 40.00 }


        ],
        Einzelhandel: [

            { name: "Einzelhandel wählen", price: 0 },
            { name: "Edeka", price: 0 },
            { name: "REWE", price: 0 },
            { name: "Penny Markt", price: 0 },
            { name: "Dens Biomarkt", price: 0 }

        ]




    };





}
