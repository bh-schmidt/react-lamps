import React from 'react';
import dateFormat from 'dateformat';

const Results = (props) => {
    console.log(props);
    return (<div>
        <div className="inline-data">
            <label >Nascer do Sol:</label>
            <span>{formatDate(props.sunrise)}</span>
        </div>

        <div className="inline-data">
            <label >Por do Sol:</label>
            <span>{formatDate(props.sunset)}</span>
        </div>

        <div className="inline-data">
            <label >Meio dia Solar:</label>
            <span>{formatDate(props.solarNoon)}</span>
        </div>

        <div className="inline-data">
            <label >Tamanho do Dia:</label>
            <span>{formatDate(props.dayLength)}</span>
        </div>

        <div className="inline-data">
            <label >Começo do Crepúsculo Civil:</label>
            <span>{formatDate(props.civilTwilightBegin)}</span>
        </div>

        <div className="inline-data">
            <label >Fim do Crepúsculo Civil:</label>
            <span>{formatDate(props.civilTwilightEnd)}</span>
        </div>

        <div className="inline-data">
            <label >Começo do Crepúsculo Náutico:</label>
            <span>{formatDate(props.nauticalTwilightBegin)}</span>
        </div>

        <div className="inline-data">
            <label >Fim do Crepúsculo Náutico:</label>
            <span>{formatDate(props.nauticalTwilightEnd)}</span>
        </div>

        <div className="inline-data">
            <label >Começo do Crepúsculo Astronômico:</label>
            <span>{formatDate(props.astronomicalTwilightBegin)}</span>
        </div>

        <div className="inline-data">
            <label >Fim do Crepúsculo Astronômico:</label>
            <span>{formatDate(props.astronomicalTwilightEnd)}</span>
        </div>
    </div>);
}

function formatDate(date) {
    if (date) {
        return dateFormat(date, 'hh:MM:ss');
    }

    return null;
}

export default Results;