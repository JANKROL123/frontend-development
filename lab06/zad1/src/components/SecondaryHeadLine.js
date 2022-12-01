import {React} from "react";
import { useColors } from "./ColorProvider";
function SecondaryHeadLine() {
    const color = useColors().colorObject.secondaryHeadLine;
    return (
        <h2 style={{color: color}}>SecondaryHeadLine</h2>
    )
}
export default SecondaryHeadLine;