import axios from 'axios';
import React, { Component } from 'react';
import Results from './Results/Results';
import HttpStatusCode from '../../shared/http/HttpStatusCode';
import SunsetSunriseStatusCode from '../../shared/http/sunrise-sunset/SunsetSunriseStatusCode';
import ToastrHandler from '../../shared/toastr/ToastrHandler';
import JsonController from '../../shared/http/sunrise-sunset/routes/JsonController';

class Controls extends Component {
    constructor(props) {
        super();

        this.state = {
            latitude: '-25.4457569',
            longitude: '-49.2867721',
        }
    }

    componentDidMount = () => {
        this.getTime();
    }

    turnAllLightsOn = () => {
        const floors = this.props.floors;

        floors.forEach(floor => {
            floor.windows.forEach(window => {
                window.lightOn = true;
            });
        });

        this.props.updateFloors(floors);
    }

    turnAllLightsOff = () => {
        const floors = this.props.floors;

        floors.forEach(floor => {
            floor.windows.forEach(window => {
                window.lightOn = false;
            });
        });

        this.props.updateFloors(floors);
    }

    canTurnLightsOn = () => {
        return this.props.floors.some(floor => floor.windows.some(window => !window.lightOn))
    }

    canTurnLightsOff = () => {
        return this.props.floors.some(floor => floor.windows.some(window => window.lightOn))
    }

    onTextChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    applyCoordinates = e => {
        e.preventDefault();

        if (this.isValidCoordinates()) {
            this.getTime();
        }
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
        this.setState({ apiResult })
        this.props.updateDayStatus(isDay);
    }

    isValidCoordinates = () => {
        return !isNaN(this.state.latitude) && !isNaN(this.state.longitude)
    }



    render() {
        return (
            <div className="controls-area">
                <div style={{ textAlign: "center" }}>
                    <button className="button light-button" onClick={this.turnAllLightsOff} disabled={!this.canTurnLightsOff()}><i className="light-off-icon"></i></button>
                    <button className="button light-button" onClick={this.turnAllLightsOn} disabled={!this.canTurnLightsOn()}><span className="light-on-icon"></span></button>
                </div>


                <form>
                    <div>
                        <label htmlFor='latitude' className='form-label'>Latitude</label>
                        <input id='latitude' name='latitude' type='number' className="input-text" value={this.state.latitude} onChange={this.onTextChange}></input>
                    </div>

                    <div>
                        <label htmlFor='longitude' className='form-label'>Longitude</label>
                        <input id='longitude' name='longitude' type='number' className="input-text" value={this.state.longitude} onChange={this.onTextChange}></input>
                    </div>

                    <div className="right-align">
                        <button type='submit' className="button submit-button" onClick={this.applyCoordinates}>Aplicar Coordenadas</button>
                    </div>
                </form>

                <hr></hr>

                {this.state.apiResult && (<Results {...this.state.apiResult}></Results>)}
            </div>);
    }
}

export default Controls;