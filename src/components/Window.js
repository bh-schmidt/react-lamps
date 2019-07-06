import React, { Component } from 'react';

class Window extends Component {
    getWindowClassName = () => this.props.window.lightOn ? "window window-light-on" : "window"

    changeWindowLight = () => {
        const window = this.props.window;

        window.lightOn = !window.lightOn;

        this.props.changeWindowLight(window);
    }

    render() {
        return (<div className={this.getWindowClassName()} onClick={this.changeWindowLight}>

        </div>);
    }
}

export default Window;