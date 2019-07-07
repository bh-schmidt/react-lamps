import React, { Component } from 'react';
import Controls from './components/Controls/Controls';
import BuildingFloor from './components/BuildingFloor/BuildingFloor';


const FloorsCount = 5;
const WindowsCount = 3;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            floors: this.generateFloors(),
            isDay: true
        }
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

    changeWindowLight = (floor) => {
        const floors = this.state.floors;
        const floorOfArray = floors.find(x => x.id === floor.id);
        floorOfArray.windows = floor.windows;

        this.setState({ floors })
    }

    updateFloors = (floors) => {
        this.setState({ floors })
    }

    updateDayStatus = (isDay) => {
        this.setState({ isDay });
    }

    getTerrainClassName = () => {
        return this.state.isDay ? 'terrain' : 'terrain night';
    }

    render() {
        return (
            <div className="application">
                <div className={this.getTerrainClassName()}>
                    <div className="building">
                        {this.state.floors.map(floor => (
                            <BuildingFloor key={floor.id} floor={floor} changeWindowLight={this.changeWindowLight}></BuildingFloor>
                        ))}
                    </div>
                    <div className="floor"></div>
                </div >
                <Controls floors={this.state.floors} updateFloors={this.updateFloors} updateDayStatus={this.updateDayStatus}></Controls>
            </div>
        )
    };
}

export default App;
