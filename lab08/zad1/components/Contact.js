import React from "react";
import {Link} from "react-router-dom";
function Contact() {
    return (
        <div className="links">
            <Link to="/contact/us">US</Link>
            <Link to="/contact/pl">PL</Link>
            <Link to="/contact/de">DE</Link>
        </div>
    )
}
export default Contact;