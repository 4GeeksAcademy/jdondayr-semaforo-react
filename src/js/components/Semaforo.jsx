import React, { useState } from "react";

const Semaforo = () => {

    const [topShadow, setTopShadow] = useState("none");
    const [middleShadow, setMiddleShadow] = useState("none");
    const [bottomShadow, setBottomShadow] = useState("none");

    const changeTopShadow = () => {
        if (topShadow == "none") {
            setTopShadow("0px 0px 25px 12px gold");
            setMiddleShadow("none");
            setBottomShadow("none")
        }
        else setTopShadow("none");
    }

    const changeMiddleShadow = () => {
        if (middleShadow == "none") {
            setMiddleShadow("0px 0px 25px 12px gold");
            setTopShadow("none");
            setBottomShadow("none");
        }
        else setMiddleShadow("none")
    }

    const changeBottomShadow = () => {
        if (bottomShadow == "none") {
            setBottomShadow("0px 0px 25px 12px gold");
            setTopShadow("none");
            setMiddleShadow("none");
        }
        else setBottomShadow("none");
    }

    return (
        <div className="contenedor">
            <div className="semaforo">
                <button className="light" onClick={changeTopShadow} style={{ backgroundColor: "red", boxShadow: topShadow }}></button>
                <button className="light" onClick={changeMiddleShadow} style={{ backgroundColor: "yellow", boxShadow: middleShadow }}></button>
                <button className="light" onClick={changeBottomShadow} style={{ backgroundColor: "green", boxShadow: bottomShadow }}></button>
            </div>
        </div>
    )

}

export default Semaforo;