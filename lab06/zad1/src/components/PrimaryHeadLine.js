import React from "react";
import { useColors } from "./ColorProvider";
function PrimaryHeadLine() {
    const data = useColors();
    const color = data.colorObject.primaryHeadLine;
    return (
        <h1 style={{color: color}}>PrimaryHeadLine</h1>
    )
}
export default PrimaryHeadLine;