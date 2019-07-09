import React from 'react';
import dateFormat from 'dateformat';

const Results = (props) => {
    return (<div>
        <div className="data">
            <label >Nascer do Sol:</label>
            <span>{formateToHour(props.sunrise)}</span>
        </div>

        <div className="data">
            <label >Por do Sol:</label>
            <span>{formateToHour(props.sunset)}</span>
        </div>

        <div className="data">
            <label >Meio dia Solar:</label>
            <span>{formateToHour(props.solarNoon)}</span>
        </div>

        <div className="data">
            <label >Tamanho do Dia:</label>
            <span>{formateToHour(props.dayLength)}</span>
        </div>

        <div className="data">
            <label >Começo do Crepúsculo Civil:</label>
            <span>{formateToHour(props.civilTwilightBegin)}</span>
        </div>

        <div className="data">
            <label >Fim do Crepúsculo Civil:</label>
            <span>{formateToHour(props.civilTwilightEnd)}</span>
        </div>

        <div className="data">
            <label >Começo do Crepúsculo Náutico:</label>
            <span>{formateToHour(props.nauticalTwilightBegin)}</span>
        </div>

        <div className="data">
            <label >Fim do Crepúsculo Náutico:</label>
            <span>{formateToHour(props.nauticalTwilightEnd)}</span>
        </div>

        <div className="data">
            <label >Começo do Crepúsculo Astronômico:</label>
            <span>{formateToHour(props.astronomicalTwilightBegin)}</span>
        </div>

        <div className="data">
            <label >Fim do Crepúsculo Astronômico:</label>
            <span>{formateToHour(props.astronomicalTwilightEnd)}</span>
        </div>
    </div>);
}

function formateToHour(date) {
    if (date) {
        return dateFormat(date, 'hh:MM:ss Z');
    }

    return null;
}

export default Results;