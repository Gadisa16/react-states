import React, { Component } from 'react';

class EvenCounterDisplayer extends Component {
    render() {
        const evenClicks = Math.floor(this.props.evClick_count / 2) * 2;
        return <h2>Even clicks: {evenClicks}</h2>;
    }
}

export default EvenCounterDisplayer;
