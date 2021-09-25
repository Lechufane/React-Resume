import React, { useEffect, useState } from "react";

const TITLES = [
    "Quick learner",
    "English advanced",
    "Proactive"
]

function Titles() {
    const [state, setState] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
    let title = TITLES[state];

    useEffect(() => {
        let titleIntervalID = setTimeout(() => {
            state + 1< TITLES.length ? setState(state + 1) : setState(0);
        }, 4000,0)

        return () => clearInterval(titleIntervalID) //cleanup, buena practica

    }, [title])

    useEffect(() => {
        let fadeID = setTimeout(() => {
            setFadeIn(!fadeIn)
        }, 2000,1)
        return () => clearInterval(fadeID)
    }, [fadeIn])




    return ( <p className = { fadeIn ? "title-fade-in" : "title-fade-out" } > { title } </p>); 
    }

    export default Titles;