import React from 'react';
import liverpool from "./images/liverpool.png"
import amazon from "./images/amazonbb.png"

function footer2() {
    return (
        <div className= "footer2">
            
            <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50676310">
                <img src={liverpool} alt="" />
                <h2>Mesa # 50676310</h2>

            </a>
            <a href="https://www.amazon.com.mx/baby-reg/perla-flores-febrero-2021-guadalajara/24MPZN2J0DH82">
                <img src={amazon} alt="" />
            </a>
            
        </div>
    )
}

export default footer2
