import React from "react";
import {useNavigate} from "react-router-dom";
function ContactPL() {
    const navigate = useNavigate();
    return (
        <div>
            <div>Skontaktuj się z nami</div>
            <button onClick={() => navigate("/contact", {replace:true})}>
                Wróć do kontaktów
            </button>
        </div>
    )
}
export default ContactPL;