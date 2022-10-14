import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerMenu">
                <p className="menuItem">Meta</p>
                <p className="menuItem">Informacje</p>
                <p className="menuItem">Blog</p>
                <p className="menuItem">Praca</p>
                <p className="menuItem">Pomoc</p>
                <p className="menuItem">API</p>
                <p className="menuItem">Prywatność</p>
                <p className="menuItem">Regulamin</p>
                <p className="menuItem">Najpopularniejsze konta</p>
                <p className="menuItem">Hasztagi</p>
                <p className="menuItem">Lokalizacja</p>
                <p className="menuItem">Instagram Lite</p>
                <p className="menuItem">Przesyłanie listy kontaktów i osób niebędących uytkownikami</p>
            </div>

            <div className="language">
                <p>Polski &#8744;</p>
                <p>&#169; 2022 Instagram from Meta</p>
            </div>
        </div>
    );
};

export default Footer;