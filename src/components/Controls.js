import React, { Component } from 'react';

class Controls extends Component {
    constructor(props) {
        super();

        this.state = {
            latitude: props.latitude,
            longitude: props.longitude
        }
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

        if (this.isValidCoordinates())
            this.props.updateCoordinates(this.state.latitude, this.state.longitude)
    }

    isValidCoordinates = () => {
        return !isNaN(this.state.latitude) && !isNaN(this.state.longitude)
    }

    render() {
        return (
            <div className="controls-area">
                <div style={{ textAlign: "center" }}>
                    <button className="button light-button" onClick={this.turnAllLightsOff} disabled={!this.canTurnLightsOff()}><span className="light-off-icon"></span></button>
                    <button className="button light-button" onClick={this.turnAllLightsOn} disabled={!this.canTurnLightsOn()}><span className="light-on-icon"></span></button>
                </div>


                <form>
                    <div>
                        <label htmlFor='latitude'>Latitude</label>
                        <input id='latitude' name='latitude' type='number' className="input-text" value={this.state.latitude} onChange={this.onTextChange}></input>
                    </div>

                    <div>
                        <label htmlFor='longitude'>Longitude</label>
                        <input id='longitude' name='longitude' type='number' className="input-text" value={this.state.longitude} onChange={this.onTextChange}></input>
                    </div>

                    <div className="right-align">
                        <button type='submit' className="button submit-button" onClick={this.applyCoordinates}>Aplicar Coordenadas</button>
                    </div>
                </form>

            </div>);
    }
}

export default Controls;