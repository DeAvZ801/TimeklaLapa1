import React from "react";
import RTUImage from "../../media/RTU.png";
import "./saturs.css";

function Saturs() {
    return (
        <div className="content__container">
            <div className="top__container">
                <figure className="image__container">
                    <img
                        src={RTUImage}
                        alt="RTU - Rīgas Tehniskā universitāte"
                        loading="lazy"
                    />
                </figure>
            </div>
            <div className="text__container">
                <h3 className="animated-text">Rīgas Tehniskā universitāte</h3>
                <p className="animated-text">
                    Rīgas Tehniskā universitāte (RTU) ir vadošā tehniskā augstskola Latvijā un viena no lielākajām Baltijas valstīs, kas nodrošina inženierzinātņu, dabaszinātņu un sociālo zinātņu augstāko izglītību.
                </p>
                <p className="animated-text">
                    Ar savu teicamo studiju programmu un pētniecības projektu klāstu, RTU ir ieguvusi starptautisku atzinību, veicinot zināšanu attīstību un tehnoloģisko inovāciju.
                </p>
            </div>
        </div>
    );
}

export default Saturs;
