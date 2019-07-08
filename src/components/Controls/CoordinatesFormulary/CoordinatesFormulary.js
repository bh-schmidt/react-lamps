import axios from 'axios';
import React, { Component } from 'react';
import HttpStatusCode from '../../../shared/http/HttpStatusCode';
import SunsetSunriseStatusCode from '../../../shared/http/sunrise-sunset/SunsetSunriseStatusCode';
import ToastrHandler from '../../../shared/toastr/ToastrHandler';
import JsonController from '../../../shared/http/sunrise-sunset/routes/JsonController';

class CoordinatesFormulary extends Component {
    state = {
        latitude: '-25.4457569',
        longitude: '-49.2867721',
    }

    latitude = undefined;
    longitude = undefined;

    componentDidMount = () => {
        this.getTime();
    }

    onTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    applyCoordinates = e => {
        e.preventDefault();

        if (!this.isValidLatitude()) {
            this.showInvalidInputError();
            this.latitude.focus();
            return;
        }

        if (this.isLatitudeZero()) {
            this.showCoordinateZeroError();
            this.latitude.focus();
            return;
        }

        if (!this.isValidLongitude()) {
            this.showInvalidInputError();
            this.longitude.focus();
            return;
        }

        if (this.isLongitudeZero()) {
            this.showCoordinateZeroError();
            this.longitude.focus();
            return;
        }

        this.getTime();
    }

    showCoordinateZeroError = () => {
        ToastrHandler.error('As coordenadas devem ser diferentes de zero.')
    }

    showInvalidInputError = () => {
        ToastrHandler.error('Preencha as coordenadas corretamente.');
    }

    isLatitudeZero = () => {
        return +this.state.latitude === 0;
    }

    isLongitudeZero = () => {
        return +this.state.longitude === 0;
    }

    isValidLatitude = () => {
        return this.state.latitude !== '' &&
            !isNaN(this.state.latitude);
    }

    isValidLongitude = () => {
        return this.state.longitude !== '' &&
            !isNaN(this.state.longitude);
    }

    getTime = async () => {
        try {
            const res = await axios.get(JsonController.defaultGet(this.state.latitude, this.state.longitude))

            if (HttpStatusCode.isOk(res) && SunsetSunriseStatusCode.isOk(res.data)) {
                this.handleResponseData(res.data)
                return;
            }
        } catch (error) {
            console.error(error)
        }

        ToastrHandler.error('Ocorreu um erro, verifique se os filtros estão preenchidos corretamente.');
    };

    handleResponseData = (data) => {
        const atualDate = new Date();

        const apiResult = {
            sunrise: new Date(data.results.sunrise),
            sunset: new Date(data.results.sunset),
            solarNoon: new Date(data.results.solar_noon),
            dayLength: new Date(0, 0, 0, 0, 0, data.results.day_length),
            civilTwilightBegin: new Date(data.results.civil_twilight_begin),
            civilTwilightEnd: new Date(data.results.civil_twilight_end),
            nauticalTwilightBegin: new Date(data.results.nautical_twilight_begin),
            nauticalTwilightEnd: new Date(data.results.nautical_twilight_end),
            astronomicalTwilightBegin: new Date(data.results.astronomical_twilight_begin),
            astronomicalTwilightEnd: new Date(data.results.astronomical_twilight_end)
        }

        const isDay = atualDate > apiResult.sunrise && atualDate < apiResult.sunset;
        this.props.updateApiResult(apiResult);
        this.props.updateDayStatus(isDay);
    }

    render() {
        return (
            <form>
                <div>
                    <label htmlFor='latitude' className='form-label'>Latitude<span className='required-field'> *</span></label>
                    <input
                        id='latitude'
                        name='latitude'
                        type='number'
                        className="input-text"
                        value={this.state.latitude}
                        onChange={this.onTextChange}
                        ref={input => { this.latitude = input }}></input>
                </div>

                <div>
                    <label htmlFor='longitude' className='form-label'>Longitude<span className='required-field'> *</span></label>
                    <input
                        id='longitude'
                        name='longitude'
                        type='number'
                        className="input-text"
                        value={this.state.longitude}
                        onChange={this.onTextChange}
                        ref={input => { this.longitude = input }}></input>
                </div>

                <div className="right-align">
                    <button type='submit' className="button submit-button" onClick={this.applyCoordinates}>Aplicar Coordenadas</button>
                </div>
            </form>);
    }
}

export default CoordinatesFormulary;