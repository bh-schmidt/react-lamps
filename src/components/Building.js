import React, { Component } from 'react';
import BuildingFloor from './BuildingFloor';

class Building extends Component {
    changeWindowLight = (floor) => {
        const floors = this.props.floors;
        const floorOfArray = this.props.floors.find(x => x.id === floor.id);
        floorOfArray.windows = floor.windows;

        this.props.changeWindowLight(floors);
    }

    render() {
        return (<div className="building">
            {this.props.floors.map(floor => (
                <BuildingFloor key={floor.id} floor={floor} changeWindowLight={this.changeWindowLight}></BuildingFloor>
            ))}
        </div>);
    }
}

export default Building;