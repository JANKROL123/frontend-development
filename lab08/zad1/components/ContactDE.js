import React from "react";
import {useNavigate} from "react-router-dom";
function ContactDE() {
    const navigate = useNavigate();
    return (
        <div>
            <div>Kontaktiere uns</div>
            <button onClick={() => navigate("/contact", {replace: true})}>
                Zuruck zu Kontakten
            </button>
        </div>
    )
}
export default ContactDE;