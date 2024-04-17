import React from 'react';
import './padome.css';
import Talis from '../../media/juhnatalis.jpg';
import Gatis from '../../media/gatisbazbauers.jpg';
import Elina from '../../media/elinagailesarkane.jpg';
import Arturs from '../../media/arturszeps.jpg';


function Padome() {
    const googleMapsLink = "https://www.google.com/maps/place/%C4%B6%C4%ABpsalas+iela+6A,+Kurzemes+rajons,+R%C4%ABga,+LV-1048/@56.9529807,24.0792434,17z/data=!3m1!4b1!4m5!3m4!1s0x46eecfe0ef923151:0xe9e52c00cc1a522c!8m2!3d56.9529807!4d24.0814321";

    return (
        <div className="information-container">
            <h3>Rektora padome</h3>
            <div className="person-container">
                <div className="person">
                    <img src={Talis} alt="Talis Juhna" />
                    <p className='special-font'>Rektors Tālis Juhna</p>
                    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                        Ķīpsalas iela 6A, 3. stāvs, Rīga
                    </a>
                    <a href="mailto:talis.juhna@rtu.lv">talis.juhna@rtu.lv</a>
                </div>
                <div className="person">
                    <img src={Gatis} alt="Gatis Bažbauers" />
                    <p className='special-font'>Zinātņu prorektora p.i. Gatis Bažbauers</p>
                    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                        Ķīpsalas iela 6A–366, Rīga
                    </a>
                    <a href="mailto:gatis.bazbauers@rtu.lv">gatis.bazbauers@rtu.lv</a>
                </div>
                <div className="person">
                    <img src={Elina} alt="Elīna Gaile-Sarkane" />
                    <p className='special-font'>Studiju prorektore Elīna Gaile-Sarkane</p>
                    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                        Ķīpsalas iela 6A, 3. stāvs, Rīga
                    </a>
                    <a href="mailto:elina.gaile-sarkane@rtu.lv">elina.gaile-sarkane@rtu.lv</a>
                </div>
                <div className="person">
                    <img src={Arturs} alt="Artūrs Zeps" />
                    <p className='special-font'>Attīstības un finanšu prorektors Artūrs Zeps</p>
                    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                        Ķīpsalas iela 6A-360, Rīga
                    </a>
                    <a href="mailto:arturs.zeps@rtu.lv">arturs.zeps@rtu.lv</a>
                </div>
            </div>
        </div>
    );
}

export default Padome;
