namespace L04_CocktailBar {



    export async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        await response.text();
      
    }
}