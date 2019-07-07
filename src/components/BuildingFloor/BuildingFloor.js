import React, { Component } from 'react';
import Window from './Window/Window';

class BuildingFloor extends Component {
    changeWindowLight = (window) => {
        const floor = this.props.floor;
        const windowOfArray = floor.windows.find(x => x.id === window.id);
        windowOfArray.lightOn = window.lightOn;

        this.props.changeWindowLight(floor);
    }

    render() {
        return (<div className="building-floor">
            {this.props.floor.windows.map(window => (
                <Window key={window.id} window={window} changeWindowLight={this.changeWindowLight}></Window>
            ))}
        </div>);
    }
}

export default BuildingFloor;