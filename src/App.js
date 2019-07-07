import axios from 'axios';
import React, { Component } from 'react';
import Building from './components/Building';
import Controls from './components/Controls';

const FloorsCount = 5;
const WindowsCount = 4;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            floors: this.generateFloors(),
            latitude: '-25.4457569',
            longitude: '-49.2867721',
            isDay: true
        }
    }

    componentDidMount = () => {
        this.getTime();
    }

    getTime = async () => {
        if (!this.isCoordinateValid())
            return;

        try {
            const res = await axios.get(`https://api.sunrise-sunset.org/json?lat=${this.state.latitude}&lng=${this.state.longitude}&date=today&formatted=0`)
            const sunrise = new Date(res.data.results.sunrise)
            const sunset = new Date(res.data.results.sunset)
            const atualDate = new Date();

            this.setState({ isDay: atualDate > sunrise && atualDate < sunset });
        } catch (error) {
            console.error(error)
        }
    };

    isCoordinateValid = () => {
        return !isNaN(this.state.latitude) && !isNaN(this.state.longitude)
    }

    generateFloors = () => {
        var floors = [];
        for (let i = 0; i < FloorsCount; i++) {
            floors.push({
                id: i,
                windows: this.generateWindows()

            })
        }
        return floors;
    }

    generateWindows = () => {
        var windows = [];
        for (let i = 0; i < WindowsCount; i++) {
            windows.push({
                id: i,
                lightOn: false

            })
        }
        return windows;
    }

    changeWindowLight = (floors) => {
        this.setState({ floors })
    }

    updateFloors = (floors) => {
        this.setState({ floors })
    }

    updateCoordinates = (latitude, longitude) => {
        this.setState({ latitude, longitude });
        this.getTime();
    }

    getTerrainClassName = () => {
        return this.state.isDay ? 'terrain' : 'terrain night';
    }

    render() {
        const state = this.state;

        return (
            <div className="application">
                <div className={this.getTerrainClassName()}>
                    <Building floors={state.floors} changeWindowLight={this.changeWindowLight}></Building>
                    <div className="floor"></div>
                </div >
                <Controls floors={this.state.floors} updateFloors={this.updateFloors} latitude={this.state.latitude} longitude={this.state.longitude}
                    updateCoordinates={this.updateCoordinates}></Controls>
            </div>
        )
    };
}

export default App;
