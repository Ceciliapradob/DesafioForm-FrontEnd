import React from 'react';
import './Card.css';

function Card({ cardName = "", cardNumber = "", expirationDate = { month: "", year: "" } }) {
    

    return (

        <div className="recto-card">
            <div className="circles">
                <div className='plain-circle'/>
                <div className='border-circle'/>
            </div>
            <h1>{cardNumber === "" ? "0000 0000 0000 0000" : cardNumber}</h1>
            <div className='recto-card-subcontainer small-info'>
                <p>{cardName === "" ? "Jane Appleseed" : cardName}</p>
                <div className='recto-card-date'>
                    <p>{expirationDate.month === "" ? "00" : expirationDate.month}/{expirationDate.year === "" ? "00" : expirationDate.year}</p>
                </div>
            </div>
        </div>
    );
}

function CardTwo({ cvc = "" }) {
    return (
        <div className="verso-card small-info">
            <p>{cvc === "" ? "000" : cvc}</p>
        </div>
    );
}

export { Card, CardTwo };
