import React from "react";
import {useLocation} from "react-router-dom";
function Whoops404() {
    const location = useLocation();
    return (
        <div>
            <h1>Nie znaleziono elemenentu: {location.pathname}</h1>
        </div>
    )
}
export default Whoops404;