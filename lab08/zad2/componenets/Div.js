import React from "react";
import { useSearchParams } from "react-router-dom";
function Div() {
    const [params] = useSearchParams();
    const a = parseInt(params.get("a"));
    const b = parseInt(params.get("b"));
    return (
        <div>
            <h1>Div</h1>
            <h3>Result: {a/b}</h3>
        </div>
    )
}
export default Div;