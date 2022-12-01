import React from "react";
import {useNavigate} from "react-router-dom";
function ContactUS() {
    const navigate = useNavigate();
    return (
        <div>
            <div>Contact us</div>
            <button onClick={() => navigate("/contact", {replace:true})}>
                Back to contacts
            </button>
        </div>
    )
}
export default ContactUS;