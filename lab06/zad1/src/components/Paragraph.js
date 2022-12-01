import React from "react";
import { useColors } from "./ColorProvider";
function Paragraph() {
    const data = useColors();
    const color = data.colorObject.paragraph;
    return (
        <p style={{color: color}}>Paragraph</p>
    )
}
export default Paragraph;