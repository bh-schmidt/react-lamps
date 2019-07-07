import React, { Component } from 'react';

class Window extends Component {
    getWindowClassName = () => this.props.window.lightOn ? "window window-light-on" : "window"

    updateWindowStatus = () => {
        const window = this.props.window;
        window.lightOn = !window.lightOn;

        this.props.updateWindowStatus(window);
    }

    render() {
        return (<div className={this.getWindowClassName()} onClick={this.updateWindowStatus} />);
    }
}

export default Window;