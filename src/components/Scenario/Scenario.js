import React, { Component } from 'react';
import BuildingFloor from './BuildingFloor/BuildingFloor';

class Scenario extends Component {
    getTerrainClassName = () => {
        return this.props.isDay ? 'scenario' : 'scenario night';
    }

    render() {
        return (
            <div className={this.getTerrainClassName()}>
                <div className="building">
                    {this.props.floors.map(floor => (
                        <BuildingFloor {...this.props} key={floor.id} floor={floor}></BuildingFloor>
                    ))}
                </div>

                <div className="floor"></div>
            </div >
        );
    }
}

export default Scenario;