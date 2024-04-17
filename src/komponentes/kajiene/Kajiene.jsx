import React from 'react';
import './kajiene.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Kajiene = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column-h2 footer-column-header">
          <h2>Kājiene</h2>
          <p >Vārds “ilgtspējiba” kļūst arvien populārāks un plaši izmantojams, kad runa iet par informācijas tehnoloģiju produktu izstrādi, kurus specialisti mēģina pielagot pašreizēji eksistejošiem normām un standartiem, kā arī pasūtītāju vajadzībām, cenšoties arī neapdraudēt nākamo paaudžu iespējas apmierināt savas vajadzīas. (T.Frick, 2008.gada augusts). </p>
        </div>
        <div className="footer-row">
          <div className="footer-sub-container">
            <div className="footer-column footer-column-contact">
              <h2>Kontakti</h2>
              <p>Rīga, Āzenes 12</p>
              <p>+37120222146</p>
              <p>daniils.buinickis@edu.rtu.lv</p>
            </div>
            <div className="footer-column footer-column-links">
              <h2>Saites</h2>

                <ul className="social-icons">
                <li><a href="https://www.facebook.com/share/k57cTXcgx54yd2v4/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="https://www.tiktok.com/@danik_bd?_t=8lDjGH5U15c&_r=1"><FontAwesomeIcon icon={faTiktok} /></a></li>
                <li><a href="https://www.instagram.com/buindans?igsh=M2I2anNzbTU3amcw"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
                <li><a href="#">Atgriezties sākumā</a></li>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Kajiene;
