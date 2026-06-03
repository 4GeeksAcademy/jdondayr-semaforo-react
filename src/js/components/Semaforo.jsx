import React, { useState } from "react";

const Semaforo = () => {

    // Active light useState
    const [activeLight, setActiveLight] = useState("red")

    // Lights altern function
    const alternateLights = () => {
        if (activeLight === "red") setActiveLight("green");
        else if (activeLight === "green") setActiveLight("yellow");
        else setActiveLight("red");
    }

    return (
        <div className="container">
            <div className="traffic-lights">
                <button onClick={()=>setActiveLight("red")} className="light" style={{ backgroundColor: "red", boxShadow: (activeLight === "red" ? "0px 0px 25px 12px gold" : "none")}}></button>
                <button onClick={()=>setActiveLight("yellow")} className="light" style={{ backgroundColor: "yellow", boxShadow: (activeLight === "yellow" ? "0px 0px 25px 12px gold" : "none")}}></button>
                <button onClick={()=>setActiveLight("green")} className="light" style={{ backgroundColor: "green", boxShadow: (activeLight === "green" ? "0px 0px 25px 12px gold" : "none")}}></button>
            </div>
            <button onClick={alternateLights} className="button">Alternate</button>
        </div>
    )

}

export default Semaforo;