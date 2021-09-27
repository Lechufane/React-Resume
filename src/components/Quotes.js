import React, { useEffect, useState } from "react";

function Quotes() {

    const [quotes, setQuotesState] = useState(null);

    useEffect(() => {

            fetch("https://zenquotes.io/api/random")//llamo a la api
            .then(data => data.json())//de todos los metodos de la api traigo los datos del metodo json(restful)
            .then(quote =>{
                //creo un objeto que tenga los datos que necesito y lo pongo como nuevo estado
                const quoteData = {
                    frase : quote[0].q,
                    autor: quote[0].a
                }
                setQuotesState(quoteData);
            })

    },[])


    return (
        <div className="quote">
            { quotes? (<p className="quote-text"><em>{quotes.frase}</em> <b>{quotes.autor}</b></p>):null}
    </div>
    )
}

    export default Quotes;