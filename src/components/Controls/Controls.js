import React, { Component } from 'react';
import Results from './Results/Results';
import CoordinatesFormulary from './CoordinatesFormulary/CoordinatesFormulary';
import LightButons from './LightButtons/LightButtons';

class Controls extends Component {
    updateApiResult = (apiResult) => {
        this.setState({ apiResult })
    }

    render() {
        return (
            <div className="controls-area">
                <LightButons {...this.props}></LightButons>

                <CoordinatesFormulary {...this.props} updateApiResult={this.updateApiResult}></CoordinatesFormulary>

                <hr></hr>

                {this.state && this.state.apiResult && (<Results {...this.state.apiResult}></Results>)}
            </div>);
    }
}

export default Controls;