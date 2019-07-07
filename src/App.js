import React, { Component } from 'react';
import Controls from './components/Controls/Controls';
import FloorFactory from './shared/factory/FloorFactory';
import Scenario from './components/Scenario/Scenario';

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

    render() {
        return (
            <div className="application">
                <Scenario {...this.state} updateFloorsStatus={this.updateFloorsStatus}></Scenario>

                <Controls floors={this.state.floors} updateFloors={this.updateFloors} updateDayStatus={this.updateDayStatus}></Controls>
            </div>
        )
    };
}

export default App;
