import React, { Component } from 'react';

class LightButons extends Component {
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
            <div className='light-buttons-div'>
                <button className="button light-button" onClick={this.turnAllLightsOff} disabled={!this.canTurnLightsOff()}><i className="light-off-icon"></i></button>
                <button className="button light-button" onClick={this.turnAllLightsOn} disabled={!this.canTurnLightsOn()}><span className="light-on-icon"></span></button>
            </div>
        );
    }
}

export default LightButons;