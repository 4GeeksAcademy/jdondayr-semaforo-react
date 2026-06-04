import React, { useState } from "react";

const Semaforo = () => {

    // Active light useState
    const [activeLight, setActiveLight] = useState("red");

    // Lights
    const lightsList = ["red", "yellow", "green"];
    const lightsJSX = lightsList.map((light, key) => <button key={key} onClick={() => setActiveLight(light)} className="light" style={{ backgroundColor: light, boxShadow: (activeLight === light ? "0px 0px 25px 12px gold" : "none") }}></button>
    )

    // Add purple light
    const [purpleLightOn, setPurpleLightOn] = useState(false);

    // Lights altern function
    const alternateLights = () => {
        if (purpleLightOn) {
            if (activeLight === "red") setActiveLight("purple");
            else if (activeLight === "purple") setActiveLight("green");
            else if (activeLight === "green") setActiveLight("yellow");
            else setActiveLight("red");
        }
        else {
            if (activeLight === "red") setActiveLight("green");
            else if (activeLight === "green") setActiveLight("yellow");
            else setActiveLight("red");
        }
    }

    return (
        <div className="container">
            <div className="traffic-lights-box">
                <div className="stick"></div>
                <div className="traffic-lights">
                    {lightsJSX}
                    <button onClick={() => setActiveLight("purple")} className="light"
                        style={{
                            backgroundColor: "purple",
                            boxShadow: (activeLight === "purple" ? "0px 0px 25px 12px gold" : "none"),
                            display: (purpleLightOn ? "block" : "none")
                        }}></button>
                </div>
            </div>
            <button onClick={alternateLights} className="button">Alternate</button>
            <button onClick={()=>setPurpleLightOn(!purpleLightOn)} className="button">Add/Quit purple light</button>
            <button onClick={()=>setActiveLight(null)} className="button">Turn off lights</button>
        </div>
    )

}

export default Semaforo;