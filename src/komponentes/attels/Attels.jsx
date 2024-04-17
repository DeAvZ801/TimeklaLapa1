import React, { useState, useEffect } from 'react';
import Lake from '../../media/pamatstudijas.jpg';
import './attels.css';

function Attels() {
    const [style, setStyle] = useState({
        width: '100%',
        height: 'auto',
        opacity: 1,
        transform: 'scale(1)'
    });

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const image = document.getElementById('image');
            if (image) {
                const { top, bottom } = image.getBoundingClientRect();
                const visibleHeight = windowHeight - top > 0 ? Math.min(bottom, windowHeight) - top : 0;
                const opacity = visibleHeight / windowHeight;
                const scale = 0.5 + opacity * 0.5;  // Начинает с масштаба 0.5 и увеличивается до 1, когда изображение появляется в поле зрения
                setStyle({
                    width: '100%',
                    height: 'auto',
                    opacity: opacity,
                    transform: `scale(${scale})`
                });
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="scroll__image-container">
            <img
                id="image"
                src={Lake}
                alt="Pamatstudiju progrmmas"
                style={{ ...style }}
                loading="lazy"
                srcSet={`${Lake} 400w, ${Lake} 800w, ${Lake} 1200w`}
                sizes="(max-width: 600px) 100vw, (max-width: 768px) 50vw, 33.3vw"
            />
            <div className="scroll__text-container">
                {showModal && (
                    <div className="modal">
                        <p className="text">
                            RTU fakultātes piedāvā daudzpusīgu tehnisko un inženierzinātņu izglītību.
                            Fakultātēs valda senas un klasiskas augstākās akadēmiskās un profesionālās izglītības
                            tradīcijas, tiek sagatavoti augsti kvalificēti un mūsdienu darba tirgū pieprasīti speciālisti.
                            Studijas notiek arī RTU Rīgas Biznesa skolā un četros reģionālajos centros.
                        </p>
                    </div>
                )}
                <button className='scroll__button' onClick={toggleModal}>Parādīt Informāciju</button>
            </div>
        </div>
    );
}

export default Attels;
