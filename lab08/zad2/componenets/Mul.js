import React from "react";
import { useSearchParams } from "react-router-dom";
function Mul() {
    const [params] = useSearchParams();
    const a = parseInt(params.get("a"));
    const b = parseInt(params.get("b"));
    return (
        <div>
            <h1>Mul</h1>
            <h3>Result: {a*b}</h3>
        </div>
    )
}
export default Mul;