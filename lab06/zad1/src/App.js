import React from "react";
import "./style.css";
import Paragraph from "./components/Paragraph";
import PrimaryHeadLine from "./components/PrimaryHeadLine";
import SecondaryHeadLine from "./components/SecondaryHeadLine";
function App() {
    return (
        <div>
            <PrimaryHeadLine />
            <Paragraph />
            <SecondaryHeadLine />
        </div>
    )
}
export default App;