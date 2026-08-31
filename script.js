const API_KEY = "AIzaSyAenENJKvT56PsLPCLM6S_S7qES7XIbm_o";

async function testBooksAPI() {

    const url = "https://www.googleapis.com/books/v1/volumes?q=the+silent+patient";

    try {

        const response = await fetch(url, {
            headers: {
                "x-goog-api-key": API_KEY
            }
        });

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.error("API Error:", error);

    }
}

testBooksAPI();