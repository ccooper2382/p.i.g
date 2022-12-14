import React from 'react';
import One from "./dice/dice-1.svg"
import Two from "./dice/dice-2.svg"
import Three from "./dice/dice-3.svg"
import Four from "./dice/dice-4.svg"
import Five from "./dice/dice-5.svg"
import Six from "./dice/dice-6.svg"


function Die({value}) {

    switch (value) {
        case 2:
            return <img src={Two} alt="Two"/>;
        case 3:
            return <img src={Three} alt="Three"/>;
        case 4:
            return <img src={Four} alt="Four"/>;
        case 5:
            return <img src={Five} alt="Five"/>;
        case 6:
            return <img src={Six} alt="Six"/>;
        default:
            return (<img src={One} alt="One"/>);

    }


}

export default Die;