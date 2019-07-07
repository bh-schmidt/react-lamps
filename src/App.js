import React, { Component } from 'react';
import Controls from './components/Controls/Controls';
import BuildingFloor from './components/BuildingFloor/BuildingFloor';
import FloorFactory from './shared/factory/FloorFactory';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            floors: FloorFactory.generateFloors(),
            isDay: true
        }
    }

    updateFloorsStatus = (floor) => {
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
                            <BuildingFloor key={floor.id} floor={floor} updateFloorsStatus={this.updateFloorsStatus}></BuildingFloor>
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
