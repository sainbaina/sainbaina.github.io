import React from "react";
import "../footer/style.css"
import x from "../../images/icons/x.png"
import youtube from "../../images/icons/youtube.png"
import email from "../../images/icons/email.png"
import linkedin from "../../images/icons/linkedin.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact_logo_container">
                <a href="https://www.youtube.com/channel/UCu_fngaWwZ8DQ0umLv6_0JA">
                    <img className="contact_logo" src={youtube}/>
                </a>
                <a href="https://www.linkedin.com/pub/mikhail-semenov/70/634/334">
                    <img className="contact_logo" src={linkedin} style={{paddingBottom: '0.1rem', width: '2.4rem', height: '2.4rem'}}/>
                </a>
                <a href="https://x.com/semenovmn">
                    <img className="contact_logo" src={x}/>
                </a>
                <a href="mailto:semyonovmn@gmail.com">
                    <img className="contact_logo" src={email}/>
                </a>
            </div>
        </div>
    );
}

export default Footer;