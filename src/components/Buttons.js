import React, { Component } from 'react';

class Buttons extends Component {
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

    render() {
        return (
            <div className="buttons-area">
                <button className="light-on-button" onClick={this.turnAllLightsOn} disabled={!this.canTurnLightsOn()}>Ascender Todas</button>
                <button className="light-off-button" onClick={this.turnAllLightsOff} disabled={!this.canTurnLightsOff()}>Apagar Todas</button>
            </div>);
    }
}

export default Buttons;