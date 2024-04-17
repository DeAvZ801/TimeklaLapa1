import React, { useState } from 'react';
import './kolonnas.css';
import SvgIcon from '../../media/svg.svg';

function Kolonnas() {
    const [activeColumn, setActiveColumn] = useState(null);

    const toggleColumn = (column) => {

        setActiveColumn(activeColumn === column ? null : column);
    };

    return (
        <div className="section">
            <h2 className="section__title">Energoefektīva tīmekļa izstrāde kā līdzeklis elektrības patēriņa samazināšanai</h2>
            <p className="section__description">
                Šīs pētījums fokusējas uz mūsdienās aktuālo tēmu - energoefektīvu tīmekļa izstrādi izmantojot zināmas “zaļās” tīmekļa
                izstrādes koncepcijas kuru realizācija un analīze palīdzēs izstrādāt un izpētīt ilgtspējīgas un dabai draudzīgas digitālās
                platformas.
            </p>
            <div className="columns">
                {[1, 2, 3].map((column) => (
                    <div key={column} className="column">
                        <img src={SvgIcon} alt={`Ikona kolonnai ${column}`} className="column__icon" />
                        <h3 className="column__title">
                            {column === 1
                                ? "Navigācija vietnē"
                                : column === 2
                                ? "Lietotāja pieredze"
                                : "Optimizācija un efektivitāte"}
                        </h3>
                        {activeColumn === column && (
                            <p className="column__text">
                                {column === 1
                                    ? "Ilgtspējīgās tīmekļa izstrādes pamatā ir tīmekļa dizains, kas no pirmā acu uzmetiena neko ļaunu nespēj izdarīt dabai, bet tas ir cieši saistīts ar enerģijas milzīgu patēriņu."
                                    : column === 2
                                    ? "Mūsdienās tīmekļa izstrādātājiem ir plašas iespējas dinamisko un visādo vizuālo efektu izmantošanai, kas veicina efektīvāku un dabai draudzīgāku tieši tīmekļa izstrādi."
                                    : "Optimizācija un efektivitāte ir svarīgi aspekti ilgtspējīgā tīmekļa izstrādē, veicinot mazāku datu apjomu pārraidi un zemāku enerģijas patēriņu."}
                            </p>
                        )}
                        <button className="column__button" onClick={() => toggleColumn(column)}>
                            {activeColumn === column ? 'Aizvērt Informāciju' : `Parādīt Informāciju`}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Kolonnas;
