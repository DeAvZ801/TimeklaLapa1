import React, { useState } from 'react';
import './nakamais.css'; 
import Burti from '../../media/Burti.jpg';
import Vestibils from '../../media/Vestibils.jpg';
import Kampuss from '../../media/Kampuss.jpg';
import Svg from '../../media/svgPopUp.svg';

function Nakamais() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const images = [Burti, Vestibils, Kampuss];

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <div className="nakamais-container">
            <div className="nakamais-heading">
                <h3>Rīgas Tehniskā universitāte</h3>
                <div className="svg-container">
                    <img src={Svg} alt="SVG Animation" className="moving__svg" />
                </div>
            </div>
            <div className="nakamais-container-button">
                <div className="nakamais-button">
                    <button className="my-button" onClick={handleButtonClick}>
                        Parādīt Informāciju
                    </button>
                </div>
            </div>
            <div className="nakamais-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={activeIndex === index ? "active" : ""}
                        loading="lazy"
                    />
                ))}
                <button
                    className="next-button"
                    onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
                >
                    Nākamais
                </button>
            </div>
            {showPopup && (
                <div className="popup-container">
                    <div className="popup">
                        <h2>Iznirstošais logs</h2>
                        <p>Jūs atrodaties testa lapā, kas ir izstrādāta, lai palīdzētu izmērīt elektroenerģijas patēriņu.</p>
                        <button className="popup-close-button" onClick={handlePopupClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nakamais;
